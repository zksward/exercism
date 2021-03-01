import java.util.Map;
import static java.util.Map.entry;
import java.util.stream.Collectors;

class RnaTranscription {

    private Map<String, String> dnaToRna = Map.ofEntries(entry("G", "C"), entry("C", "G"), entry("T", "A"), entry("A", "U"));

    String transcribe(String dnaStrand) {
        return dnaStrand.chars().mapToObj(nucleotide -> {
            return dnaToRna.get(Character.toString(nucleotide));
        }).collect(Collectors.joining(""));
    }

}
