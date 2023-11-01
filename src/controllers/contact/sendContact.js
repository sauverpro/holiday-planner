import { contactModel } from "../../models"
import { transporter } from "../../utils"

export const sendContact = async (req,res)=>{
    try {
        const body = req.body
    const addContact = await contactModel.create(body)
    if (!addContact) {
        return res.status(403).json({
            message: "failed to send contact"
        })
    }
    // Email configuration
    const mailOptions = {
        from: "sauveur.dev@gmail.com",
        to: body.email,
        subject: `Holyday Planer platform`,
        text: `Hello Dear,\n Thank you for contacting us, we'll reply to you soon..`,
      };
      console.log(mailOptions);
      await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          res.json({ success: false });
        }
        console.log("Email sent: " + info);
  
        res.status(201).json({
          message: "Form submitted successfully",
          success: true,
          data: info
        });
      });
    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            message: "internal server error"
        })
    }
    
}