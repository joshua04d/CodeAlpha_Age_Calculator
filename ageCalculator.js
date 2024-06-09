document.getElementById('ageCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1;
    const year = parseInt(document.getElementById('year').value);

    const dateOfBirth = new Date(year, month, day);
    if (isNaN(dateOfBirth.getTime())) {
        document.getElementById('result').textContent = 'Invalid Date';
        return;
    }

    const currentDate = new Date();

    let age = currentDate.getFullYear() - dateOfBirth.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
        age--;
    }

    document.getElementById('result').textContent = `You are ${age} years old.`;
});
