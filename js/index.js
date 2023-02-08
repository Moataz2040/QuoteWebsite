var quote1 = {
  auther: "― Oscar Wilde",
  paragraph: "“Be yourself; everyone else is already taken.”",
};
var quote2 = {
  auther: "― Albert Einstein",
  paragraph:
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
};
var quote3 = {
  auther: "― Frank Zappa",
  paragraph: "“So many books, so little time.”",
};
var quote4 = {
  auther: "― Bernard M. Baruch",
  paragraph:
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
};
var quote5 = {
  auther: "― Robert Frost",
  paragraph:
    "“In three words I can sum up everything I've learned about life: it goes on.”",
};
var quote6 = {
  auther: "― Pablo Picasso",
  paragraph: "“Everything you can imagine is real.”",
};
var quote7 = {
  auther: "― Dr. Seuss",
  paragraph:
    "“Sometimes the questions are complicated and the answers are simple.”",
};
var quote8 = {
  auther: "― George Bernard Shaw",
  paragraph:
    "“Life isn't about finding yourself. Life is about creating yourself.”",
};
var quote9 = {
  auther: "― John Green, The Fault in Our Stars",
  paragraph: "“Some infinities are bigger than other infinities.”",
};
var quote10 = {
  auther: "― Khaled Hosseini",
  paragraph: "“But better to get hurt by the truth than comforted with a lie.”",
};
var quoteList = [
  quote1,
  quote2,
  quote3,
  quote4,
  quote5,
  quote6,
  quote7,
  quote8,
  quote9,
  quote10,
];
function randomQuote() {
  var quoteParagraph = document.getElementById("quoteParagraph");
  var quoteAuther = document.getElementById("quoteAuther");
  var x = Math.floor(Math.random() * 10);
  quoteParagraph.innerText = `${quoteList[x].paragraph}`;
  quoteAuther.innerText = `${quoteList[x].auther}`;
}
