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

  test("Translate 'The parking lot was full.' to British English", (done) => {
    let text = "The parking lot was full.";
    let translated = translator.britishOutput(text);
    let expect = 'The <span class="highlight">car park</span> was full.';
    assert.equal(translated, expect);
    done();
  });

  test("Translate 'Like a high tech Rube Goldberg machine.' to British English", (done) => {
    let text = "Like a high tech Rube Goldberg machine.";
    let translated = translator.britishOutput(text);
    let expect =
      'Like a high tech <span class="highlight">Heath Robinson device</span>.';
    assert.equal(translated, expect);
    done();
  });

  test("Translate 'To play hooky means to skip class or work.' to British English", (done) => {
    let text = "To play hooky means to skip class or work.";
    let translated = translator.britishOutput(text);
    let expect =
      'To <span class="highlight">bunk off</span> means to skip class or work.';
    assert.equal(translated, expect);
    done();
  });

  test("Translate 'No Mr. Bond, I expect you to die.' to British Englis", (done) => {
    let text = "No Mr. Bond, I expect you to die.";
    let translated = translator.britishOutput(text);
    let expect =
      'No <span class="highlight">Mr</span> Bond, I expect you to die.';
    assert.equal(translated, expect);
    done();
  });

  test("Translate 'Dr. Grosh will see you now.' to British English", (done) => {
    let text = "Dr. Grosh will see you now.";
    let translated = translator.britishOutput(text);
    let ex = '<span class="highlight">Dr</span> Grosh will see you now.';
    assert.equal(translated, ex);
    done();
  });

  test("Translate 'Lunch is at 12:15 today.' to British English", (done) => {
    let text = "Lunch is at 12:15 today.";
    let translated = translator.britishOutput(text);
    let ex = 'Lunch is at <span class="highlight">12.15</span> today.';
    assert.equal(translated, ex);
    done();
  });

  test("Translate 'We watched the footie match for a while.' to American English", (done) => {
    let text = "We watched the footie match for a while.";
    let translated = translator.americanOutput(text);
    let ex =
      'We watched the <span class="highlight">soccer</span> match for a while.';
    assert.equal(translated, ex);
    done();
  });

  test("Translate 'Paracetamol takes up to an hour to work.' to American English", (done) => {
    let text = "Paracetamol takes up to an hour to work.";
    let translated = translator.americanOutput(text);
    let ex =
      '<span class="highlight">Acetaminophen</span> takes up to an hour to work.';
    assert.equal(translated, ex);
    done();
  });

  test("Translate 'First, caramelise the onions.' to American English", (done) => {
    let text = "First, caramelise the onions.";
    let translated = translator.americanOutput(text);
    let ex = 'First, <span class="highlight">caramelize</span> the onions.';
    assert.equal(translated, ex);
    done();
  });

  test("Translate 'I spent the bank holiday at the funfair.' to American English", (done) => {
    let text = "I spent the bank holiday at the funfair.";
    let translated = translator.americanOutput(text);
    let ex =
      'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
    assert.equal(translated, ex);
    done();
  });

  test("Translate 'I had a bicky then went to the chippy.' to American English", (done) => {
    let text = "I had a bicky then went to the chippy.";
    let translated = translator.americanOutput(text);
    let ex =
      'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
    assert.equal(translated, ex);
    done();
  });

  // test("Translate 'I've just got bits and bobs in my bum bag.' to American English", (done) => {
  //   let text = "I've just got bits and bobs in my bum bag.";
  //   let translated = translator.americanOutput(text);
  //   assert.equal(translated, "");
  //   done();
  // });

  // test("Translate 'The car boot sale at Boxted Airfield was called off.' to American English", (done) => {
  //   let text = "The car boot sale at Boxted Airfield was called off.";
  //   let translated = translator.americanOutput(text);
  //   assert.equal(translated, "");
  //   done();
  // });

  // test("Translate 'Have you met Mrs Kalyani?' to American English", (done) => {
  //   let text = "Have you met Mrs Kalyani?";
  //   let translated = translator.americanOutput(text);
  //   assert.equal(translated, "");
  //   done();
  // });

  // test("Translate 'Prof Joyner of King's College, London.' to American English", (done) => {
  //   let text = "Prof Joyner of King's College, London.";
  //   let translated = translator.americanOutput(text);
  //   assert.equal(translated, "");
  //   done();
  // });

  // test("Translate 'Tea time is usually around 4 or 4.30.' to American English", (done) => {
  //   let text = "Tea time is usually around 4 or 4.30.";
  //   let translated = translator.americanOutput(text);
  //   assert.equal(translated, "");
  //   done();
  // });

  // test("Highlight translation in 'Mangoes are my favorite fruit.'", (done) => {
  //   let text = "Mangoes are my favorite fruit.";

  //   let translated = translator.britishOutput(text);
  //   assert.equal(translated, "");
  //   done();
  // });

  // test("Highlight translation in 'I ate yogurt for breakfast.'", (done) => {
  //   let text = "I ate yogurt for breakfast.";

  //   let translated = translator.britishOutput(text);
  //   assert.equal(translated, "");
  //   done();
  // });

  // test("Highlight translation in 'We watched the footie match for a while.'", (done) => {
  //   let text = "We watched the footie match for a while.";
  //   let translated = translator.americanOutput(text);
  //   assert.equal(translated, "");
  //   done();
  // });

  // test("Highlight translation in 'Paracetamol takes up to an hour to work.'", (done) => {
  //   let text = "Paracetamol takes up to an hour to work.";
  //   let translated = translator.americanOutput(text);
  //   assert.equal(translated, "");
  //   done();
  // });
});
