const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');

const getTickets = asyncHandler(async (req, res) => {
  const tickets = {};
  res.status(200).json({ message: 'gettickets' });
});

const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'createtickets' });
});
module.exports = {
  getTickets,
  createTicket,
};
