const contentProfile = document.querySelector('.content__profile');
const profileNavigation = document.querySelector('.profile__navigation');
const editProfileButton = document.querySelector('.settings__edit');
const navigationButtons = document.querySelector('.navigation__buttons');

const navigationField = document.querySelector('.navigation__field');
const navigationProfile = document.querySelector('.navigation__profile');
const cancelButton = document.querySelector('.cancel');

const errorMessage = document.querySelectorAll('._error');
let inputEdit = document.querySelectorAll('._edit');
const form = document.getElementById('editProfile');
const button = document.querySelector('.save');
form.addEventListener('submit', editProfileInfo);

editProfileButton.addEventListener('click', () => {
    navigationButtons.style.display = 'none';
    navigationField.style.display = 'none';
    navigationProfile.style.display = 'flex';
});

cancelButton.addEventListener('click', () => {
    navigationButtons.style.display = 'flex';
    navigationField.style.display = 'flex';
    navigationProfile.style.display = 'none';
});

/**
 * Validate form and save profile info
 * @param {Event} event - Page event
 */
async function editProfileInfo(event) {
    event.preventDefault();

    let error = formValidate(form);

    if (error === 0) {
        console.log("Pass validate!");
        resetAllErrors();
        resetInputs();
    } 
}

function formValidate(form) {
    let error = 0;
    
    for (let index = 0; index < inputEdit.length; index++) {
        const input = inputEdit[index];

        if (input.value !== '') {
            if (input.classList.contains('nameInput')) {
                if (nameTest(input)) {
                    setErrorVisible('name', 'visible', 'Name is not valid');
                    error++;
                }
            }

            if (input.classList.contains('surnameInput')) {
                if (nameTest(input)) {
                    setErrorVisible('surname', 'visible', 'Surname is not valid');
                    error++;
                }
            }

            if (input.classList.contains('ageInput')) {
                if (!ageTest(input)) {
                    setErrorVisible('age', 'visible', 'Age is not valid');
                    error++;
                }
            }

            if (input.classList.contains('cityInput')) {
                if (nameTest(input)) {
                    setErrorVisible('city', 'visible', 'City is not valid');
                    error++;
                }
            }
        }
    }

    return error;
}

function resetAllErrors() {
    for (let index = 0; index < errorMessage.length; index++) {
        errorMessage[index].style.visibility = 'hidden';
    }
}

function resetInputs() {
    for (let index = 0; index < inputEdit.length; index++) {
        inputEdit[index].value = '';
    }
}

function setErrorVisible(name, visibility, text) {
    let error = document.querySelector(`.${name}Error`);
    error.textContent = text;
    error.style.visibility = visibility;
}

function nameTest(input) {
    return !/(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{1,}/g.test(input.value);
}

function ageTest(input) {
    let check = /(?=.*[0-9])[0-9]{2,}/g.test(input.value);

    if (check) {
        if (input.value >= 18 && input.value <= 100) {
            return true;
        } else {
            return false;
        }
    }

    return false;
}

