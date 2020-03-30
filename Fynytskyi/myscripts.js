'use strict'
var formRequestAppointment = document.getElementById('formRequestAppointment');

window.onclick = function (event) { //якщо натиснути клавіше 
    if (event.target == formRequestAppointment) {
        formRequestAppointment.style.display = "none";
    }
}

var slideIndex = 1;
showPhotos(slideIndex);

function nextPhoto(n) { //показує наступне фото кабінету
    showPhotos(slideIndex += n);
}          

function currentPhoto(n) { //показує вказане фото кабінету
    showPhotos(slideIndex = n);
}

function showPhotos(n) {
    var i; 
    var slides = document.getElementsByClassName("photoCabinet");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; ++i) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; ++i) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
function dropdownMenuClickListener(){ //спрацьовує при розкриванні меню
    var dropdownMenu = document.getElementById("dropdownMenu");
    if(dropdownMenu.style.display =="none"){
        dropdownMenu.style.display = "block";
    } 
    else{
        dropdownMenu.style.display = "none";
    }
    closeDropdown();
}
function closeDropdown(){
    var dropdownContextMenu = document.getElementById("dropdownContextMenu");
    dropdownContextMenu.style.display = "none";
}
function dropdownMenuClose(){ //закриває меню при натисканні на кнопку випадаючого меню
    var dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.style.display= "none";
}
function showDropdownMoveListener(){
    var dropdownContextMenu = document.getElementById("dropdownContextMenu");
    dropdownContextMenu.style.display = "block";
}
/* ****************FORM VALIDATION*************** */
var isGenderSelected = false;
var isValidMail = false;

var formRegister=document.getElementById("formRegister");
var registrationName=document.getElementById("registrationName");
var registrationGenderMale=document.getElementById("registrationGenderMale");
var registrationGenderFemale=document.getElementById("registrationGenderFemale");
var registrationEmail=document.getElementById("registrationEmail");
var registrationPhone=document.getElementById("registrationPhone");
var buttonSubmitRegister=document.getElementById("buttonSubmitRegister");

function genderChangeListener(){
    isGenderSelected = true;
    if(isValidMail) buttonSubmitRegister.disabled = false;
}
function validateForm(){
    var isCorrectName = registrationName.value.length >=3; //перевіряє чи введене ім'я не коротше трьох символів
    var isCorrectNumber = registrationPhone.checkValidity(); //перевіряє чи введено номер згідно паттерну

    if(isCorrectName == false) alert("Введене ім'я надто коротке");
    if(isCorrectNumber == false) alert("Введіть мінімум 5 цифр у номері");
    
    if(isCorrectName && isCorrectNumber)
        formRegister.submit();    
}
//реєстрація подій методом addEventListener
registrationEmail.addEventListener("keyup",function(event){
    if(registrationEmail.checkValidity()){
        isValidMail = true;
        if(isGenderSelected) buttonSubmitRegister.disabled = false;
    }
    else{
        buttonSubmitRegister.disabled = true;
        isValidMail = false;
    }
});
registrationGenderFemale.addEventListener("change", genderChangeListener);
registrationGenderMale.addEventListener("change", genderChangeListener);
buttonSubmitRegister.addEventListener("click", validateForm);

//* *****************Theme Changing****************** */
var currentTheme="Light";
function changeTheme(){
    if(currentTheme=="Light"){
        applyDarkTheme();
    }
    else{
        applyLightTheme();
    }
}
function applyDarkTheme(){
    var navigationMenu = document.getElementById("navigationMenu");
    navigationMenu.style.backgroundColor="black";

    var navigationButtonsText = document.getElementsByClassName("navigationButtonText");
    for(var i = 0;i<navigationButtonsText.length; ++i){
        navigationButtonsText[i].style.color="white";
    }

    var logo = document.getElementById("logo");
    logo.src="darkLogo.png";

    var dropdownContent = document.getElementsByClassName("dropdownContent");
    dropdownContent[0].style.backgroundColor="black";
    dropdownContent[1].style.backgroundColor="black";

    var body = document.body;
    body.style.color = "white";
    body.style.background = "black";


    currentTheme="Dark";
    var buttomThemeWide = document.getElementById("buttonThemeWide");
    var buttonThemeAdaptive = document.getElementById("buttonThemeAdaptive");
    buttomThemeWide.innerText = "Світла тема";
    buttonThemeAdaptive.innerText = "Світла тема";

    var navigationAboutLI= document.getElementById("navigationAboutLI");
    var buttonThemeWideLI = document.getElementById("buttonThemeWideLI");

    navigationMenu.replaceChild(buttonThemeWideLI, navigationAboutLI);
    navigationMenu.appendChild(navigationAboutLI);

    //налаштовуємо положення кнопки в мобільній версії
    var dropdownMenu = document.getElementById("dropdownMenu");
    var navigationAboutAdaptive = document.getElementById("navigationAboutAdaptive");

    dropdownMenu.replaceChild(buttonThemeAdaptive, navigationAboutAdaptive);
    dropdownMenu.appendChild(navigationAboutAdaptive);
}
function applyLightTheme(){
    var navigationMenu = document.getElementById("navigationMenu");
    navigationMenu.style.backgroundColor="white";
    
    var navigationButtonsText = document.getElementsByClassName("navigationButtonText");
    for(var i = 0;i<navigationButtonsText.length; ++i){
        navigationButtonsText[i].style.color="black";
    }

    var logo = document.getElementById("logo");
    logo.src="logo.png";

    var dropdownContent = document.getElementsByClassName("dropdownContent");
    dropdownContent[0].style.backgroundColor="#f9f9f9";
    dropdownContent[1].style.backgroundColor="#f9f9f9";

    var body = document.body;
    body.style.color = "black";
    body.style.background = "white";


    currentTheme = "Light";
    var buttomThemeWide = document.getElementById("buttonThemeWide");
    var buttonThemeAdaptive = document.getElementById("buttonThemeAdaptive");
    buttomThemeWide.innerText = "Темна тема";
    buttonThemeAdaptive.innerText = "Темна тема";

    var navigationAboutLI= document.getElementById("navigationAboutLI");
    var buttonThemeWideLI = document.getElementById("buttonThemeWideLI");

    navigationMenu.replaceChild(navigationAboutLI, buttonThemeWideLI);
    navigationMenu.appendChild(buttonThemeWideLI);

    //налаштовуємо положення кнопки в мобільній версії
    var dropdownMenu = document.getElementById("dropdownMenu");
    var navigationAboutAdaptive = document.getElementById("navigationAboutAdaptive");

    dropdownMenu.replaceChild(navigationAboutAdaptive, buttonThemeAdaptive);
    dropdownMenu.appendChild(buttonThemeAdaptive);
}


