import { UserModel } from "../../models";
import { hashPassword } from "../../utils";
 export const RegisterUser = async(req,res)=>{
    try {
        let checkUser = await UserModel.findOne({ email: req.body.email });
        if (checkUser) {
        return res.status(409).json({ message: "email already exist" });
        }
        let hash = await hashPassword(req.body.Password);
        req.body.Password = hash;
        let newUser = await UserModel.create(req.body);
       
    
        res.status(200).json({
          message: "User registered successfully",
          data: {
            email: newUser.email,
            fullName: newUser.FullNames,
            location: newUser.Location,
          },
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "internal server error"
        })
    }
 }