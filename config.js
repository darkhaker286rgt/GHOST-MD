const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
MONGODB: process.env.MONGODB || "Y7dGxApK#ILy2eaCVW-1AiO2l7mHztMM-mffdGIrm9lOqpqBryRI",
||"SESSION ID" 

AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
