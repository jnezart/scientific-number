document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('scientificForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const numberInput = document.getElementById('scientificNumber').value;
        const scientificRegex = /^[+\-]?\d+(\.\d+)?[eE][+\-]?\d+$/;
        if (scientificRegex.test(numberInput)) {
            document.getElementById('result').innerText = 'Accepted';
        } else {
            document.getElementById('result').innerText = 'Not a valid scientific number';
        }
    });
});
