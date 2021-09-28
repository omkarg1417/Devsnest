const emailValidate = (email) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    console.log(email);
   return re.test(email);
}

const passwordValidate = (password) => {
    const re = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    console.log(password);
    return re.test(password);
}

module.exports = {
    emailValidate,
    passwordValidate
};