#! python3

# This program creates a multi-clipboard of reusable phrases.

TEXT = {
    'agree': """Sure, that sounds great!""",
    'busy': """Sorry, that time won't work for me. Is there another time that works for you?"""
}

import sys, pyperclip
if len(sys.argv) < 2:
    print('Usage: python mclip.py [keyphrase] - copy phrase text')
    sys.exit()

keyphrase = sys.argv[1] #first command line arg is the keyphrase

if keyphrase in TEXT:
    pyperclip.copy(TEXT[keyphrase])
    print('Text for ' + keyphrase + ' copied to clipboard.')
else:
    print('There is no text for ' + keyphrase)