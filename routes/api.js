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
    text = text.replace(/\s+/g, " ").trim();

    // error responses
    if (isBlankOrWhiteSpace) {
      return res.json({ error: "No text to translate" });
    }
    if (!text || !locale) {
      return res.json({ error: "Required field(s) missing" });
    }
    if (!validLocales.includes(locale)) {
      return res.json({ error: "Invalid value for locale field" });
    }

    // switch for translation type
    switch (locale) {
      case "american-to-british":
        {
          let translated = translator.britishOutput(text);
          return res.json({ translation: translated });
        }
        break;
      case "british-to-american": {
        let translated = translator.americanOutput(text);
        return res.json({ translation: translated });
      }
    }
  });
};
