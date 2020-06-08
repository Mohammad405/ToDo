const addItem = document.querySelector('#item');

const addButton = document.querySelector('#bt');

const ul = document.querySelector('#list ul');

const count = document.querySelector('#count');


// Add <li> element with exit

addButton.addEventListener('click', () => {
    let li = document.createElement('li');
    let sp = addImg();
    li.textContent = addItem.value;

    if(addItem.value === ''){
        addItem.classList.add('red');
        alert("Try agian");

    }else{
       if(addItem.value.length > 50){
           let chars = addItem.value.slice(0,45);
           li.textContent = chars;
       }
       addItem.classList.remove('red');
       li.appendChild(sp);
       li.classList.add('b-shadow');
       ul.appendChild(li);
        addItem.value = '';
    }
  
});

const addImg = () =>{
    let span = document.createElement('span');
    let img = document.createElement('img');
    img.setAttribute('src',"img/close.svg");
    img.setAttribute('alt',"remove icon");
    img.classList.add('l-img')

    // Delete item

    img.addEventListener('click', (e) => {
        let item = e.target.parentNode.parentNode;
        item.parentNode.removeChild(item);
    });
    span.appendChild(img);
    return span;
}

window.setInterval(function(){
    count.textContent = ul.children.length;
  }, );