import java.util.Arrays;

class ArmstrongNumbers {

    boolean isArmstrongNumber(int numberToCheck) {
        String numString = String.valueOf(numberToCheck);
        return Arrays.stream(numString.split("")).mapToInt(Integer::valueOf).reduce(0,
                (subtotal, num) -> subtotal + (int) Math.pow(num, numString.length())) == numberToCheck;
    }

}
