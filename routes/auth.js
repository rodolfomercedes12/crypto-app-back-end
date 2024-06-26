//Path:    api/login

const { Router } = require("express");
const { check } = require("express-validator");
const { crearUsuario, login, renewToken } = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar_jwt");
const router = Router();

router.post("/new",  [
    check( "email", "El correo es obligatorio" ).isEmail(),
    check("password","La contraseña es obligatoria").not().isEmpty(),
    validarCampos
] ,crearUsuario);

router.post("/",  [
    check( "email", "El correo es obligatorio" ).isEmail() ,   
    check( "password", "La contraseña es obligatoria" ).not().isEmpty(),
] ,login);

router.get("/renew",validarJWT,  renewToken );

module.exports = router;