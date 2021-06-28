function fpa() {
    let startPrice = document.getElementById("original-price").value;
    let discountAmount = document.getElementById("discount").value;
    let finalPrice = startPrice * (discountAmount / 100) + (startPrice * 1);
    document.getElementById("final-price").value = finalPrice;
    if(startPrice<=0) {
        alert("Η αρχική τιμή πρέπει να είναι μεγαλύτερη από 0")
    }
    if(discountAmount<0) {
        alert("Το ποσοστό της έκπτωσης πρέπει να είναι μεγαλύτερο ή ίσο με το 0")
    }
}

let originalAmount = document.getElementById("original-price");

originalAmount.addEventListener("keyup", function(event) {
  if (originalAmount.keyCode === 13) {
    originalAmount.preventDefault();
    document.getElementById("submit-button").click();
  }
});
