#! python3
# bulletPointAdder.py - adds Wikipedia bullet points to the start of each line of text on the clipboard

import pyperclip
text = pyperclip.paste()

# Separate lines and add stars.
lines = text.split('\n')
for i in range(len(lines)): # loop through all indexes in "lines" list
    lines[i] = '*' + lines[i] # add star to each string in "lines" list

text = '\n'.join(lines)

pyperclip.copy(text)
