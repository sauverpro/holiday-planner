import { UserModel } from "../../models";
import  {hashPassword, comparePassword } from "../../utils";
export const changePassword = async (req, res) => {
  try {
    const { currentPassword, NewPassword } = req.body;
   
    const { userId } = req;
    console.log(userId)
   const users = await UserModel.findById(userId)
   console.log(users);
   let isValidPassword = await comparePassword(currentPassword,users.Password)
   if(!isValidPassword){
    res.status(404).json({
        message: "please enter correct old password"
    })
   }
   let hashed = await hashPassword(NewPassword)
   users.Password = hashed
   users.save();
   res.status(201).json({
    message : "password changed successfully"
   })
    
  } catch (error) {
    console.log(error);
  }
};
