// getAllFromDatabase
// takes one arg (model name); returns array of elements or null if invalid arg
    
// getFromDatabaseById
// takes model name and string (unique id of element) args; returns instance with valid inputs and null if invalid id
    
// addToDatabase
// takes model name and object (key-value pairs of new instance) args; handles assigning ids to instances; doesn't check for valid input, so add checks to routes if necessary; returns newly-created instance from db; validates schema of instance to create/throw error if invalid
    
// updateInstanceInDatabase
// takes model name and object (updated instance) args; must have valid id property; returns updated instance in db or null if invalid inputs; validates schema and throw error if invalid

// deleteFromDatabasebyId
// takes model name and string (unique id of element to delete) args; returns true if properly deleted and false if element not found

// deleteAllFromDatabase
// takes one arg (model name); deletes all elements from proper model and returns new, empty array; only need to use for /api/meetings route

// schemas //
// minion //
// id: string, name: string, title: string, salary: number
// idea //
// id: string, name: string, description: string, numWeeks: number, weeklyRevenue: number
// meeting //
// time: string, date: JS Date object, day: string, note: string

// checkMillionDollarIdea function will make sure that any new or updated ideas are still worth at least one million dollars; total value of idea is the product of its numWeeks and weeklyRevenue properties

// optional schema //
// work //
// id: string, title: string, description: string, hours: number, minionId: string
// routes //
// GET minionId/work to get array of all work for specified minion
// POST minionId/work to create new work object and save to db
// PUT minionId/work/workId to update a single work by id
// DELETE minionId/work/workId to delete a single work by id

// To work on the bonus with tests, you will need to remove their pending status. Open the test/test.js and edit that begins the /api/minions/:minionId/work routes tests. It should start with xdescribe( around line 689 of the test file. If you delete the x (so that the line simply starts with describe( and save the test file before re-running, your bonus tests will now be active.
// In order to fully implement these routes, the database helper functions may not provide all the functionality that you need, and you may need to use router parameters or other methods to attach the minionId properties correctly and handle the edge cases property. Good luck!