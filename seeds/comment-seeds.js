const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'That is good to know!',
    post_id: 2,
    user_id: 1
  },
  {
    comment_text: 'Interesting....',
    post_id: 1,
    user_id: 3
  },
  {
    comment_text: 'Will have to try that next time!',
    post_id: 3,
    user_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;