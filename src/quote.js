class Quote {
    constructor (quotz, quoteAttributes) {
        this.id = quotz.id
        this.quote = quoteAttributes.quote
        this.author = quoteAttributes.author
        this.category_id = quoteAttributes.category_id
        Quote.all.push(this)
        console.log(this)
       
    }

    renderQuoteCard() {
      return ` 
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
        <img src="https://images.unsplash.com/photo-1537210249814-b9a10a161ae4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${this.author}</h5>
            <p class="card-text">${this.quote}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small class="text-muted">Made With <3</small>
            </div>
          </div>
        </div>
      </div>`
      //   return `
    
      //   <form data-id=${this.id} >
      //     <h3>Edit a Quote!</h3>
    
      //     <label>Quote</label>
      //     <input id='input-quote' type="text" name="title" value="${this.quote}" class="input-text">
      //     <br><br>
    
      //     <label>Author</label>
      //     <textarea id='input-author' name="description" rows="8" cols="80" value="">${this.author}</textarea>
      //     <br><br>
    
      //     <label>Category</label>
      //     <input id='category_id' type="text" name="image" value="${this.category_id}" class="input-text">
      //     <br><br>
    
      //     <label>Category</label>
      //     // <select id="categories" name="categories" value="">
      //       <option value="1">Art</option>
      //       <option value="2">Tech</option>
      //       <option value="3">Science</option>
      //     </select>
      //     <br><br>
    
      //     <input id='edit-button' type="submit" name="submit" value="Edit Quote" class="submit">
      //   </form>
    
      // `;
      }
}

Quote.all = [];