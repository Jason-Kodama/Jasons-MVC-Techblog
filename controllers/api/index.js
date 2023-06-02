const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./postRoutes');
const commentRoute = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/blog', blogRoutes);
router.use('/comments'. commentRoute);

module.exports = router;