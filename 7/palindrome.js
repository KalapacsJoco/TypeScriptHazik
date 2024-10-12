function palindrome(text) {
    var cleanedText = text.toLowerCase().replace(/[^a-z]/g, '');
    return cleanedText === cleanedText.split('').reverse().join('');
}
console.log(palindrome('geza kekk az eg'));
