//This is for testing purposes only. This will need to be deleted before PR to origin master
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let data =  {
    twitterHandle: 'jaymaas-dev',
    favorites: [
    'example', 'example2', 'example3', 'example4', 'example5',
    ],
    suggestions: [
    {twitterHandle: 'example', score: 0.781},
    {twitterHandle: 'example', score: 0.617},
    {twitterHandle: 'example', score: 0.521},
    {twitterHandle: 'example', score: 0.68},
    {twitterHandle: 'example', score: 0.475}
    ],
    personality: [
    {name: 'openness', score: 0.781},
    {name: 'conscientiousness', score: 0.617},
    {name: 'extraversion', score: 0.521},
    {name: 'agreeableness', score: 0.68},
    {name: 'emotionalRange', score: 0.475}
    ],
    needs: [
    {name: 'challenge', score: 0.741},
    {name: 'closeness', score: 0.706},
    {name: 'curiosity', score: 0.840},
    {name: 'excitement', score: 0.553},
    {name: 'harmony', score: 0.753},
    {name: 'ideal', score: 0.690},
    {name: 'liberty', score: 0.701},
    {name: 'love', score: 0.700},
    {name: 'practicality', score: 0.708},
    {name: 'selfExpression', score: 0.620},
    {name: 'stability', score: 0.687},
    {name: 'structure', score: 0.688}
    ],
    values: [
    {name: 'conservation', score: 0.567},
    {name: 'opennessToChange', score: 0.774},
    {name: 'hedonism', score: 0.654},
    {name: 'selfEnhancement', score: 0.697},
    {name: 'selfTranscendence', score: 0.818}
    ]
    }

let registeredUsers = [
    {
        
    }
]

let registeredUsersNextId = 0

app.use(bodyParser.json())

app.use(cors())

function authenticator(req, res, next) {
    const { authorization } = req.headers
    if(authorization === token) {
        next()
    } else {
        res.status(403).json({ error: 'Jay has written this server. You are either not authenticated, or something else...Good luck!!!' })
    }
}

app.get('/', (req, res) => {
    res.json(registeredUsers)
})

app.post('/login', (req, res) => {
    const registeredUser = registeredUsers.find(user => user.username == req.body.username && user.password == req.body.password)
    if (registeredUser) {
        req.loggedIn = true
        res.status(200).json({
            payload: token
        })
    } else {
        res
            .status(403)
            .json({ error: 'Your information is not correct. Jay is very sorry.'})
    }
})

app.post('/register', (req, res) => {
    let passport = { ...req.body }
    passport = {
        username: passport.username, 
        password: passport.password,
    }
    const registeredUser = { id: getNextUserId(), passport}

    registeredUsers = [...registeredUsers, registeredUser]
    res.status(200).json({
        payload: token
    })
})

app.get('/data', authenticator, (req, res) => {
    setTimeout(() => {
        res.send(data)
    }, 1000)
})

function getNextUserId() {
    return registeredUsersNextId + 1
}

app.listen(port, () => {
    console.log(`Server listening on ${port}. Dont forget how hard Jay worked on this (15 minutes)`)
})