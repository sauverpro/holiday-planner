import { UserModel } from "../../models"

export const getUserById = async (req,res)=>{
    try {
        
    
    const id  = req.params.UserId
    let tour = await UserModel.findById(id)
    if (!tour) {
        return res.status(404).json({
            message : "User doesn't found"
        })
    }
    res.status(200).json({
        message : "User founded",
        data : tour
    })
} catch (error) {
       console.log("error", error); 
       res.status(500).json({
        message: "internal server error"
       })
}
}