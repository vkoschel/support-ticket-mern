const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    product: {
      type: String,
      required: [true, 'Please select a product'],
      enum: ['iPhone', 'iPad', 'iMac'],
    },
    description: {
      type: String,
      required: [true, 'Please enter a description'],
    },
    status: {
      type: String,
      required: true,
      enum: ['pending', 'open', 'closed'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Ticket', ticketSchema);
