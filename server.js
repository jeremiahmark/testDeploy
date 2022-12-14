const express = require('express');
const path = require('path');
const ngApp = express();
ngApp.use(express.static('./dist/example-component-interaction'));
ngApp.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname, '/dist/example-component-interaction'));
});
ngApp.listen(process.env.PORT || 8080);