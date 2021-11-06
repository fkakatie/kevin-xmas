const getCode = () => {
    const $code = document.getElementById('code')
    const code = $code.value.toLowerCase().trim();
    if (code === '') {
        $code.classList.add('error');
    }
    return code;
}

const getEmail = () => {
    const $email = document.getElementById('email');
    const email = $email.value.trim();
    if (email === '') {
        $email.classList.add('error');
    }
    return email;
}

const checkSubmission = (e) => {
    e.preventDefault();
    const code = getCode();
    const email = getEmail();
    if (code !== '' && email !== '') {
        submitForm(code, email);
    }
}

const submitForm = async (code, email) => {
    const url = `https://script.google.com/macros/s/AKfycbwHHhF6zRXz1zNJgiPZWmEe8vZA-aCVh5YnZviQGMHYcp0X3GKPPwvC2x5BBl6L13I/exec?code=${code}&email=${email}`;
    const req = await fetch(url);
    const res = await req.json();
    alert(res.response);
}

window.addEventListener('load', (e) => {
    const $submitBtn = document.getElementById('submit');
    $submitBtn.addEventListener('click', checkSubmission);
});
