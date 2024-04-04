"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();
  const validLocales = ["american-to-british", "british-to-american"];

  app.route("/api/translate").post((req, res) => {
    // setup data
    let { text, locale } = req.body;
    let copyText = text;
    const regex = /^\s*$/;
    const isBlankOrWhiteSpace = regex.test(copyText);
    if (isBlankOrWhiteSpace) {
      return res.json({ error: "No text to translate" });
    }
    if (!text || !locale) {
      return res.json({ error: "Required field(s) missing" });
    }
    copyText = copyText.replace(/\s+/g, " ").trim();

    // error responses

    if (!validLocales.includes(locale)) {
      return res.json({ error: "Invalid value for locale field" });
    }

    // switch for translation type
    switch (locale) {
      case "american-to-british":
        {
          let translated = translator.britishOutput(copyText);
          console.log(text);
          if (!translated) {
            return res.json({
              text: text,
              translation: "Everything looks good to me!",
            });
          }
          return res.json({ text: text, translation: translated });
        }
        break;
      case "british-to-american": {
        let translated = translator.americanOutput(copyText);
        console.log(text);
        if (!translated) {
          return res.json({
            text: text,
            translation: "Everything looks good to me!",
          });
        }
        return res.json({ text: text, translation: translated });
      }
    }
  });
};
