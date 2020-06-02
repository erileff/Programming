<<<<<<< HEAD
const ideasRouter = require('express').Router();

module.exports = ideasRouter;

const { 
addToDatabase,
getAllFromDatabase,
getFromDatabaseById,
updateInstanceInDatabase,
deleteFromDatabasebyId,
} = require('./db');

const checkMillionDollarIdea = require('./checkMillionDollarIdea');

ideasRouter.param('id', (req, res, next, id) => {
const idea = getFromDatabaseById('ideas', id);
if (idea) {
    req.idea = idea;
    next();
} else {
    res.status(404).send();
}
});

ideasRouter.get('/', (req, res, next) => {
res.send(getAllFromDatabase('ideas'));
});

ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
const newIdea = addToDatabase('ideas', req.body);
res.status(201).send(newIdea);
});

ideasRouter.get('/:id', (req, res, next) => {
res.send(req.idea);
});

ideasRouter.put('/:id', checkMillionDollarIdea, (req, res, next) => {
let updatedInstance = updateInstanceInDatabase('ideas', req.body);
res.send(updatedInstance);
});

ideasRouter.delete('/:id', (req, res, next) => {
const deleted = deleteFromDatabasebyId('ideas', req.params.id);
if (deleted) {
    res.status(204);
} else {
    res.status(500);
}
res.send();
});
=======
// TODO GET array of all ideas
// TODO POST create a new idea and save to DB
// send new/updated resources in request body
// won't have id property, set it based on next id in seq
// TODO GET ideaId to get single idea by id
// TODO PUT ideaId to update single idea by id
// send new/updated resources in request body
// TODO DELETE ideaId to delete single idea by id
>>>>>>> 9925dafca3c39e1ab87c4ab3197fecac73d389c7
