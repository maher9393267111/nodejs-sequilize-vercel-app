const { Router } =  require("express");
const { cUser, dUser, gMUser, gOneUser, gUsers, uUser } =  require("../contoller/users")

router.get("/users", gUsers);
router.get("/users:iduser", gOneUser);
router.post("/users", cUser);
router.delete("/users:iduser", dUser);
router.put("/users:iduser", uUser);
router.get("/users/pets:iduser", gMUser);


module.exports = router