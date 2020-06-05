import express from 'express'
import userController from './user.controller'
export const userRouter = express.Router()

userRouter
  .route('/')
  .get(userController.getUsers)

/*
userRouter.get('/', userController.getUsers)
userRouter.post('/', userController.createUser)
*/

userRouter
  .route('/:id')
  .get(userController.getProfile)
  .put(userController.updateUser)
  .delete(userController.deleteUser)
