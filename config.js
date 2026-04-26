const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    
SESSION_ID: process.env.SESSION_ID || "v9RlTZCL#_SPfE4njY15sKgKgMwt9SjioM3Hxm_gQsJB4nRu8nRc",
PREFIX: process.env.PREFIX || ".",
MODE: process.env.MODE || "public",

}
