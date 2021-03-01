using System;
using System.Linq;

public static class Isogram
{
    public static bool IsIsogram(string word)
    {
        if (String.IsNullOrEmpty(word)) {
            return true;
        }
        char[] letters = Array.FindAll<char>(word.ToLowerInvariant().ToCharArray(), (c => char.IsLetter(c)));
        return letters.Count() == letters.Distinct().Count();
    }
}
