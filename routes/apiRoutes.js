var notes = require("../db/db.json");
const { uid } = require("uid");

// ROUTING
const apiRoutes = (app) => {
  // get data
  app.get('/api/notes', (req, res) => {
    res.json(notes)
  })

  // post data
  app.post('/api/notes', (req, res) => {
    const note = {
      id: uid(),
      ...req.body
    }
    notes.push(note)
    res.json(notes)
  })

  // delete data
  app.delete('/api/notes/:id', (req, res) => {
    notes = notes.filter(note => note.id !== req.params.id)
    res.json(notes)
  });
};


module.exports = apiRoutes