"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();
  const validLocales = ["american-to-british", "british-to-american"];

  app.route("/api/translate").post((req, res) => {
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
    if (!validLocales.includes(locale)) {
      return res.json({ error: "Invalid value for locale field" });
    }
  });
};
