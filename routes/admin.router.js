var router = express.Router();
const adminController = require("../controllers/admin.controller");

router.get("/", adminController.getAdmin)