import java.util.Random;

class DnDCharacter {
    private int _strength;
    private int _dexterity;
    private int _constitution;
    private int _intelligence;
    private int _wisdom;
    private int _charisma;
    private Random random = new Random();

    int ability() {
        return random.ints(1, 6).limit(4).sorted().skip(1).sum();
    }

    int modifier(int input) {
        return (int) Math.floor((input - 10) / 2.0);
    }

    int getStrength() {
        if (_strength == 0) {
            _strength = ability();
        }

        return _strength;
    }

    int getDexterity() {
        if (_dexterity == 0) {
            _dexterity = ability();
        }

        return _dexterity;
    }

    int getConstitution() {
        if (_constitution == 0) {
            _constitution = ability();
        }

        return _constitution;
    }

    int getIntelligence() {
        if (_intelligence == 0) {
            _intelligence = ability();
        }

        return _intelligence;
    }

    int getWisdom() {
        if (_wisdom == 0) {
            _wisdom = ability();
        }

        return _wisdom;
    }

    int getCharisma() {
        if (_charisma == 0) {
            _charisma = ability();
        }

        return _charisma;
    }

    int getHitpoints() {
        return 10 + modifier(getConstitution());
    }

}
