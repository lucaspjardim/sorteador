document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-random').addEventListener('submit' , function(e) {
        e.preventDefault()
        let maxNumber = document.getElementById('maxNumber').value
        maxNumber = parseInt(maxNumber)

        let randomNum = Math.random() * maxNumber;
        randomNum = Math.floor(randomNum + 1);
        
        document.getElementById('resultValue').innerText = randomNum

        document.querySelector('.result').style.display = 'block'
    })
})