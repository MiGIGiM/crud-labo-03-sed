const passport = require('passport');
const express = require('express');

const router = express.Router();
const {
  login, register, createAdmin, deleteusuario, getAllUsuarioss,
} = require('../controllers/Usuarios/UsuariosController');

const options = { session: false };

router.post('/register', register);
router.post('/login', passport.authenticate('local', options), login);

router.get('/current', passport.authenticate('bearer', options), getCurrentUsuarios);
router.get('/', passport.authenticate('bearer', options), getAllUsuarioss);

router.delete('/delete-user', passport.authenticate('bearer', options), deleteUser);

module.exports = router;