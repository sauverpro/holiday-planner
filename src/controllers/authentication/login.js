import { UserModel } from "../../models";
import { generateToken,comparePassword } from "../../utils";

 export const loginUser = async (req,res)=>{
    
    try {
   
        let user = await UserModel.findOne({ email: req.body.email });
        if (!user) {
        return res.status(404).json({
            message: "user not found",
          });
        }
        let comparedPassword = await comparePassword(req.body.Password, user.Password)
        if (!comparedPassword) {
         return res.status(401).json({
            message: "wrong password",
          });
        }
       let token = generateToken({
        _id : user._id
       })
      let Auth = await res.setHeader('Authorization',`Bearer ${token}`)
      if (!Auth) {
       return res.status(400).json({
          message :"failed to save token "
        })
      }
        res.status(200).json({
             message: "Login Successfully",
         access_token : token,
         data:{
            fullname:user.FullNames,
            email: user.email,
            role: user.Role
         },
        });
    
      }catch(error){
        console.log(error);
        res.status(500).json({
            message: "internal server error"
        })
      }
 }