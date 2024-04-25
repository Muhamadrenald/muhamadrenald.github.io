const form = document.getElementById('temperature-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const temperature = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;

    if (!temperature) {
        alert('Masukkan suhu!');
        return;
    }

    let result;
    if (unit === 'celcius') {
        result = convertCtoF(temperature);
        resultDiv.innerHTML = `Suhu ${temperature} Celcius adalah ${result} Fahrenheit`;
    } else {
        result = convertFtoC(temperature);
        resultDiv.innerHTML = `Suhu ${temperature} Fahrenheit adalah ${result} Celcius`;
    }
});

function convertCtoF(c) {
    return (c * 9/5) + 32;
}

function convertFtoC(f) {
    return (f - 32) * 5/9;
}