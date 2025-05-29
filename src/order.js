// src/order.js

const express = require('express');
const { getOrderById } = require('./data');
const app = express();

app.get('/orders/:orderId', (req, res) => {
    //Missing Access Control: No check to ensure the user has permission to view this order
    const order = getOrderById(req.params.orderId);
  res.json(order);
});

module.exports = app;