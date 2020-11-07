class Quote {
    constructor (quotz, quoteAttributes) {
        this.id = quotz.id
        this.quote = quoteAttributes.quote
        this.author = quoteAttributes.author
        this.category_id = quoteAttributes.category_id
        Quote.all.push(this)
       
    }
}

Quote.all = [];