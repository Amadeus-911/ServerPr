const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const urlEncodedParser = bodyParser.urlencoded({ extended: false })

const fs = require('fs')

router.get('/', (req, res) => {
    res.send('Home Page')
})

router.get('/about', (req, res) => {
    res.send('About Page')
})

router.post('/form_post', urlEncodedParser, (req, res) => {
    console.log(req.body.username)
    res.redirect('cv')
})

router.get('/form', (req, res) => {
    res.render('inform')
})

router.post('/cv', urlEncodedParser, (req, res) => {
    educations = fs.readFileSync('data/education', {
        encoding: 'utf-8',
    })
    educations = JSON.parse(String(educations))

    experiences = fs.readFileSync('data/experiences', {
        encoding: 'utf-8',
    })
    experiences = JSON.parse(String(experiences))

    skills = fs.readFileSync('data/skills', {
        encoding: 'utf-8',
    })
    skills = JSON.parse(String(skills))

    languages = fs.readFileSync('data/languages', {
        encoding: 'utf-8',
    })
    languages = JSON.parse(String(languages))

    edus = []
    exp = []
    skill = []
    lang = []

    for (let key in educations) {
        edus.push(educations[key])
    }
    for (let key in experiences) {
        exp.push(experiences[key])
    }
    for (let key in skills) {
        skill.push(skills[key])
    }
    for (let key in languages) {
        lang.push(languages[key])
    }

    res.render('cv', {
        name: req.body.username,
        job: req.body.job,
        email: req.body.email,
        address: req.body.address,
        number: req.body.number,
        educations: edus,
        experiences: exp,
        skills: skill,
        languages: lang,
    })
})

module.exports = router
