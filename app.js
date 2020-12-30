const mathLibrary = require("./lib/math");
const quotesLibrary = require("./lib/quotes/index");

let application = {};

application.config = {
   timeBetweenQuotes: 1000,
};

application.printAQuote = function printAQuote() {
   const allQuotes = quotesLibrary.allQuotes();
   const numberOfQuotes = allQuotes.length;
   const randomNumbers = mathLibrary.getRandomNumber(1, numberOfQuotes);
   const selectedQuotes = allQuotes[randomNumbers - 1];
   console.log(selectedQuotes);
};

application.indefiniteLoop = function indefiniteLoop() {
   setInterval(application.printAQuote, application.config.timeBetweenQuotes);
};

application.indefiniteLoop();
