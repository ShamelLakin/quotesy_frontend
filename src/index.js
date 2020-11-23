const endPoint = 'http://localhost:3000/api/v1/quotes'

document.addEventListener('DOMContentLoaded', () => {
  getQuotes()
  
  const createQuoteForm = document.querySelector("#create-quotz-form")

  createQuoteForm.addEventListener("submit", (e) =>
  createFormHandler(e))

  setTimeout(() => {
    handleDeleteQuote()
  }, 1000)
})

function getQuotes() {
   fetch(endPoint)
    .then(response => response.json())
    .then(quotes_resp => {
      quotes_resp.data.forEach(quote => {
         let newQuote = new Quote(quote, quote.attributes)
         newQuote.buildQuoteCard()
      })
      
// debugger
   })

}

function createFormHandler(e) {
   e.preventDefault()
   
   const quotesValue = document.querySelector("#input-quote").value
   const authorValue = document.querySelector("#input-author").value
   const categoryId = parseInt(document.querySelector('#categories').value)
   postFetch(quotesValue, authorValue, categoryId)
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
    console.log(quote);
    const quoteData = quote.data
    let newQuote = new Quote(quoteData, quoteData.attributes)
    newQuote.buildQuoteCard()
  })
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



