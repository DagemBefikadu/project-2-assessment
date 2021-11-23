const express = require('express')
const methodOverride = require('method-override');
const { where } = require('sequelize/dist');
let db = require("./models");

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.static('static'))
app.use(methodOverride('_method'))
// app.use('/wackywidget', require('./controllers/widgets'))

// WRITE YOUR ROUTES HERE /////////////


app.get('/', (req,res) => {
    db.wacky.findAll()
    .then((widgets) => {
        res.render("widgets/show", {widgets: widgets})
    })
    .catch((error) => {
        console.log(error)
    })
})

app.get("/new", (req, res) => {
        res.render('widgets/new')

})

app.post('/', (req, res) => {
    db.wacky.create ({
        description: req.body.description,
        quantity: req.body.quantity
    })
    .then((wackyPost) => {
        res.redirect('/')
    })
    .catch((error) => {
        console.log(error)
    })
})

app.delete("/",(req, res) => {
        console.log(req.body.description)

    db.wacky.destroy({
        where: {
            id: req.body.id
        }
    })
    .then(numRowsDeleted=>{
        console.log(numRowsDeleted)
        res.redirect('/')
    })
    
        // destroy returns 1 if something is deleted and 0 if nothing happens
        // console.log('You deleted:  ', deletedItem)
        
    .catch(error => {
        console.log(error)
    })
  })
// YOUR ROUTES ABOVE THIS COMMENT /////

app.listen(3000)