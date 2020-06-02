# CRUD

CRUD means "Create, Read, Update, Delete." These are the four basic types of functionality a model should have.

## Library
In a hypothetical library system, there would be a `book` object:
```
"book": {
    "id": <Integer>,
    "title": <String>,
    "author": <String>,
    "isbn": <Integer>
}
```
This system can be made usable with CRUD.

* __Create:__ A function we'd call when a new library book is added to the catalog. The program calling the function would supply values for `title`, `author`, and `isbn`. After called, there'd be a new entry, assigned a unique `id` for later access to the resource.
* __Read:__ A function called to see all of the books currently in the catalog. It would *not* alter the catalog, but simply retrieve the resource and display results. We'd also have a function to see a single book.
* __Update:__ A function to call when information about a book needs to be changed. After new values are supplied and the function is called, the entry would contain the updated fields.
* __Delete:__ A function to call to remove a book from the catalog.

## CRUD and REST
In a REST environment, CRUD often corresponds to the HTTP methods POST, GET, PUT, and DELETE.

* Create - Post
* Read - Get
* Update - Put
* Delete - Delete

### Create
HTTP POST method most commonly used to create. If we're adding a `dish` to a restaurant's `dishes` resource, we'd use POST:
```
POST http://www.myrestaurant.com/dishes/
```
Body:
```js
{
    "dish": {
        "name": "Avocado Toast",
        "price": 8
    }
}
```
This creates a new item. When successfully created, it should return a header with a link to the newly-created resource and an HTTP response code of 201 (CREATED). The response body would contain the dish's `id`.

### Read
GET method used to retrieve information only. It should always return the same response. GET:
```
GET http://www.myrestaurant.com/dishes/
```
Body:
```js
{
    "dishes": [
        {
            "id": 1,
            "name": "Spring Rolls",
            "price": 6
        },
        {
            "id": 1223,
            "name": "Avocado Toast",
            "price": 8
        }
    ]
}
```
GET can also be used to read a specific item when its `id` is specified in the request.
```
GET http://www.myrestaurant.com/dishes/1223
```
returns the Avocado Toast item.

### Update
PUT method is used to update. If the price of Avocado Toast increases, we can use a PUT request.
```
PUT http://www.myrestaurant.com/dishes/1223
```
Body:
```js
{
    "dish": {
        "name": "Avocado Toast",
        "price": 10
    }
}
```
The `dish` with `id` 1223 still has the `name` Avocado Toast but the `price` is now 10.

### Delete
Delete method is used to delete resources from the system. To delete the Avocado Toast item, we'd use the request:
```
DELETE http://www.myrestaurant.com/dishes/1223
```
If successful, this returns response code 204 (NO CONTENT) with no response body.

## CRUD Practice
### Create
1. What routes would you need to implement to provide your workout class model with this CRUD functionality and what are their corresponding HTTP verbs? ***POST /classes***
2. What effect would each route have on the database? ***Adds the provided class to the database.***
3. What response body would each route return? ***`{"class": The New Class}`***
4. What response code would each route return? ***201***

### Read
1. What routes would you need to implement to provide your workout class model with this CRUD functionality and what are their corresponding HTTP verbs? ***GET /classes*** (all), ***GET /classes/:id*** (one)
2. What effect would each route have on the database? ***No effect***
3. What response body would each route return? ***An array of all classes or the object of the class with specified ID***
4. What response code would each route return? ***200***

### Update
1. What routes would you need to implement to provide your workout class model with this CRUD functionality and what are their corresponding HTTP verbs? ***PUT /classes/:id***
2. What effect would each route have on the database? ***Updates the class with specified ID***
3. What response body would each route return? ***Class object with updated information***
4. What response code would each route return? ***200***

### Delete
1. What routes would you need to implement to provide your workout class model with this CRUD functionality and what are their corresponding HTTP verbs? ***DELETE /classes/:id***
2. What effect would each route have on the database? ***Removes the class with specified ID***
3. What response body would each route return? ***None***
4. What response code would each route return? ***204***