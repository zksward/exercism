import java.util.Map;

class ResistorColorDuo {
    private Map<String, Integer> resistorColors = Map.ofEntries(
        Map.entry("black", 0),
        Map.entry("brown", 1),
        Map.entry("red", 2),
        Map.entry("orange", 3),
        Map.entry("yellow", 4),
        Map.entry("green", 5),
        Map.entry("blue", 6),
        Map.entry("violet", 7),
        Map.entry("grey", 8),
        Map.entry("white", 9)
    );

    int colorCode(String color) {
        return resistorColors.get(color.toLowerCase());
    }
    
    int value(String[] colors) {
        if (colors.length < 2) return -1;

        return (colorCode(colors[0]) * 10) + colorCode(colors[1]);
    }
}
