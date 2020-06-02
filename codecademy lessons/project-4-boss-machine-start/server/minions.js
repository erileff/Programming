const minionsRouter = require('express').Router();
<<<<<<< HEAD

module.exports = minionsRouter;

const { 
addToDatabase,
getAllFromDatabase,
getFromDatabaseById,
updateInstanceInDatabase,
deleteFromDatabasebyId,
} = require('./db');

minionsRouter.param('minionId', (req, res, next, id) => {
const minion = getFromDatabaseById('minions', id);
if (minion) {
    req.minion = minion;
    next();
} else {
    res.status(404).send();
}
});

minionsRouter.get('/', (req, res, next) => {
res.send(getAllFromDatabase('minions'));
});

minionsRouter.post('/', (req, res, next) => {
const newMinion = addToDatabase('minions', req.body);
res.status(201).send(newMinion);
});

minionsRouter.get('/:minionId', (req, res, next) => {
res.send(req.minion);
});

minionsRouter.put('/:minionId', (req, res, next) => {
let updatedMinionInstance = updateInstanceInDatabase('minions', req.body);
res.send(updatedMinionInstance);
});

minionsRouter.delete('/:minionId', (req, res, next) => {
const deleted = deleteFromDatabasebyId('minions', req.params.minionId);
if (deleted) {
    res.status(204);
} else {
    res.status(500);
}
res.send();
});

minionsRouter.get('/:minionId/work', (req, res, next) => {
const work = getAllFromDatabase('work').filter((singleWork) => {
    return singleWork.minionId === req.params.minionId;
});
res.send(work);
});

minionsRouter.post('/:minionId/work', (req, res, next) => {
const workToAdd = req.body;
workToAdd.minionId = req.params.minionId;
const createdWork = addToDatabase('work', workToAdd);
res.status(201).send(createdWork);
});

minionsRouter.param('workId', (req, res, next, id) => {
const work = getFromDatabaseById('work', id);
if (work) {
    req.work = work;
    next();
} else {
    res.status(404).send();
}
});

minionsRouter.put('/:minionId/work/:workId', (req, res, next) => {
if (req.params.minionId !== req.body.minionId) {
    res.status(400).send();
} else {
    updatedWork = updateInstanceInDatabase('work', req.body);
    res.send(updatedWork);
}
});

minionsRouter.delete('/:minionId/work/:workId', (req, res, next) => {
const deleted = deleteFromDatabasebyId('work', req.params.workId);
if (deleted) {
    res.status(204);
} else {
    res.status(500);
}
res.send();
});
=======
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
>>>>>>> 9925dafca3c39e1ab87c4ab3197fecac73d389c7
