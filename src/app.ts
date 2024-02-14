import express, { Request, Response, Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'
const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application Routes

app.use('/api/v1/users/', UserRoutes)

app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully!')
})

app.use(globalErrorHandler)

export default app
