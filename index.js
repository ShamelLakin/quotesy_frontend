const endPoint = 'http://localhost:3000/api/v1/quotes'

document.addEventListener('DOMContentLoaded', () => {
   getQuotes()
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

         document.querySelector('#quotz-container').innerHTML += quoteMark 
      })
   })
}