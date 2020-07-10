animals = ['cats', 'dogs', 'horses', 'fish', 'turtles']

def commaCode(list):
    string = ''
    for i in range(len(list)):
        if i == (len(list) - 1):
            string += 'and {i}'.format(i=list[i])
        else:
            string += '{i}, '.format(i=list[i])
    return string

print(commaCode(animals))