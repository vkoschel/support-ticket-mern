const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');
const { restart } = require('nodemon');

const getTickets = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }
  const tickets = await Ticket.find({ user: req.user.id });

  res.status(200).json(tickets);
});

const createTicket = asyncHandler(async (req, res) => {
  const { product, description } = req.body;

  if (!product || !description) {
    restart.status(400);
    throw new Error('Please provide a product and a description');
  }

  const ticket = await Ticket.create({
    product,
    description,
    user: req.user.id,
    status: 'pending',
  });
  res.status(201).json(ticket);
});
module.exports = {
  getTickets,
  createTicket,
};
