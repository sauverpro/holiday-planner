import { UserModel } from "../../models";
import { generateToken,hashPassword } from "../../utils";
 export const RegisterUser = async(req,res)=>{
    try {
        let checkUser = await UserModel.findOne({ email: req.body.email });
        if (checkUser) {
        return res.status(409).json({ message: "email already exist" });
        }
        let hash = await hashPassword(req.body.Password);
        req.body.Password = hash;
        let newUser = await UserModel.create(req.body);
        console.log("new User", newUser);
        let token = generateToken({
          _id: newUser._id
        });
    
        res.status(200).json({
          message: "User registered successfully",
          access_token: token,
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