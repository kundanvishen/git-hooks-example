// Method returns true if a vowel exists in the input string. Returns false otherwise.
/* jshint esversion:6 */
String.prototype.hasVowels = function hasVowels() {
    const vowels = new RegExp('[aeiou]', 'i');
    return vowels.test(this);
};