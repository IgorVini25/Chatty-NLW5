import { Router } from 'express'
import { MessagesController } from './controllers/MessagesController'
import { SettingController } from './controllers/SettingsController'
import { UsersController } from './controllers/UsersController'

const routes = Router()

const settingsController = new SettingController()
routes.post('/settings', settingsController.create)
routes.get('/settings/:username', settingsController.findByUsername)
routes.put('/settings/:username', settingsController.update)

const usersController = new UsersController()
routes.post('/users', usersController.create)

const messageController = new MessagesController()
routes.post('/messages', messageController.create)
routes.get('/messages/:id', messageController.showByUser)

export { routes }
