'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
const bcrypt      = require('bcrypt');
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.


bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    if (err) {
        return console.error('Error hashing password:', err);
    }
    
    // Store hash in your password DB.
    console.log('Generated Hash:', hash);

    // Now compare the password after hashing
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
        if (err) {
            return console.error('Error comparing password:', err);
        }

        // Log the comparison result (should be true)
        console.log('Password match:', res); // Should log true

        // Compare with a different password
        bcrypt.compare(someOtherPlaintextPassword, hash, (err, res) => {
            if (err) {
                return console.error('Error comparing password:', err);
            }

            // Log the comparison result (should be false)
            console.log('Password match with different password:', res); // Should log false
        });
    });
});

//END_ASYNC

//START_SYNC
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(hash);
var result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(result);


//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
