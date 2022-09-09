const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishToAmericanTitles = require("./british-to-american-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  translateAmericanOnly(text, locale) {
    return americanOnly;
  }

  translateAmericanToBritishSpelling(text, locale) {
    let texts = text.split(" ");

    if (locale === "american-to-british") {
      let americanToBritishTranslation = "";
      let word;
      let translatedTerm;

      for (let i = 0; i < texts.length; i++) {
        word = texts[i];
        var translatedWord =
          americanToBritishSpelling[word.toLowerCase()] ||
          americanOnly[word.toLowerCase()] ||
          americanToBritishTitles[word.toLowerCase()];

        if (translatedWord && /^\D(\D+)\.$/g.test(word)) {
          var capitalizedLetterInTranslatedWord = translatedWord.replace(
            translatedWord[0],
            translatedWord[0].toUpperCase()
          );

          translatedTerm = capitalizedLetterInTranslatedWord;
          americanToBritishTranslation =
            americanToBritishTranslation +
            capitalizedLetterInTranslatedWord +
            " ";
        } else if (translatedWord) {
          americanToBritishTranslation =
            americanToBritishTranslation + translatedWord + " ";

          translatedTerm = translatedWord;
        } else {
          
          if(word.match(/\d\d:\d\d/)){
            translatedTerm = word.replace(':', '\.');
             americanToBritishTranslation =
            americanToBritishTranslation + translatedTerm + " ";
          }else{
          americanToBritishTranslation =
            americanToBritishTranslation + word + " ";
          }

        }
      }

      let translatedSentence = americanToBritishTranslation.trim();

      if(translatedTerm){
        return translatedSentence.replace(
        translatedTerm, '<span class="highlight">' + translatedTerm + "</span>"
      );
      }else{
        return "Everything looks good to me!"
      }
    }
  }

  translateToBritishTitles(text, locale) {
    return americanToBritishTitles;
  }

  translateBritishOnly(text, locale) {
    let texts = text.split(" ");

    if (locale === "british-to-american") {
      let britishOnlyTranslation = "";
      let word;
      let translatedTerm;

      for (let i = 0; i < texts.length; i++) {
        word = texts[i];
        var translatedWord =
          britishOnly[word.toLowerCase()] ||
          britishToAmericanTitles[word.toLowerCase()];

        if (translatedWord && /^\D(\D+)\.$/g.test(word)) {
          var capitalizedLetterInTranslatedWord = translatedWord.replace(
            translatedWord[0],
            translatedWord[0].toUpperCase()
          );

          translatedTerm = capitalizedLetterInTranslatedWord;
          britishOnlyTranslation =
            britishOnlyTranslation + capitalizedLetterInTranslatedWord + " ";
        } else if (translatedWord) {
          britishOnlyTranslation =
            britishOnlyTranslation + translatedWord + " ";

          translatedTerm = translatedWord;
        } else {
          if(word.match(/\d+.\d\d/)){
            translatedTerm = word.replace('\.', ':');
             britishOnlyTranslation =
             britishOnlyTranslation + translatedTerm + " ";
          }else{
            britishOnlyTranslation = britishOnlyTranslation + word + " ";
          }
        }
      }

      let translatedSentence = britishOnlyTranslation.trim();
      if(translatedTerm){
        return translatedSentence.replace(
        translatedTerm, '<span class="highlight">' + translatedTerm + "</span>"
      );
      }else{
        return "Everything looks good to me!"
      }
    }
  }
}

module.exports = Translator;
