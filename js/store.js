if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

// localStorage.removeItem('food1')
function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {

    var buyn = prompt("PAYMENT METHOD: [1]CASH [2]CARD")

           switch(buyn){
            case "1":
            alert("You have to make payment at the cashier");
            alert('and Thank you for your purchase :D ')
            // var cartItems = document.getElementsByClassName('cart-items')[0]
            // while (cartItems.hasChildNodes()) {
            //     cartItems.removeChild(cartItems.firstChild)
            // }
            // updateCartTotal();
            window.location = "kitchen.html";
            break;
            case "2":window.location = "payment.html";
        }
        }

        function payClicked() {

            alert("THANK YOU FOR YOUR ORDERS");
            alert('PLEASE COME AGAIN, ENJOY YOUR FOOD(S) AND DRINK(S) 😄 ')
            window.location = "kitchen.html";

        }

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <!--<button class="btn btn-danger" type="button">REMOVE</button>--> 
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
//     cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

// localStorage kitchen

function saveFood1() {
    var orderList = document.getElementById('food1').textContent;
    localStorage.setItem('food1', orderList);
}

function saveFood2() {
    var orderList = document.getElementById('food2').textContent;
    localStorage.setItem('food2', orderList);
}

function saveFood3(){
    var orderList = document.getElementById('food3').textContent;
    localStorage.setItem('food3', orderList);
}

function saveDrink1(){
    var orderList = document.getElementById('drink1').textContent;
    localStorage.setItem('drink1', orderList);

}

function saveDrink2(){
    var orderList = document.getElementById('drink2').textContent;
    localStorage.setItem('drink2', orderList);
}

function saveDrink3(){
    var orderList = document.getElementById('drink3').textContent;
    localStorage.setItem('drink3', orderList);
}

// localStorage remove item
function clearCart() {
    localStorage.clear();
    location.reload();
}
