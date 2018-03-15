// create menu object
const menu = {

  //courses property set to an object, inside the object create three properties set to an array
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],

    // Create setters and getter methods
    set appetizers(newAppetizer) {
      this._appetizers.push(newAppetizer);
    },

    set mains(newMain) {
      this._mains.push(newMain);
    },

    set desserts(newDessert) {
      this._desserts.push(newDessert);
    },

    get appetizers() {
      return this._appetizers;
    },

    get mains() {
      return this._mains;
    },

    get desserts() {
      return this._desserts;
    },
  }, //close courses object

  get courses() {
    return {
      appetizers: this._courses.appetizers, // appetizer getter method
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    // create dish object
    const dish = {
      name: dishName,
      price: dishPrice
    }
    // why _courses[courseName] in brackets?
    this.courses[courseName].push(dish);

    // also does not work: this._courses[courseName].push(dish);
  },


  /*Now, we're going to need another function which will allow us to get a random dish from a course on the menu, which will be necessary for generating a random meal.
  */

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName]; //using the getter method?
    //HINT: const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    console.log(`You will start with ${appetizer.name} followed by ${main.name}. The dessert will be ${dessert.name}. The total price of the dinner is ${totalPrice}`)
  },

}; //close menu object

menu.addDishToCourse('appetizers', 'Salad', 10.5);
menu.addDishToCourse('appetizers', 'Bread', 5.5);
menu.addDishToCourse('appetizers', 'Soup', 7.5);
menu.addDishToCourse('mains', 'Lamb', 17.5);
menu.addDishToCourse('mains', 'Pork', 19.5);
menu.addDishToCourse('mains', 'Vegetarian', 15.25);
menu.addDishToCourse('desserts', 'Icecream', 7);
menu.addDishToCourse('desserts', 'Chocolate mousse', 8);
menu.addDishToCourse('desserts', 'Irish coffee', 6.5);
const meal = menu.generateRandomMeal();
console.log(meal);