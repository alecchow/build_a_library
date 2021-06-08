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

class Movie extends Media {
    constructor(director, title, runTime) {
      super(title)
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this.runTime;
    }
  }

/* Testing */

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);