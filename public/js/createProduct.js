let openEditor;
const createProduct = (data) => {

    openEditor = (productId) => {
        console.log(productId);
        location.href = `/add-product/${productId}`
    }

    let actualPriceHTML = ''; 

    if (data.sellPrice !== data.actualPrice) {
        //actualPriceHTML = `<span class="actual-price">$${data.actualPrice}</span>`;
        actualPriceHTML = `<span class="actual-price">$${Number(data.actualPrice).toFixed(2)}</span>`;
    }

    let productContainer = document.querySelector('.product-container')
    productContainer.innerHTML += `
        <div class="product-card">
            <div class="product-image">
                <img src="${data.images[0]}"
                    alt="">
                <button class="card-action-btn edit-btn" onclick="openEditor('${data.productId}')"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="card-action-btn open-btn" onclick="location.href='/products/${data.productId}'"><i class="fa-solid fa-share"></i></button>
                <button class="card-action-btn delete-popup-btn" onclick="openDeletePopup('${data.productId}')"><i class="fa-solid fa-trash"></i></button>
            </div>
            <div class="product-info">
                <h2 class="product-brand">${data.name}</h2>
                <p class="product-short-des">${data.shortDes}</p>
                <span class="price">$${Number(data.sellPrice).toFixed(2)} ${actualPriceHTML}</span>
            </div>
        </div>
    `
    
}

const openDeletePopup = (productId) => {
    let deleteAlert = document.querySelector('.delete-alert')
    deleteAlert.style.display = 'flex'

    let closeBtn = document.querySelector('.close-btn')
    closeBtn.addEventListener('click', () => {
        deleteAlert.style.display = null;
    })

    let deletebtn = document.querySelector('.delete-btn')
    deletebtn.addEventListener('click', () => {
        deleteItem(productId)
    })
}

const deleteItem = (productId) => {
    fetch('/delete-product', {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({productId: productId})
    }).then(res => res.json())
    .then(data => {
        if(data === 'success'){
            location.reload();
        } else{
            showAlert('some error occurred while deleting the product. Try again.')
        }
    })
}