const rows = document.querySelectorAll("tr");
const subtotalCountElement = document.querySelector(".subtotal-count");
const subtotalWithoutTax = document.getElementById("subtotalWithoutTax");
const subtotalWithTax = document.getElementById("subtotalWithTax");
const taxValue = document.querySelector(".tax-value");
const floatTaxValue = parsePrice(taxValue.textContent);

function parsePrice(priceString) {
    return parseFloat(priceString.replace('$', '').replace(',', ''));
}

function updateQuantityAndPrice(qtyElement, priceElement, subtotalElement, increment) {
    const floatPriceValue = parsePrice(priceElement.textContent);
    let floatSubtotalValue = parsePrice(subtotalElement.textContent);
    
    let qtyValue = parseInt(qtyElement.textContent);
    if (increment) {
        qtyValue++;
        floatSubtotalValue = floatPriceValue * qtyValue;
    } else {
        qtyValue = qtyValue - 1;
        floatSubtotalValue = floatPriceValue * qtyValue;
    }
    
    subtotalElement.textContent = '$' + floatSubtotalValue.toFixed(2);
    qtyElement.textContent = qtyValue.toString().padStart(2, '0');
}

rows.forEach((row) => {
    const plusBtn = row.querySelector(".plus");
    const minusBtn = row.querySelector(".minus");
    const qtyElement = row.querySelector(".count");
    const priceElement = row.querySelector(".price-td h6");
    const subtotalElement = row.querySelector(".subtotal-td h6");
    const deleteBtn = row.querySelector(".remove-row");
    const deleteIcon = row.querySelector(".fa-trash-can");
    // console.log("deleteBtn:", deleteBtn);
    
    if (plusBtn && minusBtn && qtyElement && priceElement && subtotalElement) {
        plusBtn.addEventListener("click", (e) => {
            e.preventDefault();
            updateQuantityAndPrice(qtyElement, priceElement, subtotalElement, true);
            updateShippingSubtotal();
        });

        minusBtn.addEventListener("click", (e) => {
            e.preventDefault();
            let qtyValue = parseInt(qtyElement.textContent);
            if (qtyValue === 1) {
                return;
            } else {
                updateQuantityAndPrice(qtyElement, priceElement, subtotalElement, false);
                updateShippingSubtotal();
            }
        });
    }
    if (deleteBtn) {
        deleteBtn.addEventListener("click", (e) => {
            e.preventDefault();
            // Toggling class for deletion
            row.classList.toggle("delete");
        });
    } else {
        console.error("deleteBtn not found");
    }
    if (deleteIcon) {
        deleteIcon.addEventListener("click", (e) => {
            e.preventDefault();
            row.classList.toggle("delete");
        });
    } else {
        console.error("deleteIcon not found");
    }
});

function updateShippingSubtotal() {
    const allSubtotalElements = document.querySelectorAll(".subtotal-td h6");
    let totalSubtotal = 0;

    allSubtotalElements.forEach((subtotalElement) => {
        totalSubtotal += parsePrice(subtotalElement.textContent);
    });
    
    const updateSubtotalWithTax = totalSubtotal + floatTaxValue;
    subtotalCountElement.textContent = '$' + totalSubtotal.toFixed(2);
    subtotalWithoutTax.textContent = '$' + totalSubtotal.toFixed(2);
    subtotalWithTax.textContent = '$' + updateSubtotalWithTax.toFixed(2);
}

updateShippingSubtotal();
// updateRowSubtotalsBasedOnPrices();

