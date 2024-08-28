let formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');

const fillFormFields = () => {
    const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (formDataFromLS === null) {
        return;
    }

    formData = formDataFromLS;

    for (const key in formDataFromLS) {
        if (formDataFromLS.hasOwnProperty(key)) {
            form.elements[key].value = formDataFromLS[key];
        }
    }
}

fillFormFields();

const inputHandler = e => {
    formData[e.target.name] = e.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const submitHandler = e => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }
    console.log(formData);
    e.target.reset();
    localStorage.removeItem('feedback-form-state');

    //clean object
    formData = {
      email: '',
      message: '',
    };
    
};

form.addEventListener('input', inputHandler);
form.addEventListener('submit', submitHandler);