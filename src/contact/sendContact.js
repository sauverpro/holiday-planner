import { contactModel } from "../models"

export const sendContact = async (req,res)=>{
    try {
        const body = req.body
    const addContact = await contactModel.create(body)
    if (!addContact) {
        return res.status(403).json({
            message: "failed to send contact"
        })
    }
    res.status(201).json({
        message : "thanks for contacting us we'll replay ASAP"
    })
    } catch (error) {
        console.log("error", error);
        res.status(500).jason({
            message: "internal server error"
        })
    }
    
}