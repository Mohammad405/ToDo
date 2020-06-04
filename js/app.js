const addItem = document.querySelector('#item');

const addButton = document.querySelector('#bt');

const ul = document.querySelector('#list ul');

addButton.addEventListener('click', () => {
    let li = document.createElement('li');
    let sp = del();
    li.textContent = addItem.value;

    if(addItem.value === ''){
        addItem.classList.add('red');
        alert("Try agian");
        li.document.removeChild();
    }else{
        addItem.classList.remove('red');
    }

    li.appendChild(sp);
    ul.appendChild(li);
    addItem.value = '';
});

const del = () =>{
    let span = document.createElement('span');
    let img = document.createElement('img');
    img.setAttribute('src',"img/close.svg");
    img.setAttribute('alt',"exit icon");
    img.classList.add('l-img')
    span.appendChild(img);
    return span;
}