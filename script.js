let select = document.querySelector('select');
let list = document.querySelector('ul');
let h2 = document.querySelector('h2');
select.value = 'January';
h2.textContent = 'January has 31 days.';

select.addEventListener('change', displayDays);

function displayDays() {
    let month = select.value;
    let days = 31;

    if (month === 'February') {
        days = 28;
    } else if (month === 'April' || month === 'June' || month === 'September' || month === 'November') {
        days = 30;
    }

    h2.textContent = `${month} has ${days} days.`;

    createCalendar(days, month);
}

function createCalendar(days, month) {
    list.innerHTML = '';
    
    for (let i = 1; i <= days; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = i;
        list.appendChild(listItem);
    }
}

createCalendar(31, 'January');