const chai = require("chai");
const assert = chai.assert;
const Translator = require("../components/translator.js");
const translator = new Translator();

suite("", function () {
  suite("Unit Tests", () => {
    test("1. Translate: Mangoes are my favorite fruit. to British English", () => {
      const text = "Mangoes are my favorite fruit.";
      const locale = "american-to-british";
      const translatedSentence = translator.translateAmericanToBritishSpelling(
        text,
        locale
      );
      assert.equal(
        translatedSentence,
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
      );
    });
    test("2. Translate: I ate yogurt for breakfast. to British English", () => {
      const text = "I ate yogurt for breakfast.";
      const locale = "american-to-british";
      const translation = translator.translateAmericanToBritishSpelling(
        text,
        locale
      );
      assert.equal(
        translation,
        'I ate <span class="highlight">yoghurt</span> for breakfast.'
      );
    });
    test("3. Translate: We had a party at my friend's condo. to British English", () => {
      const text = "We had a party at my friend's condo.";
      const locale = "american-to-british";
      const translation = translator.translateAmericanToBritishSpelling(
        text,
        locale
      );
      assert.equal(translation, "Everything looks good to me!");
    });
    test("4. Translate: Can you toss this in the trashcan for me? to British English", () => {
      const text = "Can you toss this in the trashcan for me?";
      const locale = "american-to-british";
      const translation = translator.translateAmericanToBritishSpelling(
        text,
        locale
      );
      assert.equal(
        translation,
        'Can you toss this in the <span class="highlight">bin</span> for me?'
      );
    });
    test("5. Translate: The parking lot was full. to British English", () => {
      const text = "The parking lot was full.";
      const locale = "american-to-british";
      const translation = translator.translateAmericanToBritishSpelling(
        text,
        locale
      );
      assert.equal(translation, "Everything looks good to me!");
    });
    test("6. Translate: Like a high tech Rube Goldberg machine. to British English", () => {
      const text = "Like a high tech Rube Goldberg machine.";
      const locale = "american-to-british";
      const translation = translator.translateAmericanToBritishSpelling(
        text,
        locale
      );
      assert.equal(translation, "Everything looks good to me!");
    });
    test("7. Translate: To play hooky means to skip class or work. to British English", () => {
      const text = "To play hooky means to skip class or work.";
      const locale = "american-to-british";
      const translation = translator.translateAmericanToBritishSpelling(
        text,
        locale
      );
      assert.equal(translation, "Everything looks good to me!");
    });
    test("8. Translate: No Mr. Bond, I expect you to die. to British English", () => {
      const text = "No Mr. Bond, I expect you to die.";
      const locale = "american-to-british";
      const translation = translator.translateAmericanToBritishSpelling(
        text,
        locale
      );
      assert.equal(
        translation,
        'No <span class="highlight">Mr</span> Bond, I expect you to die.'
      );
    });
    test("9. Translate: Dr. Grosh will see you now. to British English", () => {
      const text = "Dr. Grosh will see you now.";
      const locale = "american-to-british";
      const translation = translator.translateAmericanToBritishSpelling(
        text,
        locale
      );
      assert.equal(
        translation,
        '<span class="highlight">Dr</span> Grosh will see you now.'
      );
    });
    test("10. Translate: Lunch is at 12:15 today. to British English.", () => {
      const text = "Lunch is at 12:15 today.";
      const locale = "american-to-british";
      const translation = translator.translateAmericanToBritishSpelling(
        text,
        locale
      );
      assert.equal(translation, 'Lunch is at <span class="highlight">12.15</span> today.');
    });
    test("11. Translate: We watched the footie match for a while. to American English.", () => {
      const text = "We watched the footie match for a while.";
      const locale = "british-to-american";
      const translation = translator.translateBritishOnly(text, locale);
      assert.equal(
        translation,
        'We watched the <span class="highlight">soccer</span> match for a while.'
      );
    });
    test("12. Translate: Paracetamol takes up to an hour to work. to American English.", () => {
      const text = "Paracetamol takes up to an hour to work.";
      const locale = "british-to-american";
      const translation = translator.translateBritishOnly(text, locale);
      assert.equal(
        translation,
        '<span class="highlight">Tylenol</span> takes up to an hour to work.'
      );
    });
    test("13. Translate: First, caramelise the onions. to American English.", () => {
      const text = "First, caramelise the onions.";
      const locale = "british-to-american";
      const translation = translator.translateBritishOnly(text, locale);
      assert.equal(translation, "Everything looks good to me!");
    });
    test("14. Translate: I spent the bank holiday at the funfair. to American English.", () => {
      const text = "I spent the bank holiday at the funfair.";
      const locale = "british-to-american";
      const translation = translator.translateBritishOnly(text, locale);
      assert.equal(translation, "Everything looks good to me!");
    });
    test("15. Translate: I had a bicky then went to the chippy. to American English.", () => {
      const text = "I had a bicky then went to the chippy.";
      const locale = "british-to-american";
      const translation = translator.translateBritishOnly(text, locale);
      assert.equal(
        translation,
        'I had a <span class="highlight">cookie</span> then went to the chippy.'
      );
    });
    test("16. Translate: I've just got bits and bobs in my bum bag. to American English.", () => {
      const text = "I've just got bits and bobs in my bum bag.";
      const locale = "british-to-american";
      const translation = translator.translateBritishOnly(text, locale);
      assert.equal(translation, "Everything looks good to me!");
    });
    test("17. Translate: The car boot sale at Boxted Airfield was called off. to American English.", () => {
      const text = "The car boot sale at Boxted Airfield was called off.";
      const locale = "british-to-american";
      const translation = translator.translateBritishOnly(text, locale);
      assert.equal(
        translation,
        "Everything looks good to me!"
      );
    });
    test("18. Translate: Have you met Mrs Kalyani? to American English.", () => {
      const text = "Have you met Mrs Kalyani?";
      const locale = "british-to-american";
      const translation = translator.translateBritishOnly(text, locale);
      assert.equal(
        translation,
        'Have you met <span class="highlight">mrs.</span> Kalyani?'
      );
    });
    test("19. Translate: Prof Joyner of King's College, London. to American English.", () => {
      const text = "Prof Joyner of King's College, London.";
      const locale = "british-to-american";
      const translation = translator.translateBritishOnly(text, locale);
      assert.equal(
        translation,
        '<span class="highlight">prof.</span> Joyner of King\'s College, London.'
      );
    });
    test("20. Translate: Tea time is usually around 4 or 4.30. to American English.", () => {
      const text = "Tea time is usually around 4 or 4.30.";
      const locale = "british-to-american";
      const translation = translator.translateBritishOnly(text, locale);
      assert.equal(translation, 'Tea time is usually around 4 or <span class="highlight">4:30.</span>');
    });
    test("21. Highlight translation in Mangoes are my favorite fruit.", () =>{
      const text = "Mangoes are my favorite fruit.";
      const locale = "american-to-british";
      const translatedSentence = translator.translateAmericanToBritishSpelling(
        text,
        locale
      );
      assert.equal(
        translatedSentence,
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
      );
    });
    test("22. Highlight translation in I ate yogurt for breakfast.", ()=>{
      const text = "I ate yogurt for breakfast.";
      const locale = "american-to-british";
      const translation = translator.translateAmericanToBritishSpelling(
        text,
        locale
      );
      assert.equal(
        translation,
        'I ate <span class="highlight">yoghurt</span> for breakfast.'
      );
    });
    test("23. Highlight translation in We watched the footie match for a while.", ()=>{
      const text = "We watched the footie match for a while.";
      const locale = "british-to-american";
      const translation = translator.translateBritishOnly(text, locale);
      assert.equal(
        translation,
        'We watched the <span class="highlight">soccer</span> match for a while.'
      );
    });
    test("24. Highlight translation in Paracetamol takes up to an hour to work.", () =>{
      const text = "Paracetamol takes up to an hour to work.";
      const locale = "british-to-american";
      const translation = translator.translateBritishOnly(text, locale);
      assert.equal(
        translation,
        '<span class="highlight">Tylenol</span> takes up to an hour to work.'
      );
    });
  });
});
