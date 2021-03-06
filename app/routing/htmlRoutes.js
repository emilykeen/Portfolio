// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  app.get("/portfolio", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/portfolio.html"));
  });
  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/contact.html"));
  });
  app.get("/resume", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/resume.html"));
  });
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/about.html"));
  });
  // If no matching route is found default to home
  app.use('/', function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  });
};