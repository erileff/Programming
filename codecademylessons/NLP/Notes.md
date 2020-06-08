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

## Tokenization
To access each word in a string, we have to break the text into smaller components. This is called tokenization and individual components are called tokens. Tokenization can be used to find how many words or sentences are in text, how many times a word or phrase exist, or accounting for which terms are likely to co-occur.

`ntlk`'s `word_tokenize()` function accepts a string and returns a list of words. `sent_tokenize()` returns a list of sentences.

## Normalization
Normalization is a catch-all term for various pre-processing tasks besides noise removal and tokenization. It includes tasks like upper or lowercasing, stopword removal, stemming (removing prefixes and suffixes), and lemmatization (replacing a word with its root).

## Stopword Removal
Stopwords are words removed during preprocessing, usually the most common words in a language that don't provide any information about the tone of a statement, i.e. "a", "an," and "the." NLTK has a built-in library of these words which can be imported by using:
```py
from nltk.corpus import stopwords
stop_words = set(stopwords.words('english'))
```

## Stemming
Stemming removes word affixes, i.e. "going" becomes "go." NLTK has a built-in stemmer called PorterStemmer. To import it:
```py
from nltk.stem import PorterStemmer
stemmer = PorterStemmer()
```

## Lemmatization
Importing NLTK's WordNetLemmatizer:
```py
from nltk.stem import WordNetLemmatizer
lemmatizer = WordNetLemmatizer()
```

`lemmatize()` treats every word as a noun, so we need to tag each word in text with the most likely part of speech.

### Part-of-Speech Tagging
Import wordnet and Counter:
```py
from nltk.corpus import wordnet
from collections import Counter
```
Get synonyms:
```py
def get_part_of_speech(word):
    probable_part_of_speech = wordnet.synsets(word)
```
Use Counter to count number of synonyms that fall into each part of speech:
```py
pos_counts["n"] = len( [
    item for item in probable_part_of_speech if item.pos()=="n" ] )
```
Return most common part of speech:
```py
most_likely_part_of_speech = pos_counts.most_common(1)[0][0]
```
Pass into lemmatizer to find root for each word:
```py
tokenized = ["How", "old", "is", "the", "country", "Indonesia"]

lemmatized = [lemmatizer.lemmatize(token, get_part_of_speech(token)) for token in tokenized]

print(lemmatized)
# ['How', 'old', 'be', 'the', 'country', 'Indonesia']
# Previously: ['How', 'old', 'is', 'the', 'country', 'Indonesia']
```

# NLP with Regular Expressions

## Compiling and Matching
`.compile()` takes a regex pattern as an argument and compiles the pattern into a regex object, which you can later use to find matching text. This will match exactly 4 upper or lowercase characters:
```py
regular_expression_object = re.compile("[A-Za-z]{4}")
```
`.match()` takes a string of text as an argument and looks for a single match to the regex that starts at the beginning of the string. If it finds a match that starts at the beginning of the sting, it will return a match object, which lets you know what piece of text matched and at what index the match begins and ends. If there's no match, it returns `None`. With the match object stored in a variable, you can access the matched text by calling `result.group[0]` (where `result` is the variable). This can be simplified to one line:
```py
result = re.match("[A-Za-z]{4}, "Toto")
```
A regular expression is the first argument and a string is the second argument.

## Searching and Finding
`.search()` method looks left to right through an entire piece of text and returns a match object for the first match to the regex given. If no match, returns `None`. `.findall()` finds all occurrences of a word or keyword in a piece of text. It takes a regex as first argument and string as second argument. It returns a list of all *non-overlapping* matches of the regex.

## Part-of-Speech Tagging
`nltk`'s `pos_tag()` function automates the POS tagging process. The function takes one argument, a list of words in the order they appear in a sentence, and returns a list of tuples, where the first entry is a word and second is the part-of-speech tag. (A tuple is a sequence of Python objects.)
```py
part_of_speech_tagged_sentence = pos_tag(word_sentence)
```
| Tag  | Description                              | Example                                 |
|------|------------------------------------------|-----------------------------------------|
| CC   | coordinating conjunction                 | and                                     |
| CD   | cardinal number                          | 1, three                                |
| DT   | determiner                               | the                                     |
| EX   | existential *there*                      | *there* is                              |
| FW   | foreign word                             | d'hoevre                                |
| IN   | preposition or subordinating conjunction | in, of, like, after, that               |
| JJ   | adjective                                | green                                   |
| JJR  | adjective, comparative                   | greener                                 |
| JJS  | adjective, superlative                   | greenest                                |
| LS   | list item marker                         | 1)                                      |
| MD   | modal                                    | could, will                             |
| NN   | noun, singular or mass                   | table                                   |
| NNS  | noun, plural                             | tables                                  |
| NNP  | proper noun, singular                    | John                                    |
| NNPS | proper noun, plural                      | Vikings                                 |
| PDT  | predeterminer                            | *both* the boys                         |
| POS  | possessive ending                        | friend'*s*                              |
| PRP  | personal pronoun                         | I, he, it                               |
| PRP$ | possessive pronoun                       | my, his                                 |
| RB   | adverb                                   | however, usually, naturally, here, good |
| RBR  | adverb, comparative                      | better                                  |
| RBS  | adverb, superlative                      | best                                    |
| RP   | particle                                 | give *up*                               |
| SYM  | symbol                                   | $, %                                    |
| TO   | *to*                                     | *to* go, *to* him                       |
| UH   | interjection                             | uhhuh                                   |
| VB   | verb, base form                          | take                                    |
| VBD  | verb, past tense                         | took                                    |
| VBG  | verb, gerund or present participle       | taking                                  |
| VBN  | verb, past participle                    | taken                                   |
| VBP  | verb, non-3rd person singular present    | take                                    |
| VBZ  | verb, 3rd person singular present        | takes                                   |
| WDT  | wh-determiner                            | which                                   |
| WP   | wh-pronoun                               | who, what                               |
| WP$  | possessive wh-pronoun                    | whose                                   |
| WRB  | wh-adverb                                | where, when                             |

## Introduction to Chunking
Using POS tagged text, you can use regex to find patterns in sentence structure that give insight into the meaning of a text. Grouping words by their POS tag is called *chunking*.

With `nltk`, you can define a pattern of POS tags using a modified notation of regex. You can then find non-overlapping matches, or chunks of words, in the POS tagged sentences of a text.

The regex used to find chunks is called *chunk grammar*.
```py
chunk_grammar = "AN: {<JJ><NN>}"
```
`AN` is a user-defined name for the kind of chunk you're searching for. Here, it stands for adjective-noun. Curly braces surround the chunk grammar. `JJ` matches any adjective. `NN` matches any noun, singular or plural.

To use the chunk grammar, create a `nltk` `RegexpParser` object and give it the chunk grammar as an argument.
```py
chunk_parser = RegexpParser(chunk_grammar)
```
RegexpParser's `.parse()` method takes a list of POS tagged words as an argument and identifies where such chunks occur in the sentence.
```py
chunked = chunk_parser.parse(pos_tagged_sentence)
```

## Chunking Noun Phrases
A noun phrase contains a noun and operates, as a unit, as a noun. A popular form of noun phrase is determiner-adjective(s)-noun. With regex, you can find all non-overlapping noun phrases in a piece of text. You can use quantifiers like in normal regex to indicate how many parts of speech you want to match.
```py
chunk_grammar = "NP: {<DT>?<JJ>*<NN>}"
```
This finds an optional determiner, 0 or more adjectives, and a noun.

By finding all the noun phrases in a text, you can perform a frequency analysis and identify important, recurring noun phrases.

## Chunking Verb Phrases
A verb phrase contains a verb and its complements, objects or modifiers. Structures include:
* verb of any tense, noun phrase, optional adverb (said the cowardly lion)
  * `chunk_grammar = "VP: {<VB.*><DT>?<JJ>*<NN><RB.?>?}"`
* noun phrase, verb of any tense, optional adverb (the cowardly lion said)
  * `chunk_grammar = "VP: {<DT>?<JJ>*<NN><VB.*><RB.?>?}"`

## Chunk Filtering
Chunk filtering lets you define what parts of speech you don't want in a chunk and remove them. A popular method for chunk filtering is to chunk an entire sentence together, then indicate which parts of speech are to be filtered out. If the filtered parts are in the middle of a chunk, it will split the chunk into two separate chunks.
```py
chunk_grammar = """NP: {<.*>+}
}<VB.?|IN>+{"""
```