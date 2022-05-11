const quoteText = $('.quote')
const quoteBtn = $('button')

function getRandomQuote(){
  let promise = $.ajax({
    url: "https://api.quotable.io/random",
    method: "GET"
  })
  promise.then(function(data){
    $('.quote').html(JSON.stringify(data.content))
    $('.author').html(JSON.stringify(data.author))
    
  })
  
}

quoteBtn.on('click', getRandomQuote)