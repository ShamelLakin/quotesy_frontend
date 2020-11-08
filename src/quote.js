class Quote {
    constructor (quotz, quoteAttributes) {
        this.id = quotz.id
        this.quote = quoteAttributes.quote
        this.author = quoteAttributes.author
        this.category_id = quoteAttributes.category_id
        Quote.all.push(this)
       
    }

    renderUpdateForm() {
        return `
    
        <form data-id=${this.id} >
          <h3>Edit a Quote!</h3>
    
          <label>Quote</label>
          <input id='input-quote' type="text" name="title" value="${this.quote}" class="input-text">
          <br><br>
    
          <label>Author</label>
          <textarea id='input-author' name="description" rows="8" cols="80" value="">${this.author}</textarea>
          <br><br>
    
          <label>Category</label>
          <input id='category_id' type="text" name="image" value="${this.category_id}" class="input-text">
          <br><br>
    
          <label>Category</label>
          <select id="categories" name="categories" value="${this.category.name}">
            <option value="1">Art</option>
            <option value="2">Tech</option>
            <option value="3">Science</option>
          </select>
          <br><br>
    
          <input id='edit-button' type="submit" name="submit" value="Edit Quote" class="submit">
        </form>
    
      `;
      }
}

Quote.all = [];