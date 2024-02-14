import { RequestHandler } from 'express'
import { z } from 'zod'
import { UserService } from './users.service'
const createUser: RequestHandler = async (req, res, next) => {
  try {
    // req validation dorkar via zod
    //body -> object
    //data -> object

    const createUserZodSchema = z.object({
      body: z.object({
        role: z.string({
          required_error: 'role is required',
        }),
        password: z.string().optional(),
      }),
    })
    await createUserZodSchema.parseAsync(req)

    const { user } = req.body
    const result = await UserService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'User created successfuly',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const UserController = {
  createUser,
}
