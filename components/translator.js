const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  transListBuilder() {
    let transList = [];
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
          transList.push([obj[key], key]);
        } else {
          transList.push([key, obj[key]]);
        }
      });
    }
    return transList;
  }

  britishOutput(text) {
    // words to translate
    let transArr = this.transListBuilder();
    // time change
    text = text.replace(/(\d+):(\d+)/, '<span class="highlight">$1.$2</span>');

    // translator
    for (let i = 0; i < transArr.length; i++) {
      let [amer, brit] = transArr[i];
      let dotPattern = /\w+\./;
      // title changer needed cause amer will have a "."
      if (dotPattern.test(amer)) {
        text = text.replace(
          amer,
          '<span class="highlight">' + brit + "</span>"
        );
        // translator \\b to match standalone word
      } else {
        let regex = new RegExp("\\b" + amer + "\\b", "g");
        text = text.replace(
          regex,
          '<span class="highlight">' + brit + "</span>"
        );
      }
    }
    // solution return
    return text;
  }
  americanOutput(text) {
    // words to translate
    let transArr = this.transListBuilder();
    // time changer
    text = text.replace(/(\d+)\.(\d+)/, '<span class="highlight">$1:$2</span>');

    // translator
    for (let i = 0; i < transArr.length; i++) {
      let [amer, brit] = transArr[i];
      let regex = new RegExp("\\b" + brit + "\\b", "g");
      text = text.replace(regex, '<span class="highlight">' + amer + "</span>");
    }
    // solution return
    return text;
  }
}

module.exports = Translator;
