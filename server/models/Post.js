const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  body: String,
  username: String,
  comments: [
    {
      body: String,
      username: String,
      createdAt: String,
    },
  ],
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: String,
});

module.exports = model('Post', postSchema);
