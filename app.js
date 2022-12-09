const express = require('express');
const { stringReplace } = require('string-replace-middleware');
const path = require('path');

const app = express();

console.log(process.env);

// writing from Deployment Config to temporary variables
const BACKEND_URL = process.env.API_BACKEND_URL || "http://localhost:3000/secured";
const KEYCLOAK_URL = process.env.SSO_URL || "http://localhost:8080";
const KEYCLOAK_REALM = process.env.SSO_REALM || "international";
const KEYCLOAK_CLIENT_ID = process.env.CLIENT_ID || "www-page";
const KEYCLOAK_ROLE = process.env.KEYCLOAK_ROLE || "none";
const AUTHENTICATION_OPTION = process.env.AUTHENTICATION_OPTION || "none";
const MAPS_KEY = process.env.MAPS_KEY || "missing-key-ask-instructor";

const PORT = process.env.PORT || 8080;

// adding values into the source code
app.use(stringReplace({
   'ENVIRONMENT.BACKEND_URL': BACKEND_URL,
   'ENVIRONMENT.KEYCLOAK_URL': KEYCLOAK_URL,
   'ENVIRONMENT.KEYCLOAK_REALM' : KEYCLOAK_REALM,
   'ENVIRONMENT.KEYCLOAK_CLIENT_ID': KEYCLOAK_CLIENT_ID,
   'ENVIRONMENT.KEYCLOAK_ROLE' : KEYCLOAK_ROLE,
   'ENVIRONMENT.AUTHENTICATION_OPTION': AUTHENTICATION_OPTION,
   'ENVIRONMENT.MAPS_KEY': MAPS_KEY
}));

app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')))
app.use('/css', express.static(path.join(__dirname, '/node_modules/font-awesome/css')))
app.use('/fonts', express.static(path.join(__dirname, '/node_modules/font-awesome/fonts')))
app.use('/fonts', express.static(path.join(__dirname, '/node_modules/bootstrap/fonts')))
app.use(express.static(path.join(__dirname, '/dev')))

app.get('/', function(req, res) {
    res.render('index.html');
});

//app.listen(8080);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});