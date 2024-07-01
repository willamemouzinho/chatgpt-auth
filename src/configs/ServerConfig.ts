// ServerConfig.ts
import express from 'express'
import { connectDatabase } from './config/DatabaseConfig'
import { AuthController } from './presentation/controllers/AuthController'
import { TaskController } from './presentation/controllers/TaskController'
import { AuthMiddleware } from './presentation/middlewares/AuthMiddleware'
import { UserService } from './core/domain/services/UserService'
import { TaskService } from './core/domain/services/TaskService'
import { UserRepository } from './infrastructure/db/repositories/UserRepository'
import { TaskRepository } from './infrastructure/db/repositories/TaskRepository'
import { JwtAuthProvider } from './infrastructure/auth/JwtAuthProvider'

// Inicialização do servidor
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

// Configuração dos controladores e rotas
const userService = new UserService(new UserRepository(), new JwtAuthProvider())
const authController = new AuthController(userService)
const taskController = new TaskController(new TaskService(new TaskRepository()))
const authMiddleware = new AuthMiddleware(new JwtAuthProvider())

app.post('/register', authController.register.bind(authController))
app.post('/login', authController.login.bind(authController))
app.post(
  '/logout',
  authMiddleware.authenticate.bind(authMiddleware),
  authController.logout.bind(authController)
)
app.post(
  '/tasks',
  authMiddleware.authenticate.bind(authMiddleware),
  taskController.createTask.bind(taskController)
)
app.get(
  '/tasks',
  authMiddleware.authenticate.bind(authMiddleware),
  taskController.getTasks.bind(taskController)
)

connectDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  })
  .catch((err) => {
    console.error('Failed to connect to the database', err)
  })
