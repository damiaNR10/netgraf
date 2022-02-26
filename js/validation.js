//Jako przykład walidacji zrobiłem sprawdzenie wyłącznie długości wpisanych wartości (>6)

const firstNameInput = document.querySelector('.contact__input--first-name');
const lastNameInput = document.querySelector('.contact__input--last-name');
const telInput = document.querySelector('.contact__input--tel');
const serviceSelect = document.querySelector('.contact__select');
const submit = document.querySelector('.contact__submit');

const inputs = [firstNameInput, lastNameInput, telInput];

validateInputs = (fields) => {
    for(let i = 0; i < fields.length; i++) {
        if(fields[i].value.length < 6) {
            fields[i].setCustomValidity('Value have to be greater than 6 characters!');
            fields[i].reportValidity();
            break;
        } else {
            fields[i].setCustomValidity('');
        }
    }
}

validateSelect = (select) => {
    if(!select.value.length > 0) {
        select.setCustomValidity('You have to choose one option!');
        select.reportValidity();
    } else {
        select.setCustomValidity('');
    }            

}

for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', () => {
        validateInputs(inputs);
    });
}

serviceSelect.addEventListener('change', ()=> { 
    validateSelect(serviceSelect)
});

if(submit) submit.addEventListener('click', () => {
    validateInputs(inputs);
    validateSelect(serviceSelect);
});