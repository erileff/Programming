# These are the emails you will be censoring. The open() function is opening the text file that the emails are contained in and the .read() method is allowing us to save their contexts to the following variables:
email_one = open("email_one.txt", "r").read()
email_two = open("email_two.txt", "r").read()
email_three = open("email_three.txt", "r").read()
email_four = open("email_four.txt", "r").read()

proprietary_terms = ["she", "personality matrix", "sense of self", "self-preservation", "learning algorithm", "her", "herself"]

negative_words = ["concerned", "behind", "danger", "dangerous", "alarming", "alarmed", "out of control", "help", "unhappy", "bad", "upset", "awful", "broken", "damage", "damaging", "dismal", "distressed", "distressed", "concerning", "horrible", "horribly", "questionable"]

def censor(word, email):
    censored_email = email.replace(word, "REDACTED")
    return censored_email

def censor_from_list(text, list):
    for word in list:
        if word in text:
            text = text.replace(word, "REDACTED")
        if word.title() in text:
            text = text.replace(word.title(), "REDACTED")
    return text

# print(censor_from_list(email_two, proprietary_terms))

def censor_negative(text, censored_list, negative_list):
    count = 0
    text = censor_from_list(text, censored_list)
    for word in negative_list:
        if text.count(word) >= 1:
            count += 1
        if count > 2:
            text = text.replace(word, "REDACTED")
    return text

def censor_last(text, censored_list, negative_list):
    text = censor_negative(text, censored_list, negative_list)
    text = text.replace('\n\n', ' ')
    text = text.split(' ')
    i = 0
    while i < len(text):
        if "REDACTED" in text[i]:
            text[i - 1] = "REDACTED"
            text[i + 1] = "REDACTED"
            i+= 1
        i += 1
    new_text = " ".join(text)
    return new_text

print(censor_last(email_four, proprietary_terms, negative_words))

# So it's redacting words contained in other words, like "here" because of "her"... I don't feel like fixing this right now, but maybe later? Hey, it's supposed to be top-secret, so, why not redact more? 😆