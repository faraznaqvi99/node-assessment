const mongoose = require('mongoose');

const cardSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: schema.ObjectId,
      ref: "User"
    },
    project: {
      id: Schema.ObjectId,
      name: String
    },
    likes: {
      type: Array,
      default: []
    },
    status: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

cardSchema.statics.DoesCardExist = async function (cardId) {
  const user = await this.findOne({ _id: cardId });
  return !!user;
};

/**
 * @typedef Card
 */
const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
