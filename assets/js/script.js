//INFO AUTO FILL

const INFO = {
    product: "NovaStudio",
    customer: "NovaStudio",
    tel: "+55 (11) 99401-4070",
    email: "novastudio053@gmail.com",
    year: new Date().getFullYear()
}

function fill(className, value) {
    document.querySelectorAll(className).forEach(function (el) {
        el.textContent = value;
    });
}

fill(".product", INFO.product);
fill(".customer", INFO.customer);
fill(".tel", INFO.tel);
fill(".email", INFO.email)
fill(".year", INFO.year);

//LATERAL MENU TOGGLE

const lateralMenu = document.querySelector('.lateral-menu');
const bLateralMenu = document.querySelector('.menu-toggle');
const aLateralMenu = document.querySelectorAll('.lateral-menu a')

bLateralMenu.addEventListener('click', () => {
    lateralMenu.classList.toggle('active');
});

aLateralMenu.forEach(a => {
    a.addEventListener('click', () => {
        lateralMenu.classList.remove('active');
    });
});

addEventListener('resize', () => {
    lateralMenu.classList.remove('active');
});

//QUOTE BUTTON

const quoteButton = document.getElementById('quote')

quoteButton.addEventListener('click', () => {
    window.location.href = 'https://wa.me/5511994014070?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento'
});