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