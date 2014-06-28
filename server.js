/**
 * Created by francogeraci on 28/06/14.
 */
var connect = require('connect');

var app=connect().use(connect.static("/Users/francogeraci/Documents/angularjs"));
app.listen(5000);