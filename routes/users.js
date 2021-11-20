const passport = require('passport');
const express = require('express');

const router = express.Router();
const {
  register, deleteUser, getAllUser, getCurrentUser
} = require('../controllers/Usuarios/UsuariosController');

const options = { session: false };

router.post('/register', register);
router.post('/login', passport.authenticate('local', options), login);

router.get('/current', passport.authenticate('bearer', options), getCurrentUser);
router.get('/', passport.authenticate('bearer', options), getAllUser);

router.delete('/delete-user', passport.authenticate('bearer', options), deleteUser);

module.exports = router;