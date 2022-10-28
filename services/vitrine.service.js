const {mysql,sequalize} = require("../connection")

const vitrine = () => {
    return "Home Page";
}

module.exports = {
    vitrine: vitrine
}