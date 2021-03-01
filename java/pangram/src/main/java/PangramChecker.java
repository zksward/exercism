import java.util.Set;
import java.util.stream.Collectors;

public class PangramChecker {

    public boolean isPangram(String input) {
        if (input == null || input.length() < 26) {
            return false;
        }

        String strUpper = input.toUpperCase();

        Set<Character> filteredCharStream = strUpper.chars()
            .filter(item -> ((item >= 'A' && item <= 'Z')))
            .mapToObj(c -> (char) c).collect(Collectors.toSet());

        return filteredCharStream.size() == 26;
    }

}
