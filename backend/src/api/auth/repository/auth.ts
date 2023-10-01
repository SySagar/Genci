import User from "@models/user";
import userTypes from '../types/userTypes'

export const createUser = async (user: userTypes) => {
  try {
    const newUser = await User.create(user);

    newUser.save()
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const searchUserByEmail = async (email: string) => {
    try {
        const user = await User.findOne({email: email})
        if(user)
        return user;
        else
        return null;
    } catch (error) {
        console.log(error)
    }
}