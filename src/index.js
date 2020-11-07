const endPoint = 'http://localhost:3000/api/v1/quotes'

document.addEventListener('DOMContentLoaded', () => {
   getQuotes()

   const createQuoteForm = document.querySelector("#create-quotz-form")

   createQuoteForm.addEventListener("submit", (e) =>
   createFormHandler(e))
})

function getQuotes() {
   fetch(endPoint)
    .then(response => response.json())
    .then(quotes_resp => {
      quotes_resp.data.forEach(quotz => {
         const quoteMark = `
         <div data-id=${quotz.id}>
         <h2>${quotz.attributes.quote}</h2>
         <h3>${quotz.attributes.author}</h3>
         <p>${quotz.attributes.category.name}</p>
         <button data-id=${quotz.id}>edit</button>
         </div>`;
// debugger
         let newQuote = new Quote(quotz, quotz.attributes)
         document.querySelector('#quotz-container').innerHTML += quoteMark 
      })
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
    // console.log(quote, author, category_id);
   const bodyData = {quote, author, category_id}
   const nestBodyData = {
       quote: bodyData

   }
// debugger
    fetch(endPoint, {

      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(nestBodyData)
    })
   .then(response => response.json())
   .then(quote => {
      console.log(quote);
      const quoteData = quote.data
     
      const quoteMark = `
      <div data-id=${quote.id}>
      <h2>${quoteData.attributes.quote}</h2>
      <h3>${quoteData.attributes.author}</h3>
      <p>${quoteData.attributes.category.name}</p>
      <button data-id=${quoteData.id}>edit</button>
      </div>
      <br><br>`;

      document.querySelector('#quotz-container').innerHTML += quoteMark;
   })
}


