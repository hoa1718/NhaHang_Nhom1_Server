const thucDonController = require("../controllers/ThucDon");

module.exports = function(router){
    router.get('/',thucDonController.index());
}