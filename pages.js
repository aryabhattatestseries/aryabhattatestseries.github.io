var home = document.getElementById("homepage");
var academics = document.getElementById("academicspage");
var admissions = document.getElementById("admissionspage");
var aboutus = document.getElementById("aboutuspage");

var homebtn = document.getElementById("homebtn");
var academicsbtn= document.getElementById("academicsbtn");
var admissionsbtn = document.getElementById("admissionsbtn");
var aboutusbtn = document.getElementById("aboutusbtn");

homebtn.addEventListener("click",function(){
    home.style.display = "block";
    academics.style.display = "none";
    admissions.style.display = "none";
    aboutus.style.display = "none";
    
    homebtn.style.backgroundColor = "#636363";
    academicsbtn.style.backgroundColor = "black";
    admissionsbtn.style.backgroundColor = "black";
    aboutusbtn.style.backgroundColor = "black";
    
});

academicsbtn.addEventListener("click",function(){
    home.style.display = "none";
    academics.style.display = "block";
    admissions.style.display = "none";
    aboutus.style.display = "none";
    
    homebtn.style.backgroundColor = "black";
    academicsbtn.style.backgroundColor = "#636363";
    admissionsbtn.style.backgroundColor = "black";
    aboutusbtn.style.backgroundColor = "black";
});

admissionsbtn.addEventListener("click",function(){
    home.style.display = "none";
    academics.style.display = "none";
    admissions.style.display = "block";
    aboutus.style.display = "none";
    
    homebtn.style.backgroundColor = "black";
    academicsbtn.style.backgroundColor = "black";
    admissionsbtn.style.backgroundColor = "#636363";
    aboutusbtn.style.backgroundColor = "black";
});

aboutusbtn.addEventListener("click",function(){
    home.style.display = "none";
    academics.style.display = "none";
    admissions.style.display = "none";
    aboutus.style.display = "block";
    
    homebtn.style.backgroundColor = "black";
    academicsbtn.style.backgroundColor = "black";
    admissionsbtn.style.backgroundColor = "black";
    aboutusbtn.style.backgroundColor = "#636363";
});