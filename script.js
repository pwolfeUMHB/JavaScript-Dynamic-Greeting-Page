document.getElementById('display_Name').addEventListener("click", function(){
    var Input_User = document.getElementById('Input_User').value;
    var Greeting = document.getElementById('Greeting');
    Greeting.textContent = 'Welcome, '+Input_User+' You have arrived on planet henosi!'
});