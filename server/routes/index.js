const router = require("express").Router();
const activitiesRouter = require('./activities.routes')
const eventsRouter = require('./events.routes')
const shopItemsRouter = require('./shopItems.routes')
const authRouter = require('./activities.routes')


router.use("/activities", activitiesRouter);
router.use("/events", eventsRouter);
router.use("/shopItems", shopItemsRouter);
router.use("/auth", authRouter);

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
