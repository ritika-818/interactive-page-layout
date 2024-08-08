import arr from './cardNames.js';
const categorySet = new Set();
const btnContainer = document.getElementById('btn-container');
const cardContainer = document.getElementById('card-container');
const allBtn = document.getElementById('all');
allBtn.addEventListener('click',()=>onIdCLick('all'));
function onIdCLick(val){
    console.log(val);
    cardContainer.innerHTML='';
    const filterArr = arr.filter((item)=>item.category.toLowerCase()===val.toLowerCase());
    if(val!=='all')onLoad(filterArr);
    else onLoad(arr);
}
function onLoad(array){
    array.forEach((item)=>{
        const card = document.createElement('div');
        card.classList.add('card');
        const img = document.createElement('img');
        img.setAttribute('src',item.image);
        card.appendChild(img);
        const name = document.createElement('div');
        name.textContent = item.name;
        name.style.fontWeight= 'bold';
        card.appendChild(name);
        const price = document.createElement('div');
        price.textContent = '$'+item.price;
        price.style.color='red';
        card.appendChild(price);
        const category = document.createElement('div');
        category.textContent = item.category;
        category.classList.add('category');
        card.appendChild(category);
        cardContainer.appendChild(card);
        categorySet.add(item.category);
    });
}

function addbtn(){
    for(const x of categorySet){
        const btn = document.createElement('button');
        btn.textContent = x;
        btn.classList.add('btn');
        btn.setAttribute('id',x);
        btn.addEventListener('click',()=>onIdCLick(x));
        btnContainer.appendChild(btn);
    }
}
const inp = document.getElementById('inp');
    inp.addEventListener('input',(e)=>{
        const val= e.target.value;
        cardContainer.innerHTML='';
        const filterArr = arr.filter((item)=>{
            return item.name.toLowerCase().includes(val.toLowerCase());
        })
        filterArr.map((item)=>{
        const card = document.createElement('div');
        card.classList.add('card');
        const img = document.createElement('img');
        img.setAttribute('src',item.image);
        card.appendChild(img);
        const name = document.createElement('div');
        name.textContent = item.name;
        name.style.fontWeight= 'bold';
        card.appendChild(name);
        const price = document.createElement('div');
        price.textContent = '$'+item.price;
        price.style.color='red';
        card.appendChild(price);
        const category = document.createElement('div');
        category.textContent = item.category;
        category.classList.add('category');
        card.appendChild(category);
        cardContainer.appendChild(card);
        })
        inp.textContent='';
    });

function loadFunc(){
    onLoad(arr);
    addbtn();
}
window.addEventListener('load',loadFunc);