class Quote {
    constructor (quotz, quoteAttributes) {
        this.id = quotz.id
        this.quote = quoteAttributes.quote
        this.author = quoteAttributes.author
        this.category_id = quoteAttributes.category_id
        
    }

    
    buildQuoteCard = () => {
      const quotesCont = document.querySelector('#quotz-container')
      const quoteCard = document.createElement('div')
      quoteCard.classList.add('col-md-4', 'quote_card')

      const card = document.createElement('div')
      card.classList.add('card', 'mb-4', 'shadow-sm')

      const image = document.createElement('img')
      image.src = "https://lh3.googleusercontent.com/Tbkfng6PQEWhNoONNZqRYLeuPom4eU1w9pGB2PPD8eG-ImS26RiuN69SlnPCiC0BKqFRGqcJPtjpT3qFGXawK-CxRf5n9sGuTk9gXHSk6prIFspfTuqhKBiASFNMckzUy68xfV7CU1g=w2400"
      image.classList.add('card-img-top')
      image.alt = '...'

      const cardBody = document.createElement('div')
      cardBody.classList.add('card-body')

      const p = document.createElement('p')
      p.classList.add('card-title')
      p.textContent = this.author

      const h5 = document.createElement('h5')
      h5.classList.add('card-text')
      h5.textContent = this.quote

      const buttonWrapper = document.createElement('div')
      buttonWrapper.classList.add('d-flex', 'justify-content-between', 'align-items-center')

      const buttonGroup = document.createElement('div')
      buttonGroup.classList.add('btn-group')

      const button1 = document.createElement('button')
      button1.classList.add('btn', 'btn-sm', 'btn-outline-secondary', 'delete')
      button1.type = 'button'
      button1.dataset.quoteId = this.id
      button1.textContent = 'Delete'

      const small = document.createElement('small')
      small.classList.add('text-muted')

      buttonGroup.append(button1)
      buttonWrapper.append(buttonGroup, small)
      cardBody.append(h5, p, buttonWrapper)
      card.append(image, cardBody)
      quoteCard.append(card)
      quotesCont.prepend(quoteCard)
    }

    appendQuoteCard = () => {
      const quotesCont = document.querySelector('.card-header')
      const quoteCard = document.createElement('div')
      quoteCard.classList.add('quote_card')

      const card = document.createElement('div')
      card.classList.add('card')

      const cardBody = document.createElement('div')
      cardBody.classList.add('card-body')

      const h5 = document.createElement('h5')
      h5.classList.add('card-title')
      h5.textContent = this.author

      const p = document.createElement('p')
      p.classList.add('card-text')
      p.textContent = this.quote

      cardBody.append(h5, p)
      card.append(cardBody)
      quoteCard.append(card)
      quotesCont.prepend(quoteCard)

    }
    
}

Quote.all = [];