const vitrineService = require("../services/vitrine.service");

exports.vitrine = (req, res) => {
    const text = vitrineService.vitrine();
    return res.status(200).send(text);
}
