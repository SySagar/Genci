import {createUser,searchUserByEmail} from "../repository/auth";
import { hashPassword,comparePasswords } from "@utils/bcrypt";
import { generateAccessToken } from "@utils/generateToken";
import User from "../types/userTypes"

export const registerUser = async (req: any, res: any) => {
  const { email, password }: any = req.body;
  const {name,username,bio}:any = req.body.profile
  const displayName = username || name

  const hashedPassword = await hashPassword(password);
  const user: User = {
    name,
    displayName,
    bio,
    email,
    hashedPassword,
    solved: [],
  } as User;

  const isUserExists = await searchUserByEmail(email);

  if (isUserExists) {
  res.send("user already exists");}
  else {
    //creates a new user in the database
    const result = await createUser(user);

    console.log(result);

    if (result) {console.log("user saved to db");
    res.send("user saved to db");
    }
    else
     res.send("error saving user to db");
  }
};

export const loginUser = async (req: any, res: any) => {
  
  const { email, password }: any = req.body;

  const user = await searchUserByEmail(email);

    const hashedPassword = user?.hashedPassword as string;
    // console.log(hashedPassword);

  if (user) {

    const isPasswordMatch = await comparePasswords(password,hashedPassword);

    if (isPasswordMatch) {
      console.log("user logged in");
      const token = generateAccessToken({ userEmail: email });
      res.json({ message: "user logged in", status: 200, user:user,token:token });

    } else res.json({ message: "Wrong credentials", status: 401 });
  }
  else 
  res.json({ message: "user not found", status: 404 });


};