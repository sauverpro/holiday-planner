import { contactModel } from "../../models";
export const getContacts = async (req, res) => {
  try {
    let data = await contactModel.find();
    if (!data) {
      return res.status(404).json({ message: "Sorry nothing's found"});
    }
    res.status(200).json({ status: 200, data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({
        message : "internal server error"
    })
  }
};
