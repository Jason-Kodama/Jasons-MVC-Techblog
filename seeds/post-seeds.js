const { Post } = require('../models');
const postData = [
    {
        title: "How to start playing golf",
        post_text: "First either buy new or used golf clubs. Then take them to the driving range and hit some balls. Watch some youtube videos then repeat.",
        user_id: 1,
    },
    {
        title: "Keys to becoming a good chef",
        post_text: "Besides techniques that you learn over time, it is important to eat out at other places as well. By trying other foods, it gives you and idea of flavors that you can incorporate with your cooking.",
        user_id: 2,
    },
    {
        title: "Keys to succeed in coding bootcamp",
        post_text: "Rewatch past lectures so it stays in your head. Coding yourself allows you to learn more than just watching videos or other people coding.",
        user_id: 3,
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;