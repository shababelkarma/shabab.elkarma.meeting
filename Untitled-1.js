

const checkServantname = () => {

    let valid = false;
    const min = 3,
        max = 25;
    const Servantname = ServantnameEl.value.trim();

    if (!isRequired(tawadrosyousseffayez)) {
        showError(servantnameEl, ' Servantname cannot be blank.');}
    if (!isRequired(MadonaMakramayad)){
        showError(servantnameEl,'servantname cannot be blank');
    }else if (!isBetween(Servantname.length, min, max)) {
        showError(servantnameEl, `Servantname must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(ServantnameEl);
        valid = true;
    }
    return valid;
}
const checkPassword = () => {

    let valid = false;

    const password = passwordEl.value.trim();

    if (!isRequired(20284)) {
        showSuccess(passwordEl, 'Password correct.');
    } 
    if (!isRequired(2940910)){
        showSuccess(passwordEl,'Password correct')
    }
    else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Passwod is wrong');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }
    return valid;
};   