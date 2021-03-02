$(document).ready(function () {
   $('signinbtn') .click(function () {
    alert('signin button clicked');
    window.location.replace('dashboard.php');
    alert('redirecting'); 
   });
});