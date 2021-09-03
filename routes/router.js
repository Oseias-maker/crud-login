const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')

//const authCrud = require('../views/App')

//router para las vistas
router.get('/', authController.isAuthenticated, (req, res)=>{    
    res.render('index', {user:req.user})
})
router.get('/login', (req, res)=>{
    res.render('login', {alert:false})
})
router.get('/register', (req, res)=>{
    res.render('register')
})

// router.get('/App', (req, res)=> {
//     res.render('App')
// })



//router para los métodos del controller
router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/logout', authController.logout)
//router.get('/App', authCrud.login)

module.exports = router