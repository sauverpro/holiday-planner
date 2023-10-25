import { UserModel } from "../../models";
import { hashPassword, transporter, varidate } from "../../utils";
export const RegisterUser = async (req, res) => {
  try {
    // let {valid} = await varidate(req.body.email);
    // if (valid === false) {
    //   console.log("validate",valid);
    //   return res.json({ message: "please provide a valid email" });
    // }
    let checkUser = await UserModel.findOne({ email: req.body.email });
    if (checkUser) {
      return res.status(409).json({ message: "email already exist" });
    }
    let hash = await hashPassword(req.body.Password);

    let newUser = await UserModel.create({ ...req.body, Password: hash });

    if (!newUser) {
      return res.status(403).json({
        message: "Oooops signup failed!! try again later",
      });
    }
    // Email configuration
    const mailOptions = {
      from: "sauveur.dev@gmail.com",
      to: newUser.email,
      subject: `Welcome to event Planer platform`,
      text: `Dear ${newUser.FullNames},\n You are most welcome to our platform. Now you can login with this credentials : \n Username: ${newUser.email}\n Password: ${req.body.Password}`,
    };
    console.log(mailOptions);
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.json({ success: false });
      }
      console.log("Email sent: " + info.response);

      res.status(201).json({
        message: "User registered successfully",
        success: true,
        data: {
          email: newUser.email,
          fullName: newUser.FullNames,
          location: newUser.Location,
        },
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
    });
  }
};
