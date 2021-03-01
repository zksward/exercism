import java.math.BigInteger;

class Grains {

    BigInteger grainsOnSquare(final int square) throws IllegalArgumentException {
        if (square <= 0 || square > 64) {
            throw new IllegalArgumentException("square must be between 1 and 64");
        }

        return BigInteger.valueOf(2).pow(square - 1);
    }

    BigInteger grainsOnBoard() {
        BigInteger grains = BigInteger.ZERO;
        for (int i = 0; i < 64; i++) {
            grains = grains.add(BigInteger.valueOf(2).pow(i));
        }
        return grains;
    }

}
