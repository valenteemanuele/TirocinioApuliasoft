function countWords(inputWords) {

    return inputWords.reduce(function (count, string) {
        count[string]= ++count[string] || 1;
        return count;
    },{})
  }


  module.exports = countWords
