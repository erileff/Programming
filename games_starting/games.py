import random

money = 100

def coin_toss(bet, side):
    global money
    num = random.randint(1, 2)
    if num == 1:
        win_side = "Heads"
    else:
        win_side = "Tails"
    if side == win_side:
        money += bet
        print("You won! " + str(bet) + " has been added to your winnings.")
    else:
        money -= bet
        print("Sorry, you lost. " + str(bet) + " has been taken from your winnings.")

def cho_han(bet, guess):
    global money
    dice1 = random.randint(1, 6)
    dice2 = random.randint(1, 6)
    sum = dice1 + dice2
    if sum % 2 == 0:
        sum_e_o = "Even"
    else:
        sum_e_o = "Odd"
    if guess == sum_e_o:
        money += bet
        print("You won! " + str(bet) + " has been added to your winnings.")
    else:
        money -= bet
        print("Sorry, you lost. " + str(bet) + " has been taken from your winnings.")

def higher_card(bet):
    global money
    card1 = random.randint(1, 10)
    card2 = random.randint(1, 10)
    if (card1 > card2):
        money += bet
        print("You won! " + str(bet) + " has been added to your winnings.")
    elif (card2 < card1):
        money -= bet
        print("Sorry, you lost. " + str(bet) + " has been taken from your winnings.")
    else:
        print("It's a tie.")

# def roulette



#Call your game of chance functions here
print("Coin Toss:")
coin_toss(25, "Heads")
coin_toss(25, "Tails")

print("Cho-Han:")
cho_han(25, "Odd")
cho_han(25, "Even")

print("Higher Card:")
higher_card(25)
higher_card(25)

print("Your Balance:")
print(money)