const addItem = document.querySelector('#item');

const addButton = document.querySelector('#bt');

const ul = document.querySelector('#list ul');


// Add <li> element with exit

addButton.addEventListener('click', () => {
    let li = document.createElement('li');
    let sp = addImg();
    li.textContent = addItem.value;

    if(addItem.value === ''){
        addItem.classList.add('red');
        alert("Try agian");
       // ul.removeChild(li);
    }else{
        addItem.classList.remove('red');
        li.appendChild(sp);
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