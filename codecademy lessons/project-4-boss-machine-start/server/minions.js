const minionsRouter = require('express').Router();
module.exports = minionsRouter;

const { getAllFromDatabase, addToDatabase, getFromDatabaseById, updateInstanceInDatabase, deleteFromDatabasebyId } = require('./db');

// TODO GET array of all minions
// TODO POST create a new minion and save to DB
// send new/updated resources in request body
// won't have id property, set it based on next id in seq
// TODO GET minionId to get single minion by id
// TODO PUT minionId to update single minion by id
// send new/updated resources in request body
// TODO DELETE minionId to delete single minion by id