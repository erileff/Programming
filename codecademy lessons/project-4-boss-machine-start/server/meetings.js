<<<<<<< HEAD
const meetingsRouter = require('express').Router();

module.exports = meetingsRouter;

const { getAllFromDatabase, addToDatabase, deleteAllFromDatabase, createMeeting } = require('./db');

meetingsRouter.get('/', (req, res, next) => {
res.send(getAllFromDatabase('meetings'));
});

meetingsRouter.post('/', (req, res, next) => {
let newMeeting = addToDatabase('meetings', createMeeting());
res.status(201).send(newMeeting);
});

meetingsRouter.delete('/', (req, res, next) => {
deleteAllFromDatabase('meetings');
res.status(204).send();
});
=======
// TODO GET array of all meetings
// TODO POST create new meeting and save to DB
// no request body necessary
// use createMeeting from db.js to create new meeting
// TODO DELETE all meetings from database
>>>>>>> 9925dafca3c39e1ab87c4ab3197fecac73d389c7
