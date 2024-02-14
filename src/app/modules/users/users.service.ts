import { generateUserId } from './users.utils'
import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import ApiError from '../../../errors/ApiError'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // TODO
  // auto generated incremental id

  const id = await generateUserId()
  if (id) {
    user.id = id
  }

  // default password
  if (!user.password) {
    user.password = config.defaultUserPass as string
  }

  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new ApiError(400, 'Faile to create user')
  }
  return createdUser
}

export const UserService = {
  createUser,
}
