class Leap {

    boolean isLeapYear(int year) {
        if (year % 100 != 0) {
            if (year % 4 == 0) return true;
        }
        if (year % 400 == 0) return true;
        return false;
    }

}
