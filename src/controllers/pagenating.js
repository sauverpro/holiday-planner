import { tourModel } from "../models";
export const paginating = async (req, res) => {
//   console.log("here");
//   const options = {
//     page: parseInt(req.query.page),
//     limit: parseInt(req.query.limit),
//   };
//   console.log(options);
//   tourModel
//     .paginate({}, options)
//     .then((data) => {
//       res.status(200).json({
//         Tours: data,
//       });
//     })
//     .catch((error) => {
//       req.status(error.status || 500).json({
//         error: error.message,
//       });
//     });
res.status(200).json(res.paginatedData)
};
