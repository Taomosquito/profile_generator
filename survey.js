const readline = require("readline");
const profile = {
  answer1: "",
  answer2: "",
  answer3: "",
  answer4: "",
  answer5: "",
  answer6: "",
  answer7: "",
  paragraph: ""
};



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer1) => {
  profile.answer1 = answer1;
  rl.question("What's an activity you like doing? ", (answer2) => {
    profile.answer2 = answer2;
    rl.question("What do you listen to while doing that? ", (answer3) => {
      profile.answer3 = answer3;
      rl.question("Which meal is your favorite (eg: dinner, bunch etc.) ", (answer4) => {
        profile.answer4 = answer4;
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          profile.answer5 = answer5;
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            profile.answer6 = answer6;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
              profile.answer7 = answer7;
              rl.close();

              profile.paragraph +=
                `name = ${profile.answer1}
                favourite activity = ${profile.answer2}
                favourite music = ${profile.answer3}
                favourite meal = ${profile.answer4}
                favourite food = ${profile.answer5}
                favaourite sport = ${profile.answer6}
                amazing skill = ${profile.answer7}`;

              console.log(profile.paragraph);
            });
          });
        });
      });
    });
  });
});