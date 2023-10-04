let rectangle = {
    length: 1,
    breadth: 2,

    draw: function(){
        console.log('Draw');
    }
};

// Factory Function

function createRectangle(length, breadth) {
    return rectangle = {
        length,
        breadth,
    
        draw: function(){
            console.log('Draw');
        }
    };
}

let rectangleobj1 = createRectangle(15,48);
let rectangleobj2 = createRectangle(53,74);
let rectangleobj3 = createRectangle(25,44);



// Constructor Function

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
  }

// Creation

let person1 = new Person('krishna','sharma',19,'black');