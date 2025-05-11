const formData = {
    email: "",
    message: "",
};

const form = document.querySelector(".feedback-form");
const dataKey = "FORM_DATA" 

try {

    let {email: localEmail, message: localMessage} = JSON.parse(localStorage.getItem(dataKey));
    
    form.elements.email.value = localEmail;
    form.elements.message.value = localMessage;

    formData.email = localEmail;
    formData.message = localMessage;
    
} catch (error) {
    console.log(error);
}


form.addEventListener("input", (e) => {
    
    formData.email = form.elements.email.value;
    formData.message = form.elements.message.value;
    
    
    const stringifyFormData = JSON.stringify(formData)
    
    localStorage.setItem(dataKey, stringifyFormData);    
    
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    localStorage.removeItem(dataKey);

    e.target.reset();
});
