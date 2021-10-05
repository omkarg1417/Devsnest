const {emailValidate, passwordValidate} = require('../utils/validate.js');

/**
 * @description
 * Level-1
 * email validate - string
 * password validate - string
 */

const registerInitialCheck = (req, res, next)=> {
    const {email, password, confirmPassword} = req.body;

    if(
        typeof email === 'string' && 
        typeof password === 'string' && 
        typeof confirmPassword === 'string' && 
        email.length > 0 && 
        password.length > 0 && 
        confirmPassword === password &&
        emailValidate(email) && 
        passwordValidate(password)
    ) {

        next()
    } else{
        res.status(401).send("Initial check fail");
    }
}

module.exports = {registerInitialCheck}; 