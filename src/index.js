const endPoint = 'http://localhost:3000/api/v1/quotes'

document.addEventListener('DOMContentLoaded', () => {
  getQuotes()
  randomQuotes()
  
  const createQuoteForm = document.querySelector("#create-quotz-form")
  const randoCardBody = document.querySelector('.card-body')
  randoCardBody

  createQuoteForm.addEventListener("submit", (e) =>
  createFormHandler(e))

  // setTimeout(() => {
    // handleDeleteQuote()
  // }, 1000)
})

function getQuotes() {
   fetch(endPoint)
    .then(response => response.json())
    .then(quotes_resp => {
      quotes_resp.data.forEach(quote => {
         let newQuote = new Quote(quote, quote.attributes)
         newQuote.buildQuoteCard()
      })
      handleDeleteQuote()
   })

}

function createFormHandler(e) {
   e.preventDefault()
   
   const quotesValue = document.querySelector("#input-quote").value
   const authorValue = document.querySelector("#input-author").value
   const categoryId = parseInt(document.querySelector('#categories').value)
   const createQuoteForm = document.querySelector("#create-quotz-form")
   createQuoteForm.reset()
   postFetch(quotesValue, authorValue, categoryId)
}

let deleteNewestQuote = () => {
  fetch(`http://localhost:3000/api/v1/quotes/${event.target.dataset.quoteId}`, {
      method: "DELETE",
    }) 
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
    // Manipulate the data retrieved back, if we want to do something with it
    .catch(err => console.log(err)) 

    let quoteCard = event.target.parentElement.parentElement.parentElement.parentElement.parentElement
    quoteCard.remove()
  }

function postFetch(quote, author, category_id) {
  const bodyData = {quote, author, category_id}
  const nestBodyData = {
    quote: bodyData
  }
  fetch(endPoint, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(nestBodyData)
  })
  .then(response => response.json())
  .then(quote => {
    // debugger
    console.log(quote);
    const quoteData = quote.data
    let newQuote = new Quote(quoteData, quoteData.attributes)
    newQuote.buildQuoteCard()
    const deleteMe = document.querySelector(".quote_card button.delete")
    deleteMe.addEventListener("click", deleteNewestQuote)
  
  })
}

function randomQuotes() {
  fetch(endPoint)
   .then(response => response.json())
   .then(quotes_resp => {
    Array.from(quotes_resp.data).map(quote => {
        let newQuote = new Quote(quote, quote.attributes)
        
        let featureQuote = newQuote.appendQuoteCard()
        featureQuote.last
     })
    
  })

}

function randoFormHandler(e) {
  e.preventDefault()
  const randoQuotesValue = document.querySelector('.card-title').value
  const randoAuthorValue = document.querySelector('.card-text').value
  const randoCardBody = document.querySelector('.card-body')
  const categoryId = parseInt(document.querySelector('#categories').value)
  postFetch(randoQuotesValue, randoAuthorValue, categoryId)
  randoCardBody.append(randomQuotes())
}



const handleDeleteQuote = () => {
  // Make the HTTP Delete call using fetch api
  const quoteCardDeleteBtns = document.querySelectorAll(".quote_card button.delete")
  Array.from(quoteCardDeleteBtns).forEach(button => button.addEventListener("click", event => {
    fetch(`http://localhost:3000/api/v1/quotes/${event.target.dataset.quoteId}`, {
      method: "DELETE",
    }) 
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
    // Manipulate the data retrieved back, if we want to do something with it
    .catch(err => console.log(err)) 

    let quoteCard = event.target.parentElement.parentElement.parentElement.parentElement.parentElement
    quoteCard.remove()
  }));
  
  
  
  
}




// function appQuote() {
//   let appndQuote = new Quote(quoteData, quoteData.attributes)
//     appndQuote.buildQuoteCard().append()
// };
