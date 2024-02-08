import { generateUserId } from './users.utils'
import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'

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
    throw new Error('Faile to create user')
  }
  return createdUser
}

export default {
  createUser,
}
