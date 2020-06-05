# Natural Language Processing

## Text Preprocessing
Cleaning and preparing text. `the`, `The`, and `<p>The` are entirely different to a computer.

### Common Tasks
* Noise removal (stripping formatting, like HTML tags)
* Tokenization (breaking text into individual words)
* Normalization
  * Stemming (chopping off word prefixes and suffixes)
  * Lemmatization (bring words down to root forms -- "am" and "are" are related to "be")
  * Lowercasing
  * Stopwords removal
  * Spelling correction

## Parsing Text
Parsing is concerned with segmenting text based on syntax.

* Part-of-speech (POS) tagging (identifies parts of speech)
* Named entity recognition (NER) (helps identify proper nouns in text)
* Dependency grammar trees (helps you understand the relationship between words in a sentence)
* Regex parsing (identify specific phrase chunks; find patterns in text)

## Language Models
Probabilistic computer models of language used to figure out the likelihood that a given sound, letter, word, or phrase will be used. Once trained, it can be tested on new texts.

### Unigram model (bag-of-words)
Tally count of each instance for each word.

### N-gram model
Considers a sequence of some number (n) units and calculates the probability of each unit in a body of language given the preceding sequence of length *n*.

### Neural language model (NLM)

## Topic Models
Dedicated to uncovering latent topics in a body of language.

### Term frequency-inverse document frequency (tf-idf)
Deprioritizes most common words and prioritizes less frequently used terms as topics.

### Latent Dirichlet allocation (LDA)
Statistical model that takes documents and determines which words keep popping up together in the same contexts.

## Text Similarity
Addressing word similarity and misspelling for spellcheck and autocorrect often involves considering the ***Levenshtein distance*** or minimal edit distance between two words. This is calculated through the minimum number of insertions, deletions, and substitutions that would need to occur for one word to become another.
* "Bees" into "beans"
  * Substitute "a" for "e"
  * Insert "n"
  * ***Levenshtein distance: 2***

More advanced autocorrect and spelling correction considers key distance on a keyboard and phonetic similiarity.

Lexical similarity: degree to which texts use the same vocabulary and phrases.

Semantic similarity: degree to which documents contain similar meaning or topics.

## Language Prediction
Examples: autosuggest, autocomplete, suggested replies.

First, need to pick a language model.
* Bag of words isn't good
* N-gram: would most likely rely on ***Markov chains*** to predict the statistical likelihood of each following word or character. They are memory-less and predict just on the current n-gram.
* Long Short Term Memory (LSTM) uses deep learning with a network of artificial "cells" that manage memory, making them better suited for text prediction.

## Advanced NLP Topics
* Naive Bayes classifiers (supervised machine learning algorithms used for sentiment analysis and spam filtering)
* Machine translation
* Language accessibility (text-to-speech, speech recognition)
* Detecting bias

# Regular Expressions

## Literals
Literals are where our regular expression contains the exact text we want to match. `a` matches `a` and `bananas` matches `bananas`. It can match just a piece of text. `monkey` would match `The monkeys like to eat bananas.`

## Alternation
Alternation, performed using the pipe symbol `|`, allows us to match either the characters proceeding or after `|`. `baboons|gorillas` will match `I love baboons` and `I love gorillas`.

## Character Sets
Character sets (`[]`) let us match one character from a series of characters, allowing for different or incorrect spellings. `con[sc]en[sc]us` will match `consensus` as well as misspellings like `concensus`. `[cat]` will match `c`, `a`, or `t`, but not the word `cat`.

Placing a caret `^` at the front of a character set negates the set. `[^cat]` will match any character that is not `c`, `a`, or `t`.

## Wildcards
The wildcard `.` will match any single character (letter, number, symbol, whitespace) in a piece of text. If we want to match any 5-character piece of text, `.....` would match `horse` or `woods`. To match a period, use escape character `\` before the period.

## Ranges
Ranges allow us to specify a range of characters in which we can make a match without having to type out each character. The regex `[abc]` is equivalent to `[a-c]`. To match any single capital or lowercase letter, we can use `[A-Za-z]`. This only matches one character.

## Shorthand Character Classes
These represent common ranges to make writing regex simpler.

* `\w` (word character class) represents `[A-Za-z0-9_]` and matches any single uppercase or lowercase letter, digit, or underscore.
* `\d` (digit character class) represents `[0-9]` and matches a single digit.
* `\s` (whitespace character class) represents `[\t\r\n\f\v]` and matches a single space, tab, carriage return, line break, form feed or vertical tab.

These can be negated by capitalizing:
* `\W` matches anything not in `\w`'s range.

## Grouping
Grouping, denoted by `(` and `)`, lets us group parts of a regex together. `I love (baboons|gorillas)` will match `I love baboons` and `I love gorillas`.

## Fixed Quantifiers
Fixed quantifiers, denoted by `{` and `}`, let us indicate the quantity of a character we want to match, or a quantity range. `\w{4,7}` will match any words between 4 and 7 characters long.

## Optional Quantifiers
Optional quantifiers, denoted by `?`, allow us to indicate an optional character. `humou?r` will match `humor` and `humour`.

## Kleene Star
Denoted by `*`, it matches the preceding character 0 or more times. `meo*w` will match `mew`, `meow`, and `meoow`.

## Kleene Plus
Denoted by `+`, matches the preceding character 1 or more times.

## Anchors
`^` and `$` are used to match text at the start and end of a string, respectively. `^Monkeys: my mortal enemy$` will completely match `Monkeys: my mortal enemy` but not `Spider Monkeys: my mortal enemy in the wild`.

# Text Preprocessing
Text preprocessing is an approach for cleaning and preparing text data. The goal is to reduce the text to only the words you need for your NLP goals.

## Noise Removal
You may want to remove unwanted information, like punctuation, accents, special characters, numeric digits, whitespace, or HTML formatting.

Python's regular expression (`re`) library has a `.sub()` method for most noise removal needs.

### `.sub()`
Three required arguments:
1. `pattern` - a regex that is searched for in the input string. There must be an `r` preceding the string to indicate it's a raw string, which treats \ as literal characters.
2. `replacement_text` - text that replaces all matches in input string.
3. `input` - the input string that will be edited.

`.sub()` returns a string will all instances of `pattern` replaced by `replacement_text`.

#### Examples
```py
import re
text = "<p>    This is a paragraph</p>"
result = re.sub(r'<.?p>', '', text)
print(result)
#    This is a paragraph
```
```py
import re
text = "    This is a paragraph"
result = re.sub(r'\s{4}', '', text)
print(result)
# This is a paragraph
```
