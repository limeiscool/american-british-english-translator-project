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

  needsTranslation(text, locale) {
    let List = this.transListBuilder();
    switch (locale) {
      case "americanInput":
        {
          let amerList = List.american;
          let textArr = text.split(" ");

          // test textArr to see if there is time to be changed
          const regex = /\b\d{1,2}:\d{2}\b/;
          const hasTime = regex.test(text)
          if (hasTime) {
            return true;
          }
          for (let i = 0; i < textArr.length; i++) {
            if (amerList.includes(textArr[i])) {
              return true;
            }
          }
          return false;
        }
        break;
      case "britishInput": {
        let britList = List.british;
        let textArr = text.split(" ");
        let regex = /\b\d{1,2}.\d{2}\b/;
        const hasTime = regex.test(text);
        if (hasTime) {
          return true;
        }
        for (let i = 0; i < textArr.length; i++) {
          if (britList.includes(textArr[i])) {
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
      let regex = new RegExp("\\b" + brit + "\\b", "g");
      text = text.replace(regex, '<span class="highlight">' + amer + "</span>");
    }
    // solution return
    return text;
  }
}

module.exports = Translator;
