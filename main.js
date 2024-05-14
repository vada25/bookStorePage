/* ----------------- book count script ----------------------*/
const bookPriceInput = document.getElementById('bookPrice');
const bookQuantityInput = document.getElementById('bookQuantity');
const totalPriceInput = document.getElementById('totalPrice');
function updateTotalPrice() {
    const price = parseFloat(bookPriceInput.value);
    let quantity = parseInt(bookQuantityInput.value);
    if (quantity < 1 || quantity > 42) {
        if (quantity < 1) {
            quantity = 1;
        } else {
            quantity = 42;
        }
        bookQuantityInput.value = quantity;
    }
    const totalPrice = price * quantity;
    totalPriceInput.value = totalPrice.toFixed(2); 
    }
bookQuantityInput.addEventListener('input', updateTotalPrice);

/**UserEnterName */
 // Получаем имя пользователя из localStorage
 var username = localStorage.getItem("username");
 // Выводим его на странице
 document.getElementById("usernameDisplay").innerText = `Hi, ${username}!`;