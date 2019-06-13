var home = document.getElementById("homepage");

var homebtn = document.getElementById("homebtn");
var aboutusbtn = document.getElementById("aboutusbtn");
var academicsbtn= document.getElementById("academicsbtn");
var financebtn = document.getElementById("financebtn");
var admissionsbtn = document.getElementById("admissionsbtn");
var miscellaneousbtn = document.getElementById("miscellaneousbtn");

var directorsmsgbtn = document.getElementById("directorsmsgbtn");
var contactusbtn = document.getElementById("contactusbtn");
var facilitiesbtn = document.getElementById("facilitiesbtn");
var abttestseriesbtn = document.getElementById("abttestseriesbtn");
var currentnewsbtn = document.getElementById("currentnewsbtn");

var coachingbtn = document.getElementById("coachingbtn");
var exambtn = document.getElementById("exambtn");
var teachersbtn = document.getElementById("teachersbtn");

var staffsalarybtn = document.getElementById("staffsalarybtn");
var budgetbtn = document.getElementById("budgetbtn");

var admissionschedulebtn = document.getElementById("admissionschedulebtn");
var admissionnoticebtn = document.getElementById("admissionnoticebtn");

//var photogalarybtn = document.getElementById("photogalarybtn");

var homepage = document.getElementById("homepage");
var aboutuspage = document.getElementById("aboutuspage");
var academicspage = document.getElementById("academicspage");
var financepage = document.getElementById("financepage");
var admissionspage = document.getElementById("admissionspage");
var miscellaneouspage = document.getElementById("miscellaneouspage");

var directorsmsgpage = document.getElementById("directorsmsg");
var contactuspage = document.getElementById("contactus");
var facilitiespage = document.getElementById("facilities");
var abttestseriespage = document.getElementById("abttestseries");
var currentnewspage = document.getElementById("curnews");

var coachingpage = document.getElementById("coachingpage");
var exampage = document.getElementById("exampage");
var teacherspage = document.getElementById("teacherspage");

var staffsalarypage = document.getElementById("staffsalarypage");
var budgetpage = document.getElementById("budgetpage");

var admissionschedulepage = document.getElementById("admissionschedulepage");
var admissionnoticepage = document.getElementById("admissionnoticepage");

homebtn.addEventListener("click",function(){
    home.style.display = "block";
    aboutuspage.style.display ="none";
    academicspage.style.display ="none";
    financepage.style.display ="none";
    admissionspage.style.display ="none";
    miscellaneouspage.style.display ="none";
    
    homebtn.style.backgroundColor = "#636363";
    aboutusbtn.style.backgroundColor = "black";
    academicsbtn.style.backgroundColor = "black";
    financebtn.style.backgroundColor = "black";
    admissionsbtn.style.backgroundColor = "black";
    miscellaneousbtn.style.backgroundColor = "black";
});

aboutusbtn.addEventListener("click",function(){
    document.getElementById("aboutus-dropdown").classList.toggle("show");
    
    homebtn.style.backgroundColor = "black";
    aboutusbtn.style.backgroundColor = "#636363";
    academicsbtn.style.backgroundColor = "black";
    financebtn.style.backgroundColor = "black";
    admissionsbtn.style.backgroundColor = "black";
    miscellaneousbtn.style.backgroundColor = "black";
});

academicsbtn.addEventListener("click",function(){
    document.getElementById("academics-dropdown").classList.toggle("show");
    
    homebtn.style.backgroundColor = "black";
    aboutusbtn.style.backgroundColor = "black";
    academicsbtn.style.backgroundColor = "#636363";
    financebtn.style.backgroundColor = "black";
    admissionsbtn.style.backgroundColor = "black";
    miscellaneousbtn.style.backgroundColor = "black";
});

financebtn.addEventListener("click",function(){
    document.getElementById("finance-dropdown").classList.toggle("show");
    
    homebtn.style.backgroundColor = "black";
    aboutusbtn.style.backgroundColor = "black";
    academicsbtn.style.backgroundColor = "black";
    financebtn.style.backgroundColor = "#636363";
    admissionsbtn.style.backgroundColor = "black";
    miscellaneousbtn.style.backgroundColor = "black";
});

admissionsbtn.addEventListener("click",function(){
    document.getElementById("admissions-dropdown").classList.toggle("show");
    
    homebtn.style.backgroundColor = "black";
    aboutusbtn.style.backgroundColor = "black";
    academicsbtn.style.backgroundColor = "black";
    financebtn.style.backgroundColor = "black";
    admissionsbtn.style.backgroundColor = "#636363";
    miscellaneousbtn.style.backgroundColor = "black";
});

miscellaneousbtn.addEventListener("click",function(){
    document.getElementById("miscellaneous-dropdown").classList.toggle("show");
    
    homebtn.style.backgroundColor = "black";
    aboutusbtn.style.backgroundColor = "black";
    academicsbtn.style.backgroundColor = "black";
    financebtn.style.backgroundColor = "black";
    admissionsbtn.style.backgroundColor = "black";
    miscellaneousbtn.style.backgroundColor = "#636363";
});


directorsmsgbtn.addEventListener("click",function(){    
    homepage.style.display = "none";
    aboutuspage.style.display = "block";
    academicspage.style.display = "none";
    financepage.style.display = "none";
    admissionspage.style.display="none";
    miscellaneouspage.style.display = "none";
    
    directorsmsgpage.style.display = "block";
    contactuspage.style.display = "none";
    facilitiespage.style.display ="none";
    abttestseriespage.style.display ="none";
    currentnewspage.style.display ="none";
});

contactusbtn.addEventListener("click",function(){
    homepage.style.display = "none";
    aboutuspage.style.display = "block";
    academicspage.style.display = "none";
    financepage.style.display = "none";
    admissionspage.style.display="none";
    miscellaneouspage.style.display = "none";
    
    directorsmsgpage.style.display = "none";
    contactuspage.style.display = "block";
    facilitiespage.style.display ="none";
    abttestseriespage.style.display ="none";
    currentnewspage.style.display ="none";
});

facilitiesbtn.addEventListener("click",function(){
    homepage.style.display = "none";
    aboutuspage.style.display = "block";
    academicspage.style.display = "none";
    financepage.style.display = "none";
    admissionspage.style.display="none";
    miscellaneouspage.style.display = "none";
    
    directorsmsgpage.style.display = "none";
    contactuspage.style.display = "none";
    facilitiespage.style.display ="block";
    abttestseriespage.style.display ="none";
    currentnewspage.style.display ="none";
});

abttestseriesbtn.addEventListener("click",function(){
    homepage.style.display = "none";
    aboutuspage.style.display = "block";
    academicspage.style.display = "none";
    financepage.style.display = "none";
    admissionspage.style.display="none";
    miscellaneouspage.style.display = "none";
    
    directorsmsgpage.style.display = "none";
    contactuspage.style.display = "none";
    facilitiespage.style.display ="none";
    abttestseriespage.style.display ="block";
    currentnewspage.style.display ="none";
});

currentnewsbtn.addEventListener("click",function(){
    homepage.style.display = "none";
    aboutuspage.style.display = "block";
    academicspage.style.display = "none";
    financepage.style.display = "none";
    admissionspage.style.display="none";
    miscellaneouspage.style.display = "none";
    
    directorsmsgpage.style.display = "none";
    contactuspage.style.display = "none";
    facilitiespage.style.display ="none";
    abttestseriespage.style.display ="none";
    currentnewspage.style.display ="block";
});

coachingbtn.addEventListener("click",function(){
    homepage.style.display = "none";
    aboutuspage.style.display = "none";
    academicspage.style.display = "block";
    financepage.style.display = "none";
    admissionspage.style.display="none";
    miscellaneouspage.style.display = "none";
    
    coachingpage.style.display = "block";
    exampage.style.display = "none";
    teacherspage.style.display = "none";
});

exambtn.addEventListener("click",function(){
    homepage.style.display = "none";
    aboutuspage.style.display = "none";
    academicspage.style.display = "block";
    financepage.style.display = "none";
    admissionspage.style.display="none";
    miscellaneouspage.style.display = "none";
    
    coachingpage.style.display = "none";
    exampage.style.display = "block";
    teacherspage.style.display = "none";
});

teachersbtn.addEventListener("click",function(){
    homepage.style.display = "none";
    aboutuspage.style.display = "none";
    academicspage.style.display = "block";
    financepage.style.display = "none";
    admissionspage.style.display="none";
    miscellaneouspage.style.display = "none";
    
    coachingpage.style.display = "none";
    exampage.style.display = "none";
    teacherspage.style.display = "block";
});

staffsalarybtn.addEventListener("click",function(){
    homepage.style.display = "none";
    aboutuspage.style.display = "none";
    academicspage.style.display = "none";
    financepage.style.display = "block";
    admissionspage.style.display="none";
    miscellaneouspage.style.display = "none";
    
    staffsalarypage.style.display = "block";
    budgetpage.style.display = "none";
});

budgetbtn.addEventListener("click",function(){
    homepage.style.display = "none";
    aboutuspage.style.display = "none";
    academicspage.style.display = "none";
    financepage.style.display = "block";
    admissionspage.style.display="none";
    miscellaneouspage.style.display = "none";
    
    staffsalarypage.style.display = "none";
    budgetpage.style.display = "block";
});

admissionschedulebtn.addEventListener("click",function(){
    homepage.style.display = "none";
    aboutuspage.style.display = "none";
    academicspage.style.display = "none";
    financepage.style.display = "none";
    admissionspage.style.display="block";
    miscellaneouspage.style.display = "none";
    
    admissionschedulepage.style.display = "block";
    admissionnoticepage.style.display = "none";
});

admissionnoticebtn.addEventListener("click",function(){
    homepage.style.display = "none";
    aboutuspage.style.display = "none";
    academicspage.style.display = "none";
    financepage.style.display = "none";
    admissionspage.style.display="block";
    miscellaneouspage.style.display = "none";
    
    admissionschedulepage.style.display = "none";
    admissionnoticepage.style.display = "block";
});



window.onclick = function(event) {
   closemenu();
}

function closemenu(){
    if (!event.target.matches('.menustyle')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    homebtn.style.backgroundColor = "black";
    aboutusbtn.style.backgroundColor = "black";
    academicsbtn.style.backgroundColor = "black";
    financebtn.style.backgroundColor = "black";
    admissionsbtn.style.backgroundColor = "black";
    miscellaneousbtn.style.backgroundColor = "black";
  }
}