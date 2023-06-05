const router = require('express').Router();
const userRoutes = require('./user-routes');
const blogRoutes = require('./post-routes');
const commentRoute = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/blog', blogRoutes);
router.use('/comments', commentRoute);

module.exports = router;