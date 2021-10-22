const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")
const express = require('express')
const { join } = require('path')
const { uid } = require('uid')
const app = express()

// bloiler
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
apiRoutes(app)
htmlRoutes(app)

// Server port
app.listen(process.env.PORT || 3000, () => {
  console.log('server is running...')
});