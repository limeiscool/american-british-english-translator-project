const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
let translator = new Translator();

suite("Unit Tests", () => {
  test("Translate 'Mangoes are my favorite fruit.' to British English", (done) => {
    let text = "Mangoes are my favorite fruit.";
    let translated = translator.britishOutput(text);
    assert.equal(
      translated,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
    done();
  });

  test("Translate 'I ate yogurt for breakfast.' to British English", (done) => {
    let text = "I ate yogurt for breakfast.";
    let translated = translator.britishOutput(text);
    assert.equal(
      translated,
      'I ate <span class="highlight">yoghurt</span> for <span class="highlight">brekkie</span>.'
    );
    done();
  });

  test("Translate We had a party at my friend's condo. to British English", (done) => {
    let text = "We had a party at my friend's condo.";
    let translated = translator.britishOutput(text);
    assert.equal(
      translated,
      `We had a party at my friend's <span class="highlight">flat</span>.`
    );
    done();
  });

  test("Translate 'Can you toss this in the trashcan for me?' to British English", (done) => {
    let text = "Can you toss this in the trashcan for me?";
    let translated = translator.britishOutput(text);
    assert.equal(
      translated,
      'Can you toss this in the <span class="highlight">bin</span> for me?'
    );
    done();
  });
});
