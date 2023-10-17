import { UserModel } from "../../models";

export const getData = async (req, res) => {
    let data = await UserModel.find()
     res.status(200).json({"status":200, "data":data})
 }