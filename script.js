document.addEventListener("DOMContentLoaded", getAllFunc)
function getAllFunc() {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
      const productList = document.getElementById('productList');
      products.forEach(product => {
        const listItem = document.createElement('div');
        productList.appendChild(listItem);

        const imageItem = document.createElement('img')
        imageItem.src = product.image;
        listItem.appendChild(imageItem)

        const deleteItem = document.createElement('button')
        deleteItem.innerHTML = "&#x2715;"
        deleteItem.className = "btn"
        listItem.appendChild(deleteItem)


        const deleteBtns = document.querySelectorAll(".btn");

        deleteBtns.forEach(btn => {
          btn.addEventListener('click', deleteFunction);
        });


        const titleItem = document.createElement('h2')
        titleItem.innerHTML = product.title
        listItem.appendChild(titleItem)

        const descItem = document.createElement('p')
        descItem.innerHTML = product.description
        listItem.appendChild(descItem)

        const priceItem = document.createElement('h3')
        priceItem.innerHTML = `${product.price} $`
        listItem.appendChild(priceItem)

      });
    })
    .catch(error => console.error('Произошла ошибка при получении товаров:', error));
};

product={
  name:"phone",
  price:125000,
}

function deleteFunction() {
  fetch('https://fakestoreapi.com/products/6', {
    method: "DELETE"
  })
    .then(res => res.json())
    .then(json => console.log(json))
}

const addBtn = document.querySelector('#addBtn')

addBtn.addEventListener('click', addBtnFunc)

function addBtnFunc() {
  fetch('https://fakestoreapi.com/products', {
    method: "POST",
    body: JSON.stringify(
      {
        title: document.querySelector('#title').value,
        price: parseFloat(document.querySelector('#price').value),
        description: document.querySelector('#description').value,
        category: document.querySelector('#category').value
      }
    )
  })
    .then(res => res.json())
    .then(json => console.log(json))
}


