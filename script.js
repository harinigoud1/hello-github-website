(function(){
  const quotes = [
    "Start where you are. Use what you have. Do what you can.",
    "Every expert was once a beginner.",
    "Small steps every day add up to big things.",
    "Done is better than perfect.",
    "You don’t have to be great to start, but you have to start to be great."
  ];
  const btn = document.getElementById('quoteBtn');
  const box = document.getElementById('quoteBox');
  function randomQuote(){
    const q = quotes[Math.floor(Math.random() * quotes.length)];
    box.textContent = "“" + q + "”";
  }
  btn.addEventListener('click', randomQuote);
  // show one on load
  randomQuote();
})();