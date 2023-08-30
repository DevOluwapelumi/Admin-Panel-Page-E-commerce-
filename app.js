const productName = document.getElementById('product')
const productPrice = document.getElementById('price')
const productEName = document.getElementById('Eproduct')
const productEPrice = document.getElementById('Eprice')
const addProductBtn = document.getElementById('productBtn')
// const editProductBtn = document.getElementById('editProductBtn')

let products = localStorage.getItem('products')
  ? JSON.parse(localStorage.getItem('products'))
  : []

// console.log(products)

addProductBtn.onclick = () => {
  const productDetails = {
    id: products.length + 1,
    name: productName.value,
    price: productPrice.value,
  }

  // products.forEach((product, idx) => {
  //   if (product.name == productDetails.name) {
  //     console.log(idx)
  //   }
  // })

  const existItem = products.find((product, idx) => {
    if (products[idx] === idx) {
      // products.splice(idx, 1, productDetails)
      console.log(product)
    }
  })

  // if (existItem) {
  //   products = products.splice()
  // } else {
  //   products = [productDetails, ...products]
  // }

  products = [productDetails, ...products]

  // Add products to ls
  localStorage.setItem('products', JSON.stringify(products))

  displayProducts()
}

const displayProducts = () => {
  const productListEl = document.getElementById('productList')

  productListEl.innerHTML = ''
  products.map((product, idx) => {
    productListEl.innerHTML += `  <li class="list-group-item">
    <div class="d-flex align-items-center justify-content-between">
    <div>
    <h2>${product.name}</h2>
      <p>$${product.price}</p>
    </div>
      
      <div>
        <div class="btn btn-info" onClick="editProduct(${
          (idx, product.id)
        })"data-bs-toggle="modal"
        data-bs-target="#exampleModa">Edit</div>
        <div class="btn btn-danger" onClick="deleteProduct(${
          product.id
        })">Delete</div>
      </div>
    </div>
  </li>`
  })
}

const deleteProduct = (productId) => {
  console.log(productId)
  // products = [products.filter((product)) => {}]
  const newProducts = products.filter((product) => product.id !== productId)

  console.log(newProducts)

  // Add products to ls
  localStorage.setItem('products', JSON.stringify(newProducts))

  products = newProducts

  displayProducts()
}

displayProducts()

const editP = (idx) => {
  const productDetails = {
    id: product.id,
    name: productEName.value,
    price: productEPrice.value,
  }
  products.splice(idx, 1, productDetails)

  // Add products to ls
  localStorage.setItem('products', JSON.stringify(products))

  displayProducts()
}

const editProduct = (idx, productId) => {
  const product = products[idx]

  productEName.value = product.name
  productEPrice.value = product.price
  const editProductBtn = document.getElementById('editProductBtn')
  editProductBtn.onclick = () => {
    editP(idx)
  }
}