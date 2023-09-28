// Tests the code in the referenced script(s)

import Building from '../5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building { evacuationWarningMessage() { }; }
console.log(new TestBuilding(200));

class BadBuilding extends Building {}
try {
  console.log(new BadBuilding(200));
}
catch(err) {
  console.log(err);
}
