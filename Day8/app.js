const express = require('express');
const app = express();


/*

Middleware => It's a function that runs before running another function (mostly to check if user's request is suitable or not).
    Example: If you want only admins to access the page you add a checkAdmin() function as middleware to let user access the page.

*/


let checkAdmin = (req, res, next) => {
    if(req.query.admin === 'true') {
        next();
    } else {
        res.send("Must be admin");
    }
}

let sendRes = (req, res) => {
    
    res.status(200).json(req.query);
}


// If you want to use some middlewares for every request then add them in app.use() like below
// app.use(checkAdmin);

app.get('/', checkAdmin, sendRes);



app.listen(8000, (req, res) => {
    console.log("Listening on 8000");
})