const express = require("express");
const router = express.Router();
const homeController = require("./controllers/homeController");
const bookController = require("./controllers/bookController");
const imageController = require("./controllers/imageController");
const {upload} = require('./controllers/imageController') 
const connectEnsureLogin = require('connect-ensure-login');
const passport = require('passport');





router.get("/", homeController.getHome);
router.get('/login', homeController.getLogin);
router.get('/logout',connectEnsureLogin.ensureLoggedIn(), homeController.logOut);
router.get("/book-list", connectEnsureLogin.ensureLoggedIn(), bookController.getBookList);
router.get("/books",connectEnsureLogin.ensureLoggedIn(), bookController.getBook);
router.get('/dashboard', connectEnsureLogin.ensureLoggedIn(), homeController.getDashboard);
router.post("/books",connectEnsureLogin.ensureLoggedIn(), bookController.postBook);
router.post(
    '/login',
    passport.authenticate('local', {
      failureRedirect: '/login',
      successRedirect: '/dashboard',
    }),homeController.postLogin);

router.get('/register', homeController.getRegister )
router.post('/register', homeController.postRegister )


router.get('/upload', imageController.getUploadImage)
router.post('/upload', upload.single('image'), imageController.postUpload)
router.get('/slideshow', imageController.getImage)

module.exports = router;
