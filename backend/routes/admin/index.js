const app = require("express")();
var authentication = require("../../middleware/authentication");

require("dotenv").config();

app.use(authentication.checkAdmin);

app.use("/accounts", require('./accounts'));
app.use("/category", require('./category'));
app.use("/users", require('./users'));
app.use("/userRoles", require('./userRoles'));
app.use("/blogs", require('./blogs'));

module.exports = app;
