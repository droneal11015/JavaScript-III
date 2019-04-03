/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is a broad scope of this, it's not directed to one specific object so it binds to the whole scope or 'window'
* 2. Implicit binding points to what object you're referring to
* 3. New binding is used in constructor functions to refer to the specific instance of the created object and is returned by the constructor
* 4. Explicit binding is when call or apply is used with this functions
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const dogs = {
    name: "Luke",
    age: 2,
    breed: "mutt",
    toy: "cow hooves"
    fun: function(){
      return `${name} is a ${age} year old ${breed} that likes to play with ${toy}`;
    }
  }
  console.log(dogs.fun());

// Principle 2

// code example for Implicit Binding
const dogs = {
    name: "Luke",
    age: 2,
    breed: "mutt",
    toy: "cow hooves",
    fun: function(){
      return `${this.name} is a ${this.age} year old ${this.breed} that likes to play with ${this.toy}`;
    }
  }
  console.log(dogs.fun());


// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding