function fpa() {
    let startPrice = document.getElementById("original-price").value;
    let discountAmount = document.getElementById("discount").value;
    let finalPrice = startPrice * (discountAmount / 100) + (startPrice * 1);
    document.getElementById("final-price").value = finalPrice;
    if(startPrice<=0) {
        alert("Σφάλμα στο ποσό της αρχικής τιμής")
    }
    if(discountAmount<0) {
        alert("Σφάλμα στο ποσό του ποσοστού της έκπτωσης")
    }
}

let originalAmount = document.getElementById("original-price");

originalAmount.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("submit-button").click();
  }
});
