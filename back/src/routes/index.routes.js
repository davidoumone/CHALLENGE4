const router = require('express').Router();
const mediaRouter = require('./media.routes');
const descriptionRouter = require('./description.routes');
const adminRouter = require('./admin.routes');

router.use('/media', mediaRouter);
router.use('/description', descriptionRouter);
router.use('/admin', adminRouter);

module.exports = router;