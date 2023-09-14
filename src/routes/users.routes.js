const { Router } = require('express')

const UsersController = require('../controllers/UsersController')
const UserAvatarController = require("../controllers/UserAvatarController")

const ensureAuthenticaded = require("../middlewares/ensureAuthenticaded")

const multer = require("multer")
const uploadConfig = require("../configs/upload")
const upload = multer(uploadConfig.MULTER)

const usersRoutes = Router()

const usersController = new UsersController()
const userAvatarController = new UserAvatarController()

usersRoutes.post('/', usersController.create)
usersRoutes.put('/', ensureAuthenticaded,  usersController.update)
usersRoutes.patch("/avatar", ensureAuthenticaded, upload.single("avatar"), userAvatarController.update)


module.exports = usersRoutes
