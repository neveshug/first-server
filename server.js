//Create Server
const express = require('express')
const nunjucks = require('nunjucks')
const courses = require("./data")

const server = express()

server.use(express.static('public'))

//Template engine

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express:server
})

//Routes

server.get("/", (req, res) => {
    const about = {
        avatar_url: "logo_med_rocketseat.jpg",
        name: "Rocketseat",
        description: "Uma breve descrição da empresa, uma breve descrição da empresa ma breve descrição da empresa.",
        courses: {
            starter: 'Stater',
            launchbase: 'Launchbase',
            gostack: 'GoStack'
        }
    }
    return res.render('about', { about })
})

server.get("/courses", (req, res) => {
    return res.render('courses', {items : courses})
})

server.use(function (req, res) {
    const dataFound = {
        avatarUrlError : "https://miro.medium.com/max/1170/1*BWXSCXSkkY9juccNWbAfxg.png",
        codeError : "Erro 404",
        errorDescription : '“Desligue seu computador..Abra a porta e vá lá fora..Mova suas pernas em qualquer direção.“'
    }
    res.status(404).render("not-found", { dataFound });
})

//Start Server
server.listen(5000, () => {
    console.log('Server is running')
})