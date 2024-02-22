document.getElementById('displayInput').addEventListener('click', function() {
    var input = document.getElementById('userInput').value;
    document.getElementById('greeting').textContent = "Welcome " + input;
});