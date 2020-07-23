const router = require('express').Router();
const mediaRouter = require('./media.routes');
const descriptionRouter = require('./description.routes');

router.use('/media', mediaRouter);
router.use('/description', descriptionRouter);