const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  transListBuilder() {
    let List = {
      transList: [],
      american: [],
      british: [],
    };

    let objList = [
      americanToBritishTitles,
      americanOnly,
      americanToBritishSpelling,
      britishOnly,
    ];
    for (let i = 0; i < objList.length; i++) {
      let obj = objList[i];
      Object.keys(obj).forEach((key) => {
        if (obj === britishOnly) {
          List.transList.push([obj[key], key]);
          List.american.push(obj[key]);
          List.british.push(key);
        } else {
          List.transList.push([key, obj[key]]);
          List.american.push(key);
          List.british.push(obj[key]);
        }
      });
    }
    return List;
  }
  // cant search for double words need to reverse the search meathod
  needsTranslation(text, locale) {
    let textCopy = text.slice().toLowerCase();
    textCopy[textCopy.length - 1] === "."
      ? (textCopy = textCopy.slice(0, -1))
      : null;
    let List = this.transListBuilder();
    switch (locale) {
      case "americanInput":
        {
          let amerList = List.american;
          let regex = new RegExp(/(\d+):(\d+)/, "g");
          for (let i = 0; i < amerList.length; i++) {
            if (textCopy.match(regex)) {
              return true;
            }
            if (textCopy.includes(amerList[i])) {
              return true;
            }
          }
          return false;
        }
        break;
      case "britishInput": {
        let britList = List.british;
        let regex = new RegExp(/(\d+)\.(\d+)/, "g");
        for (let i = 0; i < britList.length; i++) {
          if (textCopy.match(regex)) {
            return true;
          }
          if (textCopy.includes(britList[i])) {
            return true;
          }
        }
        return false;
      }
    }
  }

  britishOutput(text) {
    let translationNeeded = this.needsTranslation(text, "americanInput");
    if (!translationNeeded) {
      return false;
    }
    // words to translate
    let transArr = this.transListBuilder().transList;
    // time change
    text = text.replace(/(\d+):(\d+)/, '<span class="highlight">$1.$2</span>');

    // translator
    for (let i = 0; i < transArr.length; i++) {
      let [amer, brit] = transArr[i];
      // title changer needed cause amer will have a "."
      if (amer.endsWith(".")) {
        let regex = new RegExp(amer, "ig");
        text = text.replace(
          regex,
          '<span class="highlight">' +
            brit[0].toUpperCase() +
            brit.slice(1) +
            "</span>"
        );
        // translator \\b to match standalone word
      } else {
        let regex = new RegExp("\\b" + amer + "(?=\\b|\\.)", "ig");
        let startStr = amer[0].toUpperCase() + amer.slice(1);
        if (text.startsWith(startStr)) {
          text = text.replace(
            regex,
            '<span class="highlight">' +
              brit[0].toUpperCase() +
              brit.slice(1) +
              "</span>"
          );
        }
        text = text.replace(
          regex,
          '<span class="highlight">' + brit + "</span>"
        );
      }
    }
    text = text[0].toUpperCase() + text.slice(1);
    // solution return
    return text;
  }
  americanOutput(text) {
    let translationNeeded = this.needsTranslation(text, "britishInput");
    if (!translationNeeded) {
      return false;
    }
    // words to translate
    let transArr = this.transListBuilder().transList;
    // time changer
    text = text.replace(/(\d+)\.(\d+)/, '<span class="highlight">$1:$2</span>');

    // translator
    for (let i = 0; i < transArr.length; i++) {
      let [amer, brit] = transArr[i];

      let regex = new RegExp("\\b" + brit + "\\b", "ig");
      if (amer.endsWith(".")) {
        text = text.replace(
          regex,
          '<span class="highlight">' +
            amer[0].toUpperCase() +
            amer.slice(1) +
            "</span>"
        );
      } else {
        let startStr = brit[0].toUpperCase() + brit.slice(1);
        if (text.startsWith(startStr)) {
          text = text.replace(
            regex,
            '<span class="highlight">' +
              amer[0].toUpperCase() +
              amer.slice(1) +
              "</span>"
          );
        } else {
          if (brit === "chip shop" && text.includes("fish-and-chip shop")) {
            text = text;
          } else {
            text = text.replace(
              regex,
              '<span class="highlight">' + amer + "</span>"
            );
          }
        }
      }
    }
    text = text[0].toUpperCase() + text.slice(1);
    // solution return
    return text;
  }
}

module.exports = Translator;
