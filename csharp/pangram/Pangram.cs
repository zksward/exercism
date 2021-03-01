using System;
using System.Linq;

public static class Pangram
{
    static char[] alphabet = {'a', 'b', 'c', 'd', 'e', 'f', 'g',
                              'h', 'i', 'j', 'k', 'l', 'm', 'n',
                              'o', 'p', 'q', 'r', 's', 't', 'u',
                              'v', 'w', 'x', 'y', 'z' };
    public static bool IsPangram(string input)
    {   
        if (String.IsNullOrEmpty(input)) {
            return false;
        }
        
        string lowerInput = input.ToLowerInvariant();
        return alphabet.All(letter => lowerInput.Contains(letter));
    }
}
