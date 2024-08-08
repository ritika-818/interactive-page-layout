const arr = [
    { id: 1, name: "Laptop", price: 999.99, category: "Electronics", image: "https://via.placeholder.com/250x200?text=Laptop" },
    { id: 2, name: "Smartphone", price: 699.99, category: "Electronics", image: "https://via.placeholder.com/250x200?text=Smartphone" },
    { id: 3, name: "Headphones", price: 199.99, category: "Electronics", image: "https://via.placeholder.com/250x200?text=Headphones" },
    { id: 4, name: "Running Shoes", price: 89.99, category: "Sports", image: "https://via.placeholder.com/250x200?text=Running+Shoes" },
    { id: 5, name: "Yoga Mat", price: 29.99, category: "Sports", image: "https://via.placeholder.com/250x200?text=Yoga+Mat" },
    { id: 6, name: "Coffee Maker", price: 79.99, category: "Home", image: "https://via.placeholder.com/250x200?text=Coffee+Maker" },
    { id: 7, name: "Blender", price: 49.99, category: "Home", image: "https://via.placeholder.com/250x200?text=Blender" },
    { id: 8, name: "Novel", price: 14.99, category: "Books", image: "https://via.placeholder.com/250x200?text=Novel" },
];
function onIdCLick(val){
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
        card.appendChild(name);
        const price = document.createElement('div');
        price.textContent = item.price;
        card.appendChild(price);
        const category = document.createElement('div');
        category.textContent = item.category;
        category.classList.add('category');
        card.appendChild(category);
        cardContainer.appendChild(card);
    });
}

const inp = document.getElementById('inp');
    inp.addEventListener('input',(e)=>{
        const val= e.target.value;
        cardContainer.innerHTML='';
        const filterArr = arr.filter((item)=>{
            return item.category.toLowerCase().includes(val.toLowerCase());
        })
        filterArr.map((item)=>{
            const card = document.createElement('div');
        card.classList.add('card');
        const img = document.createElement('img');
        img.setAttribute('src',item.image);
        card.appendChild(img);
        const name = document.createElement('div');
        name.textContent = item.name;
        card.appendChild(name);
        const price = document.createElement('div');
        price.textContent = item.price;
        card.appendChild(price);
        const category = document.createElement('div');
        category.textContent = item.category;
        category.classList.add('category');
        card.appendChild(category);
        cardContainer.appendChild(card);
        })
        inp.textContent='';
    })


const cardContainer = document.getElementById('card-container');
window.addEventListener('load',onLoad(arr));