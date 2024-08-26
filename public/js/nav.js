const createNav = () => {
    let nav = document.querySelector('.nav-container')

    nav.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">
            <img src="../img/cover5.png" />
        </a>
        <!-- Add the Seller Dashboard button under the logo -->
        <div class="navbar-brand seller-dashboard-brand">
                <button class="btn btn-outline-success seller-dashboard-btn">Seller Dashboard</button>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <div class="d-flex search-bar">
                <input type="text" class="form-control me-3 search search-box" placeholder="Search Products"
                    aria-label="Search">
                <button class="btn btn-outline-success search-btn">Search</button>
            </div>
            
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 options">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#" data-bs-toggle="modal"
                        data-bs-target="#modal-notification">Notification <i class="fas fa-bell"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#" data-bs-toggle="modal"
                        data-bs-target="#modal-history">Order history <i class="fa-solid fa-clock-rotate-left"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/cart">Cart <i
                            class="fas fa-shopping-cart"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">
                        <div id="user-img">
                            Profile 
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="login-logout-popup hide">
                            <p class="account-info">Log in as, name</p>
                            <button class="btn btn-outline-success" id="user-btn">Log out</button>
                        </div>
                    </a>
                </li>
            </ul>
            
        </div>
    </div>
</nav>
<nav class="category">
    <div class="d-flex justify-content-center">
        <!-- ... (other category items) ... -->
        
        <div class="btn btn-outline-success category-item laptop">
            <p>Laptop</p>
        </div>
        <div class="btn btn-outline-success category-item smartphones">
            <p>Smartphones</p>
        </div>
        <div class="btn btn-outline-success category-item accessories">
            <p>Accessories</p>
        </div>
        <div class="btn btn-outline-success category-item men">
            <p>Men's fashion</p>
        </div>
        <div class="btn btn-outline-success category-item women">
            <p>Women's fashion</p>
        </div>
        <div class="btn btn-outline-success category-item kid">
            <p>kid's fashion</p>
        </div>
        <div class="btn btn-outline-success category-item books">
            <p>Books</p>
        </div>
        <div class="btn btn-outline-success category-item daily-need">
            <p>Daily needs</p>
        </div>
        <div class="btn btn-outline-success category-item medicine">
            <p>Medicine</p>
        </div>
    </div>
</nav>
    `
}

createNav();

//nav popup

const userImageButton = document.querySelector('#user-img')
const userPop = document.querySelector('.login-logout-popup')
const popuptext = document.querySelector('.account-info')
const actionBtn = document.querySelector('#user-btn')

userImageButton.addEventListener('click', () => {
    userPop.classList.toggle('hide')
})

/*
window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null)
    if (user != null) {
        // User is logged in
        popuptext.innerHTML = `${user.name}`
        actionBtn.innerHTML = 'Log out'
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear()
            location.reload()
        })
    } else {
        popuptext.innerHTML = ''
        actionBtn.innerHTML = 'Log in as user'
        actionBtn.addEventListener('click', () => {
            location.href = '/login'
        })
    }
*/
window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if (user != null) {
        // User is logged in
        popuptext.innerHTML = `${user.name}`;
        actionBtn.innerHTML = 'Log out';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        });
    } else {
        popuptext.innerHTML = '';
        actionBtn.innerHTML = 'Log in as user';
        actionBtn.addEventListener('click', () => {
            location.href = '/login';
        });

        // Add buttons for logging in as admin and deliveryman
        const adminLoginBtn = document.createElement('button');
        adminLoginBtn.innerHTML = 'Login as admin';
        adminLoginBtn.classList.add('btn', 'btn-outline-success');
        adminLoginBtn.addEventListener('click', () => {
            location.href = '/admin-login';
        });

        const deliveryLoginBtn = document.createElement('button');
        deliveryLoginBtn.innerHTML = 'Login as deliveryman';
        deliveryLoginBtn.classList.add('btn', 'btn-outline-success');
        deliveryLoginBtn.addEventListener('click', () => {
            location.href = '/delivery-login';
        });

        // Append buttons to the popup
        userPop.appendChild(adminLoginBtn);
        userPop.appendChild(deliveryLoginBtn);
    }
    // Seller Dashboard button click event
    const sellerDashboardBtn = document.querySelector('.seller-dashboard-btn');
    sellerDashboardBtn.addEventListener('click', () => {
        location.href = '/seller';
    });
}



//search box
const searchBtn = document.querySelector('.search-btn')
const searchBox = document.querySelector('.search-box')
searchBtn.addEventListener('click', () => {
    if (searchBox.value.length) {
        location.href = `/search/${searchBox.value}`
    }
})
document.querySelector('.laptop').addEventListener('click', () => {
    location.href = `/search/laptop`
})

document.querySelector('.smartphones').addEventListener('click', () => {
    location.href = `/search/smartphone`
})

document.querySelector('.accessories').addEventListener('click', () => {
    location.href = `/search/accessories`
})

document.querySelector('.men').addEventListener('click', () => {
    location.href = `/search/mens fashion`
})

document.querySelector('.women').addEventListener('click', () => {
    location.href = `/search/women`
})

document.querySelector('.kid').addEventListener('click', () => {
    location.href = `/search/kid`
})

document.querySelector('.books').addEventListener('click', () => {
    location.href = `/search/books`
})

document.querySelector('.daily-need').addEventListener('click', () => {
    location.href = `/search/daily-need`
})

document.querySelector('.medicine').addEventListener('click', () => {
    location.href = `/search/medicine`
})
