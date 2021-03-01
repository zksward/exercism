class Darts {
    private double distance;

    Darts(double x, double y) {
        this.distance = Math.sqrt(x * x + y * y);
    }

    int score() {
        if (distance > 10) {
            return 0;
        }

        if (distance <= 1) {
            return 10;
        }

        if (distance <= 5) {
            return 5;
        }

        return 1;
    }

}
