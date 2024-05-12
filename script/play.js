const quotes = [
  {
    quote: "What's the most memorable place you've ever traveled to and why? (Какое место вам больше всего запомнилось из поездок, и почему?)",
  },
  {
    quote: "Do you prefer to travel alone or with companions? Why? (Вы предпочитаете путешествовать в одиночку или с компанией? Почему?)",
  },
  {
    quote: "What's your favorite movie of all time, and what do you love about it? (Какой ваш любимый фильм всех времен, и что вам в нем нравится?)",
  },
  {
    quote: "If you could have dinner with any historical figure, who would it be and why? (Если бы вы могли поужинать с любой исторической личностью, кто бы это был и почему?)",
  },
  {
    quote: "What's your favorite cuisine to cook, and what dish do you make best? (Какая ваша любимая кухня для приготовления, и какое блюдо у вас лучше всего получается?)",
  },
  {
    quote: "If you could live in any fictional world from a book or movie, where would it be and why? (Если бы вы могли жить в любом вымышленном мире из книги или фильма, где бы это было и почему?)",
  },
  {
    quote: "What's one hobby or activity you've always wanted to try but haven't yet? (Какое хобби или занятие вы всегда хотели попробовать, но еще не пробовали?)",
  },
  {
    quote: "What's the most interesting book you've read recently, and what did you learn from it? (Какая самая интересная книга, которую вы недавно прочитали, и что вы из нее узнали?)",
  },
  {
    quote: "What's your go-to comfort food when you're feeling down? (Какая ваша самая любимая еда, когда вам грустно?)",
  },
  {
    quote: "If you could have any superpower, what would it be and how would you use it? (Если бы у вас могла быть любая сверхспособность, какая бы это была и как бы вы ее использовали?)",
  },
  {
    quote: "What's your favorite childhood memory, and why does it stand out to you? (Какое ваше любимое детское воспоминание, и почему оно вам запомнилось?)",
  },
  {
    quote: "If you could visit any period in history, when would it be and what would you do? (Если бы вы могли посетить любой период в истории, когда бы это было и что бы вы сделали?)",
  },
  {
    quote: "What's the best piece of advice you've ever received, and who gave it to you? (Какой лучший совет, который вы когда-либо получали, и кто дал вам его?)",
  },
  {
    quote: "What's your favorite way to relax and unwind after a long day? (Какой ваш любимый способ расслабиться и отдохнуть после долгого дня?)",
  },
  {
    quote: "If you could be fluent in any language instantly, which language would you choose and why? (Если бы вы могли моментально владеть любым языком, какой бы язык вы выбрали и почему?)",
  },
  {
    quote: "What's one thing you've always wanted to learn to cook, but haven't tried yet? (Что-то, что вы всегда хотели научиться готовить, но еще не пробовали?)",
  },
  // Tambahkan pertanyaan tambahan di sini...
];

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");

btn.addEventListener("click", function () {
  if (quotes.length === 0) {
    quote.innerHTML = "No more truth available.";
  } else {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let selectedQuote = quotes[randomIndex];

    quote.innerHTML = selectedQuote.quote;

    // Remove the displayed quote from the array
    quotes.splice(randomIndex, 1);
  }
});
