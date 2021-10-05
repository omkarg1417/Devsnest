const User = require('../models/user');
const bcrypt = require('bcrypt');
/**
 * level-3
 * check if email already exists
 * password hashing
 * email to lowercase
 * save
 */

const SaltRounds = 10;

const register = async (req, res) => { 
    const {fullName, email, password} = req.body;

    //checking if user already exists
    try {
        const alreadyExists = await User.findOne({where:{email}});
        if(alreadyExists) {
            res.status(401).send("Email already exists");
        }

        //hashing users password
        const salt = bcrypt.genSaltSync(SaltRounds);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = new User({fullName: fullName, email : email.toLowerCase(), password : hash});
        const savedUser = await newUser.save();

        res.status(201).send(savedUser);
        
    }
    catch (err) {
        console.error(err);
        res.status(501).send("Something went wrong");
    }
    
}

module.exports = {register};