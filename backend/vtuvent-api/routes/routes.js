const express = require('express');
const routes = express.Router();
const {addEvent,getAllEvents,getEventById,updateEventById,deleteEventById} = require('../controllers/event-controllers');
const Event = require('../models/event-model');

//routes
//to add data into databasae
routes.post('/addevent', addEvent )
  
//to get all data from database
routes.get('/events', getAllEvents)
  
//get event by id
routes.get('/event/:id', getEventById)
  
//update event by id
routes.put('/event/:id', updateEventById)
  
//delete event by id
routes.delete('/event/:id', deleteEventById)

module.exports = routes;