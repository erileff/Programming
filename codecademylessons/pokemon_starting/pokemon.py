class Pokemon:
    def __init__(self, name, level, type, max_health, current_health, knocked_out):
        self.name = name
        self.level = level
        self.type = type
        self.max_health = max_health
        self.current_health = current_health
        self.knocked_out = knocked_out

    def __repr__(self):
        return self.name + " is a level " + str(self.level) + " " + self.type + " Pokemon. " + self.name + " has max health of " + str(self.max_health) + " and currently has " + str(self.current_health) + " health."

    def lose_health(self, damage):
        self.current_health -= damage
        if self.current_health > 0:
            print(self.name + " lost health. Current health: " + self.current_health)
        else:
            self.knocked_out

    def ko(self):
        self.knocked_out = True
        self.current_health = 0
        print(self.name + " got knocked out.")

    def revive(self):
        if self.knocked_out:
            self.knocked_out == False
            self.current_health == 100
            print(self.name + " was successfully revived.")
        else:
            print(self.name + " can't be revived if they aren't knocked out.")

    def gain_health(self, potion):
        if self.knocked_out:
            print(self.name + " needs to be revived first.")
        else:
            self.current_health += potion
            if self.current_health > self.max_health:
                self.current_health = self.max_health
            print(self.name + " has " + self.current_health + " health.")
    
    def attack(self, other_pokemon):
        if self.knocked_out == False:
            if self.level > other_pokemon.level:
                damage = (25 * self.level)
            else:
                damage = (10 * self.level)
            other_pokemon.current_health -= damage
            print(self.name + " attacked " + other_pokemon.name + " and caused " + str(damage) + " damage.")
        else:
            print(self.name + " is knocked out and cannot attack.")


plusle = Pokemon("Plusle", 2, "electric", 200, 200, False)
buneary = Pokemon("Buneary", 3, "normal", 300, 300, False)
klefki = Pokemon("Klefki", 8, "steel", 800, 800, False)
onix = Pokemon("Onix", 4, "rock", 400, 400, False)
pidgey = Pokemon("Pidgey", 5, "normal", 500, 500, False)

# print(onix.attack(klefki))
# Onix attacked Klefki and caused 40 damage.
# print(klefki)
# Klefki is a level 8 steel Pokemon. Klefki has max health of 800 and currently has 760 health. <- It worked!!!

class Trainer:
    def __init__(self, t_name, t_pokemon, potions):
        self.t_name = t_name
        self.t_pokemon = t_pokemon
        self.potions = potions
    def __repr__(self):
        return "Trainer " + self.t_name + " has the pokemon " + self.t_pokemon + " and " + str(self.potions) + " potions."

erica = Trainer("Erica", "klefki", 2)
# print(erica)
# Trainer Erica has the pokemon klefki and 2 potions.