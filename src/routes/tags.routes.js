const { Router } = require('express')

const TagsController = require('../controllers/TagsController')

const ensureAuthenticaded = require("../middlewares/ensureAuthenticaded")

const tagsRoutes = Router()

const tagsController = new TagsController()

tagsRoutes.get('/', ensureAuthenticaded, tagsController.index)

module.exports = tagsRoutes
