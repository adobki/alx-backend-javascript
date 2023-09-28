// Creates a super class with a check for a method in child class when extended

export default class Building {
  constructor(sqft) {
    this.sqft = sqft;

    // Check if class is being extended by a child class
    if (new.target.name !== Building.name) {
      // Throw error if extending class doesn't have a evacuationWarningMessage method
      if (!new.target.prototype.evacuationWarningMessage) {
        throw Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  // sqft getter
  get sqft() {
    return this._sqft;
  }

  // sqft setter
  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('sqft must be a number');
    }

    this._sqft = sqft;
  }
}
