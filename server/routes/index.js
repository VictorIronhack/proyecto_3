const router = require("express").Router();
const gymRouter = require('./gym.routes')
const authRouter = require('./auth.routes')


router.use("/gym", gymRouter);
router.use("/auth", authRouter);

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
