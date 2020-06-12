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
