import { contactModel } from "../../models";
import { transporter } from "../../utils";

export const reply = async (req,res)=>{
    try {
        
    
    const {contactId} = req.params;
    const body = req.body
    // res.json({data:body})
    // console.log("body",body,"\n contact id", contactId);
    const contact = await contactModel.findById(contactId)
    if (!contact) {
        res.status(404).json({
            status: 404,
            message: "Contact not found"
        })
    }
    const mailOptions = {
        from: process.env.MAILER_AUTH_USER,
        to: contact.email,
        subject:body.subject,
        test:`Hello Dear,\n ${body.message}`
    }
    console.log(mailOptions);
    await transporter.sendMail(mailOptions,async(error,response)=>{
        if (error) {
            console.log(error);
            res.status(403).json({success: false})
        }
        console.log("email sent", response);
        let reply = await contactModel.findByIdAndUpdate(contact._id,{isReplied:true})
        if (!reply) {
            console.log("failed to update reply");
        }
        res.status(201).json({
            message: "Form submitted successfully",
            success: true,
            isReplied: true
          });
    })
} catch (error) {
       console.log(error); 
       res.status(500).status({message: "internal server error"})
}
}