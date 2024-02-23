document.getElementById('displayInput').addEventListener("click",function(){

    var userInput = document.getElementById('userInput').value;

 // Displaying Personalized Greeting
    var greetingMessage = document.getElementById('greetingMessage');
    greetingMessage.textContent = 'Hello,' + userInput + '! How may I assist you today';
});