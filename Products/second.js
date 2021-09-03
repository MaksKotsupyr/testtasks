// data
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
let itemDetailsBlock = document.querySelector('#catalogDetails');
// needed id of element 
let num = 3;
// output elemet 
let cardDataDetails = '';
        for (let key in arr){
            if(arr[key].id == num){
                cardDataDetails += `
                <div class="product product${key}">
                    <img src="${arr[key].imageUrl}" alt="${arr[key].name}">
                    <p id='names'>${arr[key].name}</p>
                    <p>${arr[key].description}</p>
                    <p id='names'>Ширина:${arr[key].size.width}cm. Висота:${arr[key].size.height}cm.</p>
                    <p id='names'>${arr[key].weight}</p>
                    <p id='names'>${arr[key].comments}</p>
                    <p>Залишок: ${arr[key].count}кг.</p>
                    <button class="btn editbtn">Edit</button>
                </div>
            `
            }
        }
    itemDetailsBlock.innerHTML = cardDataDetails;