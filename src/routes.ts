import { Router } from 'express'
import homecontroller from './controllers/homecontroller'

const routes = Router()

routes.get('/', homecontroller.index)

export default routes
