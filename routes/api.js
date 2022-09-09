"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    let translatedSentence;
    const { text, locale } = req.body;
    console.log("text:", text, 'type of text:', typeof(text), "locale:", locale);

    if(!text){
      if(text === undefined){
        res.json({ error: "Required field(s) missing" });
      }else  if(text === '' || text.length === 0){
        res.json({error: 'No text to translate'})
      }
    }else if(!locale){
        res.json({ error: "Required field(s) missing" });
    }else {
      if ( text && locale &&
        (text !== undefined || text !== null) &&
        (locale === "american-to-british" || locale === "british-to-american")
      )  {
          locale === "american-to-british"
            ? (translatedSentence = translator.translateAmericanToBritishSpelling(
                text, locale))
            : (translatedSentence = translator.translateBritishOnly(text, locale));
          res.json({text: text, translation: translatedSentence});
      }else if(locale !== "american-to-british" || locale !== "british-to-american"){
        res.json({error: 'Invalid value for locale field' })
      }
    }
  });
};
