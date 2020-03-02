// Get default subtotal
const productPriceOne = parseFloat(document.getElementById("productPrice1").innerText);
const productPriceTwo = parseFloat(document.getElementById("productPrice2").innerText);
const defaultSubtotalPrice = productPriceOne + productPriceTwo;
document.getElementById("subtotal").innerText = defaultSubtotalPrice;

// Get Default tax
const defaultTax = parseFloat((defaultSubtotalPrice * 2 / 100).toFixed(1));
document.getElementById("tax").innerText = defaultTax;

// Get Default total
const defaultTotal = defaultSubtotalPrice + defaultTax;
document.getElementById("total").innerText = defaultTotal;

// Increasing Quantity Number of the product of the cart
document.getElementById("increaseQuantityP1").addEventListener("click", () => {
    increaseQntNumber("currentQuantityP1");
    updatePriceByQuantity("currentQuantityP1", 1219, "productPrice1");
    updateTaxAndTotal("subtotal", "total", "tax");
});

document.getElementById("increaseQuantityP2").addEventListener("click", () => {
    increaseQntNumber("currentQuantityP2");
    updatePriceByQuantity("currentQuantityP2", 59, "productPrice2");
    updateTaxAndTotal("subtotal", "total", "tax");
});

// Decreasing Quantity Number of the Product of the cart
document.getElementById("decreaseQuantityP1").addEventListener("click", () => {
    decreaseQntNumber("currentQuantityP1");
    updatePriceByQuantity("currentQuantityP1", 1219, "productPrice1");
    updateTaxAndTotal("subtotal", "total", "tax");
});

document.getElementById("decreaseQuantityP2").addEventListener("click", () => {
    decreaseQntNumber("currentQuantityP2");
    updatePriceByQuantity("currentQuantityP2", 59, "productPrice2");
    updateTaxAndTotal("subtotal", "total", "tax");
});

// Function to increase number of quantity of the product of the cart
function increaseQntNumber(id) {
    const currentQntNumber = parseFloat(document.getElementById(id).value);
    const updatedQntNumber = currentQntNumber + 1;
    document.getElementById(id).value = updatedQntNumber;
}

// Function to decrease number of quantity of the product of the cart
function decreaseQntNumber(id) {
    const currentQntNumber = parseFloat(document.getElementById(id).value);
    if( currentQntNumber > 1 ) {
        const updatedQntNumber = currentQntNumber - 1;
        document.getElementById(id).value = updatedQntNumber;
    }
}

// Function to update the cart price depending on the quantity
function updatePriceByQuantity(currentQuantityInnerTextID, pricePerProduct, priceInnerTextID){
    const currentQntNumber = document.getElementById(currentQuantityInnerTextID).value;
    const currentQntPrice = currentQntNumber * pricePerProduct;
    document.getElementById(priceInnerTextID).innerText = currentQntPrice;

    updateSubtotal("productPrice1", "productPrice2", "subtotal");
}

// Function to update the subtotal depending on the current price
function updateSubtotal(priceInnerTextID1, priceInnerTextID2, subtotalInnerText) {
    const currentPrice1 = document.getElementById(priceInnerTextID1).innerText;
    const currentPrice2 = document.getElementById(priceInnerTextID2).innerText;
    document.getElementById(subtotalInnerText).innerText = parseFloat(currentPrice1) + parseFloat(currentPrice2);
}

// Function to update the tax and also to update the total depending on the current price - with tax calculation (2%) of total purchased price.
function updateTaxAndTotal(subtotalInnerTextID, totalInnerTextID, taxinnerTextID) {
    const currentSubtotal = parseFloat(document.getElementById(subtotalInnerTextID).innerText);
    const tax = parseFloat(currentSubtotal * 2 / 100).toFixed(1);
    const total = parseFloat(currentSubtotal) + parseFloat(tax);
    document.getElementById(taxinnerTextID).innerText = tax;
    document.getElementById(totalInnerTextID).innerText = total;
}
