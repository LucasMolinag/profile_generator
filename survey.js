const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = []

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  profile.push(answer)
  console.log(`\nThank you for sharing your name, ${answer}`);

  rl.question("\nWhat's an activity you like doing? ", (answer2) => {
    profile.push(answer2)
    console.log(`\nThank you for sharing your hobbie! Onto the next quesiton!`);

    rl.question("\nWhat do you listen to while doing that? ", (answer3) => {
      profile.push(answer3)
      console.log(`\nGood taste in music! Moving on...`);

      rl.question("\nWhich meal is your favourite? (eg: dinner, brunch, etc.) ", (answer4) => {
        profile.push(answer4)
        console.log(`\nAll are my favourite but I see your point... next question!`);

        rl.question("\nWhat's your favourite thing to eat for that meal? ", (answer5) => {
          profile.push(answer5)
          console.log(`\nEw... okay... next...`);

          rl.question("\nWhich sport is your absolute favourite? ", (answer6) => {
            profile.push(answer6)
            console.log(`\nGotta keep it moving!`);

            rl.question("\nWhat is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
              profile.push(answer7)
              console.log(`\nO.O that's a superpower alright. Superman who??`);
            
              rl.close();
            });
          });
        });
      });
    });
  });
});