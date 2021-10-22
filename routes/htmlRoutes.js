const { join } = require("path");

const htmlRoutes = (app) => {
  // HTML GET Requests
  // Below code handles when users "visit" a page.

  app.get('/notes', (req, res) => {
    res.sendFile(join(__dirname, '../public/notes.html'))
  });

  // index route
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../public/index.html'))
  });

};

module.exports = htmlRoutes