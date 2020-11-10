const endPoint = 'http://localhost:3000/api/v1/quotes'

document.addEventListener('DOMContentLoaded', () => {
   getQuotes()
  
   const createQuoteForm = document.querySelector("#create-quotz-form")

   createQuoteForm.addEventListener("submit", (e) =>
   createFormHandler(e))

   const quotzContainer = document.querySelector('#quotz-container')

   quotzContainer.addEventListener('click', e => {

    const quotes = document.querySelectorAll(".quote")
    
    Array.from(quotes).forEach(quote => {
      let authorInput = document.querySelector('input#input-author')
      let quoteInput = document.querySelector('textarea#input-quote')
      let categories = document.querySelector('select#categories')
      let selectedCategory = categories[categories.selectedIndex].textContent
      if (e.target === quote) {
        let authorContent = quote.querySelector('h3').textContent
        authorInput.value = authorContent
        let quoteContent = quote.querySelector('h2').textContent
        quoteInput.value = quoteContent
      }
    })
   
  });
  // document.querySelector('#update-quote').addEventListener('submit', e => updateFormHandler(e))
})

function getQuotes() {
   fetch(endPoint)
    .then(response => response.json())
    .then(quotes_resp => {
      quotes_resp.data.forEach(quote => {
        //  const quoteMark = `
        //  <div data-id=${quotz.id} class="quote">
        //  <h2>${quotz.attributes.quote}</h2>
        //  <h3>${quotz.attributes.author}</h3>
        //  <p>${quotz.attributes.category.name}</p>
        //  <button data-id=${quotz.id}>edit</button>
        //  </div>`;
// debugger
         let newQuote = new Quote(quote, quote.attributes)
         document.querySelector('#quotz-container').innerHTML += newQuote.renderQuoteCard() 
         
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

function updateFormHandler(e) {
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const quotz = Quote.findById(id);
    const quote = e.target.querySelector('#input-quote').value;
    const author= e.target.querySelector('#input-author').value;
    const category_id = parseInt(e.target.querySelector('#categories').value);
    // debugger
    Quote(quote, author, category_id)
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
     
      // const quoteMark = `
      // <div data-id=${quote.id}>
      // <h2>${quoteData.attributes.quote}</h2>
      // <h3>${quoteData.attributes.author}</h3>
      // <p>${quoteData.attributes.category.name}</p>
      // <button data-id=${quoteData.id}>edit</button>
      // </div>
      // <br><br>`;
      let newQuote = new Quote(quoteData, quoteData.attributes)

      document.querySelector('#quotz-container').innerHTML += newQuote.renderQuoteCard();
   })

    function deleteQuote(quote, author, category_id) {
        const bodyJSON = { quote, author, category_id }
            fetch(`http://localhost:3000/api/v1/quotes/${quote.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
            },
                body: JSON.stringify(bodyJSON)
            })
            .then(res => res.json())
            // our backend responds with the updated quote instance represented as JSON
            .then(quote => {
              const newQuote = new Quote(quote.data.id, quote.data.attributes)
              document.querySelector('#quotz-container').innerHTML += newQuote.renderUpdateForm();
              

            }
            )}
  
}


