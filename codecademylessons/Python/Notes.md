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