"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();
  const validLocales = ["american-to-british", "british-to-american"];

  app.route("/api/translate").post((req, res) => {
    // setup data
    let { text, locale } = req.body;

    const regex = /^\s*$/;
    const str = req.body.text;
    const isBlankOrWhiteSpace = regex.test(str);
    if (isBlankOrWhiteSpace) {
      return res.json({ error: "No text to translate" });
    }
    if (!text || !locale) {
      return res.json({ error: "Required field(s) missing" });
    }
    console.log(text);
    text = text.replace(/\s+/g, " ").trim().toLowerCase();

    // error responses

    if (!validLocales.includes(locale)) {
      return res.json({ error: "Invalid value for locale field" });
    }

    // switch for translation type
    switch (locale) {
      case "american-to-british":
        {
          let translated = translator.britishOutput(text);
          if (!translated) {
            return res.json({
              text: text,
              translation: "Everyting looks good to me!",
            });
          }
          return res.json({ text, translation: translated });
        }
        break;
      case "british-to-american": {
        let translated = translator.americanOutput(text);
        if (!translated) {
          return res.json({
            text: text,
            translation: "Everyting looks good to me!",
          });
        }
        return res.json({ text, translation: translated });
      }
    }
  });
};
