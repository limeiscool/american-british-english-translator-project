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

  test("Translate 'The parking lot was full.' to British English", (done) => {});

  test("Translate 'Like a high tech Rube Goldberg machine.' to British English", (done) => {});

  test("Translate 'To play hooky means to skip class or work.' to British English", (done) => {});

  test("Translate 'No Mr. Bond, I expect you to die.' to British Englis", (done) => {});

  test("Translate 'Dr. Grosh will see you now.' to British English", (done) => {});

  test("Translate 'Lunch is at 12:15 today.' to British English", (done) => {});

  test("Translate 'We watched the footie match for a while.' to American English", (done) => {});

  test("Translate 'Paracetamol takes up to an hour to work.' to American English", (done) => {});

  test("Translate 'First, caramelise the onions.' to American English", (done) => {});

  test("Translate 'I spent the bank holiday at the funfair.' to American English", (done) => {});

  test("Translate 'I had a bicky then went to the chippy.' to American English", (done) => {});

  test("Translate 'I've just got bits and bobs in my bum bag.' to American English", (done) => {});

  test("Translate 'The car boot sale at Boxted Airfield was called off.' to American English", (done) => {});

  test("Translate 'Have you met Mrs Kalyani?' to American English", (done) => {});

  test("Translate 'Prof Joyner of King's College, London.' to American English", (done) => {});

  test("Translate 'Tea time is usually around 4 or 4.30.' to American English", (done) => {});

  test("Highlight translation in 'Mangoes are my favorite fruit.'", (done) => {});

  test("Highlight translation in 'I ate yogurt for breakfast.'", (done) => {});

  test("Highlight translation in 'We watched the footie match for a while.'", (done) => {});

  test("Highlight translation in 'Paracetamol takes up to an hour to work.'", (done) => {});
});
