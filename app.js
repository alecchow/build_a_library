class Media {
    constructor(title, isCheckedOut, ratings) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }
    
    set isCheckedOut(status) {
        this._ischeckedOut = status;
    }

    get ratings() {
        return this._ratings;
    }

    getAverageRating() {
        let sum = this._ratings.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const n = this._ratings.length;
        return sum/n;
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    addRating(newRating) {
        this._ratings.push(newRating);
    }
}

class Book extends Media {
    constructor(author, title, pages) {
      super(title)
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this.author;
    }
  
    get pages() {
      return this.pages;
    }
  }