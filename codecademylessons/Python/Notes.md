# Python

## Comments
Python comments begin with `#`. Python does not have multi-line comments.

## Print
Python's version of `console.log()` is `print()`.
```py
print ("I'm Erica")
# I'm Erica
```

## Variables
Variables in Python don't have types like `let` and `const`. Variables don't need to be declared.
```py
meal = "An english muffin"
```

## Errors

### SyntaxError
`SyntaxError` means there's something wrong with the way your program is written: punctuation that doesn't belong, command where it's not expected, missing parenthesis, etc.

### NameError
`NameError` means Python saw a word it doesn't recognize. Code that contains something that looks like a variable that was never defined throws this error.

## Exponents
Exponents use the notation `**`.
```py
print(8 ** 2)
# prints 8 squared (64)
```

## Multi-Line Strings
Using `"""` or `'''` instead of just one tells the program that the string doesn't end until the next triple-quote.

## User Input
`input()` requires a prompt message, which it will print for the user before they enter the new information.
```py
likes_snakes = input("Do you like snakes?")
```
This prints the string, then the user's answer is saved to the variable.

# Functions

## Write a Function
Functions must have a heading and an indented block of code. The heading starts with the keyword `def` and the name of the function, followed by parentheses and a colon.
```py
def function_name():
some code
```

## Scope
A variable defined inside a function doesn't exist outside the function.

# Control Flow

## Operators
| ==  | Equal                                                   |
|-----|---------------------------------------------------------|
| !=  | Not Equal                                               |
| >   | Greater than                                            |
| <   | Less than                                               |
| >=  | Greater than or equal to                                |
| <=  | Less than or equal to                                   |
| and | returns True if both statements true                    |
| or  | returns True if one statement is true                   |
| not | Reverse the result, returns false if the result is true |

## Try and Except Statements
`try` and `except` can be used to check for possible errors a user might encounter.
```py
try: 
    #statement
except ErrorName:
    #statement
```

The statement under try is executed. If an exception is raised during this, and the exception matches the keyword in the `except` statement, `try` statement terminates and `except` statement executes.

# Lists

## Zip
To create a list of lists, we can use the command `zip`, which takes two or more lists as inputs and returns an object containing a list of pairs. Each pair contains one element from each input.
```py
names = ['Jenny', 'Alexus', 'Sam', 'Grace']
heights = [61, 70, 67, 65]

names_and_heights = zip(names, heights)
```
Printing `names_and_heights` won't return anything useful. It must be converted to a `list` first.
```py
print(list(names_and_heights))

# [('Jenny', 61), ('Alexus', 70), ('Sam', 67), ('Grace', 65)]
```

## Append
Add a single item:
```py
my_list = [1, 2, 3]
my_list.append(4)
print(my_list)
# [1, 2, 3, 4]
```

## Plus (+)
Add multiple items:
```py
items_sold = ['cake', 'cookie']
items_sold_new = items_sold + ['bread', 'tart']
print(items_sold_new)
# ['cake', 'cookie', 'bread', 'tart']
```

## Length
Finding length of a list:
```py
len(my_list)
```

## Last Item
To find the last item in a list without knowing the length of the list:
```py
print(my_list[-1])
```

## Slicing Lists
To slice a list:
```py
sublist = letters[1:6]
print(sublist)
```
This will slice starting with index 1 and ending at index 5; the end index is not included.

If we're starting at 0 or ending at the index of a list, can write `:3` or `2:`. To select the last 3 elements: `-3:`.

## Count
To count items in a list:
```py
num_i = letters.count('i')
```

# Loops
```py
dog_breeds = ['french_bulldog', 'dalmation', 'shihtzu', 'poodle', 'collie']
for breed in dog_breeds:
    print(breed)
```

# Modules
A module is a collection of Python declarations intended broadly to be used as a tool. Modules can also be called "libraries" or "packages."

Syntax for using module:
```py
from module_name import object_name
```

A common library is `datetime`:
```py
from datetime import datetime
```
`datetime.now()`: current local date and time.

`random.choice()`: takes a list as an argument and returns a number from the list.
`random.randint()`: takes two numbers as arguments and returns a random number between the two numbers

## Datetime
`datetime.now`: "2020, 6, 19, 18, 49, 38, 363546."

# Classes

## Exception
An Exception is a class that inherits from Python's `Exception` class. It can be validated using the function `issubclass()`. It takes 2 parameters, returning true if the first argument is a subclass of the second argument. If either argument is not a class, `TypeError` is raised.

# Nodes
An individual node contains data and links to other nodes. Nodes form the basis for linked lists, stacks, queues, trees, etc.

Links within a node are sometimes called "pointers" because they point to another node.

## Linked Lists
In a linked list, nodes are linked to from only one other node. Adding a new node at the beginning requires you to link your new node to your current head node. To remove a node from the middle, you need to adjust the link on the previous node so it points to the following node.

# Hash Maps
> Hash map: A key-value store that uses an array and a hashing function to save and retrieve values.
Key: The identifier given to a value for later retrieval.
Hash function: A function that takes some input and returns a number.
Compression function: A function that transforms its inputs into some smaller range of possible outputs.

> Recipe for saving to a hash table:
> - Take the key and plug it into the hash function, getting the hash code.
> - Modulo that hash code by the length of the underlying array, getting an array index.
> - Check if the array at that index is empty, if so, save the value (and the key) there.
> - If the array is full at that index continue to the next possible position depending on your collision strategy.

> Recipe for retrieving from a hash table:
> - Take the key and plug it into the hash function, getting the hash code.
> - Modulo that hash code by the length of the underlying array, getting an array index.
> - Check if the array at that index has contents, if so, check the key saved there.
> - If the key matches the one you're looking for, return the value.
> - If the keys don't match, continue to the next position depending on your collision strategy.

# Heaps

## Min-Heaps

Min-heaps keep track of the minimum value in a dataset, while max-heaps keep track of the maximum value in a dataset.

Heaps enable solutions for problems like finding the shortest path (Dijkstra's Algorithm) or sorting a dataset (heapsort).

**Example:** creates a min-heap one element at a time by adding random numbers, then removes the minimum until the min-heap is empty.

```py
Adding: 18 to [None]
HEAP RESTORED! [None, 18]

Adding: 74 to [None, 18]
HEAP RESTORED! [None, 18, 74]

Adding: 71 to [None, 18, 74]
HEAP RESTORED! [None, 18, 74, 71]

Adding: 5 to [None, 18, 74, 71]
swapping 74 with 5
swapping 18 with 5
HEAP RESTORED! [None, 5, 18, 71, 74]

Adding: 49 to [None, 5, 18, 71, 74]
HEAP RESTORED! [None, 5, 18, 71, 74, 49]

Adding: 47 to [None, 5, 18, 71, 74, 49]
swapping 71 with 47
HEAP RESTORED! [None, 5, 18, 47, 74, 49, 71]

Removing: 5 from [None, 5, 18, 47, 74, 49, 71]
Last element moved to first: [None, 71, 18, 47, 74, 49]
Left child is smaller
swapping 71 with 18
Right child is smaller
swapping 71 with 49
HEAP RESTORED! [None, 18, 49, 47, 74, 71]

Removing: 18 from [None, 18, 49, 47, 74, 71]
Last element moved to first: [None, 71, 49, 47, 74]
Right child is smaller
swapping 71 with 47
HEAP RESTORED! [None, 47, 49, 71, 74]

Removing: 47 from [None, 47, 49, 71, 74]
Last element moved to first: [None, 74, 49, 71]
Left child is smaller
swapping 74 with 49
HEAP RESTORED! [None, 49, 74, 71]

Removing: 49 from [None, 49, 74, 71]
Last element moved to first: [None, 71, 74]
There is only a left child
HEAP RESTORED! [None, 71, 74]

Removing: 71 from [None, 71, 74]
Last element moved to first: [None, 74]
HEAP RESTORED! [None, 74]

Removing: 74 from [None, 74]
Last element moved to first: [None]
HEAP RESTORED! [None]
```

# Function Arguments

## Default Arguments

Function arguments are required, so a function that defines two parameters requires two arguments passed to it. If we give a default argument to a function that argument won't be required.

```python
def create_user(username, is_admin=False):
  create_email(username)
  set_permissions(is_admin)
  
user2 = create_user('djohansen')
```

The required parameters need to come before any parameters with a default argument.

## Keyword Arguments

We use keyword arguments by passing arguments to a function with a special syntax that uses the names of parameters. This is useful if the function has many optional default arguments or if the order of a function's parameters is hard to tell.

```python
def log_message(logging_style="shout", message="", font="Times", date=None):
  if logging_style == 'shout':
    message = message.upper()
  print(message, date)

log_message(message="Hello from the past", date="November 20, 1693")
```

Lists can't be default arguments.

```python
# So if we can’t use a list as a default argument for a function, what can we use? If we want an empty list, we can use None as a special value to indicate we did not receive anything. After we check whether an argument was provided we can instantiate a new list if it wasn’t.

def add_author(authors_books, current_books=None):
  if current_books is None:
    current_books = []

  current_books.extend(authors_books)
  return current_books
```

Parameter Order:

- All named positional parameters
- An unpacked positional parameter (`*args`)
- All named keyword parameters
- An unpacked keyword parameter (`**kwargs`)

