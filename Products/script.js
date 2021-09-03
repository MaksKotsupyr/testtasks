// wait loaded document
document.addEventListener("DOMContentLoaded", function() { 
    Data(arr);
});
// base
const arr = [
    {
        "id": 1,
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9YiFLBnHS4hIEs8Bp_I1qsWHBZk81wcMZsw&usqp=CAU",
        "name": "Морква",
        "description": "Багата на вітаміни та мікроелементи.",
        "count": 4,
        "size": {
            "width": 20,
            "height": 200
        },
        "weight": "200g",
        "comments": ["Корисна", "Соковита"]
    },
    {
        "id": 2,
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGKY1YSdRjX-aqr9aCN5qOfFiLn571KirJg&usqp=CAU",
        "name": "Огірок",
        "description": "Вид одомашнених овочів з родини гарбузових.",
        "count": 2,
        "size": {
            "width": 30,
            "height": 100
        },
        "weight": "150g",
        "comments": ["Дієтичний"]
    },
    {
        "id": 3,
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIAhPG-rlH7mMO0ny_obvqT_-qnhZ7QTD2Bg&usqp=CAU",
        "name": "Помідор",
        "description": "Вирощують як овочеву культуру.",
        "count": 4,
        "size": {
            "width": 50,
            "height": 50
        },
        "weight": "300g",
        "comments": ["Вітамінний", "Корисний"]
    }
]

let catalogBlock = document.querySelector('#catalog');
// add element function
function addItem(){
    // take needed variables
    let modal = document.getElementById("myModal");
    let btn = document.getElementById("myBtn");
    let cancel = document.querySelector(".cancel");
    // show window
    btn.onclick = function() {
        modal.style.display = "block";
    }
    // When the user clicks on Cancel btn
    cancel.onclick = function() {
        cancelErr();
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            cancelErr();
        }
    }
    // close function 
    function cancelErr(){
        modal.style.display = "none";
        alert('Lets start again!');
    }
}
// validate function
function validateInpt(){
    // take needed variables
    let idN = document.querySelector('#id_').value;    
    let imageN = document.querySelector('#Image_').value;
    let nameN = document.querySelector('#Name_').value;
    let descriptionN = document.querySelector('#Description_').value;
    let countN = document.querySelector('#Count_').value;
    let sizeWN = document.querySelector('#SizeWidth_').value;
    let sizeHN = document.querySelector('#SizeHeight_').value;
    let weightN = document.querySelector('#Weight_').value;
    let commentsN = document.querySelector('#Comments').value;
    // regular expression for validate inputs
    if (/^[0-9]+$/.test(idN) ||  /^(ftp|http|https):\/\/[^ "]+$/.test(imageN)|| /^[a-zA-Z]+$/.test(nameN) || /^[a-zA-Z]+$/.test(descriptionN) || /^[0-9]+$/.test(countN) || /^[0-9]+$/.test(sizeWN) || /^[0-9]+$/.test(sizeHN) || /^[0-9]+$/.test(weightN) || /^[a-zA-Z]+$/.test(commentsN)) {
        // create new element
        let mass = {
            "id": +idN,
            "imageUrl": imageN,
            "name": nameN,
            "description": descriptionN,
            "count": +countN,
            "size": {
                "width": +sizeWN,
                "height": +sizeHN
            },
            "weight": +weightN,
            "comments": [commentsN.split(' ')]
        }
        // add new element, clear form and cclose window
        arr.push(mass)
        Data(arr);
        mass = {};
        document.getElementById("myModal").style.display = "none";
        alert('Element id added!');
    }
}
// data function
function Data(arrow) {
    // load all items from data
    let cardData = '';
    for (let key in arrow){
        cardData += `
            <div class="product product${key}">
                <img src="${arrow[key].imageUrl}" alt="${arrow[key].name}">
                <p id='names'>${arrow[key].name}</p>
                <p>${arrow[key].description}</p>
                <p>Залишок: ${arrow[key].count}кг.</p>
                <div class="cardButtons">
                    <button class="btn moreInf" onclick="moreInf(${key});">More...</button>
                    <button class="btn deleteProduct" data-art="${key}" onclick="deleteItem(${key})">Delete</button>
                </div>
            </div>
        `
    }
    catalogBlock.innerHTML = cardData;
}    
// delete item function 
function deleteItem(id) {
    //confirm delete
    let check = confirm('Видалити елемент?')
    if(check){
        // delete item
        catalogBlock.removeChild(document.querySelector(`.product${id}`))
    }
}
// live search
document.querySelector('#liveSearch').oninput = function () {
    // take value from input
    let value = this.value.trim();
    // massive sorted item
    let data = search(value, arr)
    // show items
    Data(data)
}
// search function
function search(value, data){
    idItems = [];
    // equalize the values from search and data 
    if(value != ''){
        for(let i=0; i<data.length; i++){
            value = value.toLowerCase();
            let indef = data[i].id.toString().toLowerCase();
            let title = data[i].name.toString().toLowerCase();
            if(indef.includes(value)){
                idItems.push(data[i]);
            }
            if(title.includes(value)){
                idItems.push(data[i]);
            }
        }
    }else{
        // reload page
        document.location.reload();
    }
    // return array coincidences
    return idItems
}
// details function
function moreInf(num){
        //take id from clicked item and redirect to another page 
        numItems = [];
        arr.forEach(function(item, i, arr) {
            if(arr[i].id == num+1){
                numItems.push(arr[i])
            }
        });
        
        window.location.href = "./secondpage/details.html";
}


