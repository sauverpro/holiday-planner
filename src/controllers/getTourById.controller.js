import { tourModel } from "../models";

export const getByIdTour = async (req,res)=>{
    try {
        
    
    const id  = req.params.tourID
    let tour = await tourModel.findById(id)
    if (!tour) {
        return res.status(404).json({
            message : "tour doesn't found"
        })
    }
    res.status(200).json({
        message : "tour founded",
        data : tour
    })
} catch (error) {
       console.log("error", error); 
       res.status(500).json({
        message: "internal server error"
       })
}
}