const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");

suite("Functional Tests", () => {
  suite("Integration tests with chai-http", () => {
    test("1. Translation with text and locale fields: POST request to /api/translate", (done) => {
      const text = "Mangoes are my favorite fruit.";
      const locale = "american-to-british";
      chai
        .request(server)
        .post("/api/translate")
        .send({ text: text, locale: locale })
        .end(function (err, res) {
          const { translation } = res.body;
          assert.equal(
            translation,
            'Mangoes are my <span class="highlight">favourite</span> fruit.'
          );
          done();
        });
    });
    test("2. Translation with text and invalid locale field: POST request to /api/translate", (done) => {
      const text = "Mangoes are my favorite fruit.";
      const locale = "test";
      chai
        .request(server)
        .post("/api/translate")
        .send({ text: text, locale: locale })
        .end(function (err, res) {
          const { error } = res.body;
          // console.log(("error", error));
          assert.equal(error, "Invalid value for locale field");
          done();
        });
    });
    test("3. Translation with missing text field: POST request to /api/translate", (done) => {
      const locale = "american-to-british";
      chai
        .request(server)
        .post("/api/translate")
        .send({ locale: locale })
        .end(function (err, res) {
          const { error } = res.body;
          assert.equal(error, "Required field(s) missing");
          done();
        });
    });
    test("4. Translation with missing locale field: POST request to /api/translate", (done) => {
      const text = "Mangoes are my favorite fruit.";
      chai
        .request(server)
        .post("/api/translate")
        .send({ text: text })
        .end(function (err, res) {
          const { error } = res.body;
          assert.equal(error, "Required field(s) missing");
          done();
        });
    });
    test("5. Translation with empty text: POST request to /api/translate", (done) => {
      const text = "";
      const locale = "american-to-british";
      chai
        .request(server)
        .post("/api/translate")
        .send({ text: text, locale: locale })
        .end(function (err, res) {
          const { error } = res.body;
          assert.equal(error, 'No text to translate');
          done();
        });
    });
    test("6. Translation with text that needs no translation: POST request to /api/translate", (done) => {
      const text = "Mangoes are my favorite fruit.";
      const locale = "british-to-american";
      chai
        .request(server)
        .post("/api/translate")
        .send({ text: text, locale: locale })
        .end(function (err, res) {
          const { translation } = res.body;
          assert.equal(translation, "Everything looks good to me!");
          done();
        });
    });
  });
});