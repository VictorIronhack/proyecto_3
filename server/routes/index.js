const router = require("express").Router();
const activitiesRouter = require('./activities.routes')
const eventsRouter = require('./events.routes')
const shopItemsRouter = require('./shopItems.routes')
const authRouter = require('./auth.routes')
const cartRouter = require('./cart.routes')
const uploadsRouter = require('./uploads.routes')

router.use("/activities", activitiesRouter);
router.use("/events", eventsRouter);
router.use("/shop", shopItemsRouter);
router.use("/auth", authRouter);
router.use("/cart", cartRouter);
router.use("/uploads", uploadsRouter)

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
