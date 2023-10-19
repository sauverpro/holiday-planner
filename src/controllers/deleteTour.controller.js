import { tourModel } from "../models";


export const deleteTour = async(req, res) => {
    try {
        const id = req.params.id;
        console.log(id);

        // Use filter() to remove item with the specified ID from the database array
        let data = await tourModel.findByIdAndDelete({ _id: id });
            if (!data) {
                res.status(404).json({message:"failed to delete Tour"})
              }
              res.status(200).json({message:'Tour deleted successfully:', data : data})
                console.log('Tour deleted successfully:', data); 

    } catch (error) {
        console.error(error);
        // Internal server error, send error response
        res.status(500).json({ status: 500, message: "Internal server error" });
    }
};

