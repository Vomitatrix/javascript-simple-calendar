let select = document.querySelector('select');
let h2 = document.querySelector('h2');
select.value = 'January';
h2.textContent = 'January has 31 days.';

select.addEventListener('change', displayDays);

function displayDays() {
    let month = select.value;
    let numberOfDays = 31;

    if (month === 'February') {
        numberOfDays = 28;
    } else if (month === 'April' || month === 'June' || month === 'September' || month === 'November') {
        numberOfDays = 30;
    }

    h2.textContent = `${month} has ${numberOfDays} days.`;
}