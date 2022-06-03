//
// Menu functions
//
function closeNav(thismenuone, thismenutwo) {
    document.getElementById(thismenuone).style.width = "0";
    document.getElementById(thismenutwo).style.width = "0";
}

function openNav(thismenu) {
    if (screen.width > 700){
        document.getElementById(thismenu).style.width = "350px";
    } else {
        document.getElementById(thismenu).style.width = "100vw";
    }
}

function openNavTwo(thismenuone, thismenutwo, thisclosemenutwo) {
    if (screen.width > 700){
        document.getElementById(thismenutwo).style.width = "700px";
    } else {
        document.getElementById(thismenuone).style.width = "0";
        document.getElementById(thismenutwo).style.width = "100vw";
        document.getElementById(thisclosemenutwo).style.height = "1.5em";
    } 
}

//
// product tabs
//
function chaseTabs(currentTab){
    if (currentTab != "chase-details"){
        document.getElementById("chase-details-expanded").style.display = "none";
        document.getElementById("chase-details").style.backgroundColor = "var(--colour-main-light)";
        document.getElementById("chase-details").style.color = "var(--colour-text)";
    } else {
        document.getElementById("chase-details-expanded").style.display = "block";
        document.getElementById("chase-details").style.backgroundColor = "var(--colour-main)";
        document.getElementById("chase-details").style.color = "var(--colour-bg)";
    }

    if (currentTab != "chase-delivery"){
        document.getElementById("chase-delivery-expanded").style.display = "none";
        document.getElementById("chase-delivery").style.backgroundColor = "var(--colour-main-light)";
        document.getElementById("chase-delivery").style.color = "var(--colour-text)";
    } else {
        document.getElementById("chase-delivery-expanded").style.display = "block";
        document.getElementById("chase-delivery").style.backgroundColor = "var(--colour-main)";
        document.getElementById("chase-delivery").style.color = "var(--colour-bg)";
    }

    if (currentTab != "chase-reviews"){
        document.getElementById("chase-reviews-expanded").style.display = "none";
        document.getElementById("chase-reviews").style.backgroundColor = "var(--colour-main-light)";
        document.getElementById("chase-reviews").style.color = "var(--colour-text)";
    } else {
        document.getElementById("chase-reviews-expanded").style.display = "block";
        document.getElementById("chase-reviews").style.backgroundColor = "var(--colour-main)";
        document.getElementById("chase-reviews").style.color = "var(--colour-bg)";
    }
}

function lynxTabs(currentTab){
    if (currentTab != "lynx-details"){
        document.getElementById("lynx-details-expanded").style.display = "none";
        document.getElementById("lynx-details").style.backgroundColor = "var(--colour-main-light)";
        document.getElementById("lynx-details").style.color = "var(--colour-text)";
    } else {
        document.getElementById("lynx-details-expanded").style.display = "block";
        document.getElementById("lynx-details").style.backgroundColor = "var(--colour-main)";
        document.getElementById("lynx-details").style.color = "var(--colour-bg)";
    }

    if (currentTab != "lynx-delivery"){
        document.getElementById("lynx-delivery-expanded").style.display = "none";
        document.getElementById("lynx-delivery").style.backgroundColor = "var(--colour-main-light)";
        document.getElementById("lynx-delivery").style.color = "var(--colour-text)";
    } else {
        document.getElementById("lynx-delivery-expanded").style.display = "block";
        document.getElementById("lynx-delivery").style.backgroundColor = "var(--colour-main)";
        document.getElementById("lynx-delivery").style.color = "var(--colour-bg)";
    }

    if (currentTab != "lynx-reviews"){
        document.getElementById("lynx-reviews-expanded").style.display = "none";
        document.getElementById("lynx-reviews").style.backgroundColor = "var(--colour-main-light)";
        document.getElementById("lynx-reviews").style.color = "var(--colour-text)";
    } else {
        document.getElementById("lynx-reviews-expanded").style.display = "block";
        document.getElementById("lynx-reviews").style.backgroundColor = "var(--colour-main)";
        document.getElementById("lynx-reviews").style.color = "var(--colour-bg)";
    }
}



//
// configuration functions
//
function openConfig(){
    document.getElementById("collapsed-config").style.display = "none";
    document.getElementById("expanded-config").style.display = "block";
}

function closeConfig(){
    document.getElementById("collapsed-config").style.display = "block";
    document.getElementById("expanded-config").style.display = "none";
}

currColour = 0;
function selectLynxColour(option){
    if (currColour != 0){
        document.getElementById(currColour).style.border = "none";
    }
    currColour = option;
    document.getElementById(option).style.border = "4px solid var(--colour-main)";
}

currConfig = 0;
function selectLynxConfig(option){
    if (currConfig != 0){
        document.getElementById(currConfig).style.border = "none";
    }
    currConfig = option;
    document.getElementById(option).style.border = "4px solid var(--colour-main)";
}

currStyle = 0;
function selectChaseStyle(option){
    if (currStyle != 0){
        document.getElementById(currStyle).style.border = "none";
    }
    currStyle = option;
    document.getElementById(option).style.border = "4px solid var(--colour-main)";
}



//
// alternative product images
//
function showTerracotta(){
    document.getElementById('mainChaseImage').src = "images/ChaseMeetingRoomChair.webp";
}

function showBlack(){
    document.getElementById('mainChaseImage').src = "images/ChaseMeetingRoomChairHover.webp";
}

function showTan(){
    document.getElementById('mainChaseImage').src = "images/ChaseChairTan.webp";
}

function showMesh(){
    document.getElementById('mainChaseImage').src = "images/ChaseChairMesh.jpeg";
}

function showFront(){
    document.getElementById('mainLynxImage').src = "images/LynxVisitorChair.webp";
}

function showBack(){
    document.getElementById('mainLynxImage').src = "images/LynxVisitorChairHover.webp";
}

function showSide(){
    document.getElementById('mainLynxImage').src = "images/LynxSide.webp";
}

function showArms(){
    document.getElementById('mainLynxImage').src = "images/LynxArm.webp";
}

function showArmsSide(){
    document.getElementById('mainLynxImage').src = "images/LynxArmSide.webp";
}


// add items to cart
function addToCart(item){
    var carts = document.getElementsByClassName("cart");
    length = carts.length;
        for(var i=0; i < length; i++) {
            carts[i].src = "icons/shopping-cart-bold-2.svg";
        }
    if (item === 1){
        document.getElementById("chase-added-text").innerHTML = "Item(s) added to cart";
    } else {
        document.getElementById("lynx-added-text").innerHTML = "Item(s) added to cart";
    }
}



//
// form functions
//

// show delivery div
function showDelivery(){
    document.getElementById('delivery').style.display = "block";
  }

// hide delivery div
function hideDelivery(){
    document.getElementById('delivery').style.display = "none";
  }

// validate the shipping form
function validateShippingForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var address = document.getElementById('address').value;
    var error = false;
    const phoneRegex = new RegExp(/^(?:\+?61|0)[2-478](?:[ -]?[0-9]){8}$/);
    const emailRegex = new RegExp(/^.+?@.+?\..+$/);

    if (firstName == "" || firstName == null) {
        document.getElementById('firstNameError').innerHTML = "Please provide a first name";
        error = true;
    } else {
        document.getElementById('firstNameError').innerHTML = "";
    }
    if (lastName == "" || lastName == null) {
        document.getElementById('lastNameError').innerHTML = "Please provide a last name";
        error = true;
    } else {
        document.getElementById('lastNameError').innerHTML = "";
    }
    if (email == "" || email == null) {
        document.getElementById('emailError').innerHTML = "Please provide an email";
        error = true;
    } else if (!emailRegex.test(email)){
        document.getElementById('emailError').innerHTML = "Please provide a properly formatted email address";
        error = true;
    } else{
        document.getElementById('emailError').innerHTML = "";
    }
    if (phoneNumber == "" || phoneNumber == null) {
        document.getElementById('phoneNumberError').innerHTML = "Please provide a phone number";
        error = true;
    } else if (!phoneRegex.test(phoneNumber)){
        document.getElementById('phoneNumberError').innerHTML = "Please provide a properly formatted phone number";
        error = true;
    } else{
        document.getElementById('phoneNumberError').innerHTML = "";
    }
    if (address == "" || address == null) {
        document.getElementById('addressError').innerHTML = "Please provide an address";
        error = true;
    } else {
        document.getElementById('addressError').innerHTML = "";
    }
    if(error == true){
        return false;
    }
  }

// validate the payment form
function validatePaymentForm() {
    var cardNumber = document.getElementById('cardNumber').value;
    var expiryDate = document.getElementById('expiryDate').value;
    var CVC = document.getElementById('CVC').value;
    var cardholderName = document.getElementById('cardholderName').value;
    var billingAddress = document.getElementById('billingAddress').value;
    var paymentError = false;
    const cardRegex = new RegExp(/^[0-9]{13,19}$/);
    const dateRegex = new RegExp(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/);
    const CVCRegex = new RegExp(/^[0-9]{3,4}$/);

    if (cardNumber == "" || cardNumber == null) {
        document.getElementById('cardError').innerHTML = "Please provide a card number";
        paymentError = true;
    } else if (!cardRegex.test(cardNumber)){
        document.getElementById('cardError').innerHTML = "Please provide a properly formatted card number";
        paymentError = true;
    } else {
        document.getElementById('cardError').innerHTML = "";
    }
    if (expiryDate == "" || expiryDate == null) {
        document.getElementById('expiryError').innerHTML = "Please provide an expiry date";
        paymentError = true;
    } else if (!dateRegex.test(expiryDate)){
        document.getElementById('expiryError').innerHTML = "Please provide a date in the form dd/mm/yyyy";
        paymentError = true;
    } else {
        document.getElementById('expiryError').innerHTML = "";
    }
    if (CVC == "" || CVC == null) {
        document.getElementById('CVCError').innerHTML = "Please provide a CVC/CVV";
        paymentError = true;
    } else if (!CVCRegex.test(CVC)){
        document.getElementById('CVCError').innerHTML = "Please provide a properly formatted CVC/CVV";
        paymentError = true;
    } else {
        document.getElementById('CVCError').innerHTML = "";
    }
    if (cardholderName == "" || cardholderName == null) {
        document.getElementById('cardholderError').innerHTML = "Please provide a cardholder name";
        paymentError = true;
    } else {
        document.getElementById('cardholderError').innerHTML = "";
    }
    if (billingAddress == "" || billingAddress == null) {
        document.getElementById('billingAddressError').innerHTML = "Please provide a billing address";
        paymentError = true;
    } else {
        document.getElementById('billingAddressError').innerHTML = "";
    }
    if(paymentError == true){  
        return false;    
    }
}

// billing address same as shipping address
function billingDefault(){
    document.getElementById('billingAddress').value = "42 Wallaby Way, Sydney 2000 NSW";
}