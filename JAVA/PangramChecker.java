package JAVA;
public class PangramChecker {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog"; // Change this sentence
        boolean isPangram = isPangram(input);
        
        if (isPangram) {
            System.out.println("The Sentence \"" + input +"\" is a pangram.");
        } else {
            System.out.println("The Sentence \"" + input +"\" is not a pangram.");
        }
    }

    public static boolean isPangram(String input) { 
        input = input.replaceAll(" ", "").toLowerCase();

        boolean[] alphabet = new boolean[26];

        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);
            if (Character.isLetter(c)) {
                alphabet[c - 'a'] = true;
            }
        }
   
        for (boolean letterPresent : alphabet) {
            if (!letterPresent) {
                return false;
            }
        }

        return true;
    }
}
