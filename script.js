document.getElementById("final-price").readOnly = true;

function fpa() {
    let startPrice = document.getElementById("original-price").value;
    let discountAmount = document.getElementById("discount").value;
    let finalPrice = startPrice * (discountAmount / 100) + (startPrice * 1);
    document.getElementById("final-price").value = finalPrice.toFixed(2) + '€';    
  if((startPrice<0) && (discountAmount>0)) {
    alert("Σφάλμα στο ποσό της αρχικής τιμής");
    document.getElementById("final-price").value = '';
  }
  if((discountAmount<0) && (startPrice>=0)) {
    alert("Σφάλμα στο ποσό του ποσοστού της έκπτωσης");
    document.getElementById("final-price").value = '';
  }
  if((discountAmount<0) && (startPrice<0)) {
    alert("Σφάλμα στο ποσό του ποσοστού της έκπτωσης και στο ποσό της αρχικής τιμής");
    document.getElementById("final-price").value = '';
  }
};

let originalAmount = document.getElementById("original-price");

originalAmount.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("submit-button").click();
  }
});

let discountPrice = document.getElementById("discount");

discountPrice.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("submit-button").click();
  }
});
