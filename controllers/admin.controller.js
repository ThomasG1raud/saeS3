const adminService = require("../services/admin.service");

exports.getAdmin = (req,res) => {
    adminService.getAdmin((error, results) => {
        if (error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: error });
        }
        return res.status(200).send({
            success: 1,
            data: results,
        });
    });
}