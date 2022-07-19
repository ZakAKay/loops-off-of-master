let counterOnetoThousand = 1; //we have to start with 1 so that we dont include 0. remember its 1-1000
while (counterOnetoThousand <= 1000) {
  //this is how you start a for while loop. what this is saying is counterOnetoThousand is less than or equal to 1000, that way when ran the loop wont go over 1000.
  console.log(counterOnetoThousand);
  counterOnetoThousand++; // this is telling my while loop to incrementally go up by one every new loop.
}

console.log("hello"); ///will be added at the end of my while loop.

//===============================================================================
//Create an object (with keys and values) called person with the following data:
//===============================================================================
let person = {
  /// {} this is an object
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female",
};
//=====================================================================
//Create a function that logs out the keys of the object using Object.keys().
//=======================================================================        //alt+shift up or down will copy the line and print a new one wherever you push the up or down key to.

const objectKeysForFunction = () => {
  //objectKeysForFunction is the name of the variable/function// () to the last curly bracket is the function//this is how you would declare a function in es6 format
  console.log(Object.keys(person)); //object.keys is a method
};
objectKeysForFunction(); //this is how i invoke the function
// function objectKeysForFunction (){}        this is the other way to declare a function that is not es6

//=======================================================================================
//Create a function that logs out the keys and values of the object using Object.entries()
//=======================================================================================

const objectEntriesForFunction = () => {
  //objectEntriesForFunction is the name of the function
  console.log(Object.entries(person)); //what in between the first ( and ending } is the function
};
objectEntriesForFunction(); //this is telling js that i want to invoke objectEntriesForFunction

//=======================================================================================
//Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.
//=======================================================================================

let arrayOfPersons = [
  //the question above wants you to create 5 objects in the new array. the object is whatever is in between {}
  {
    /// {} this is an object
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 2005",
    gender: "female",
  },
  {
    /// {} this is an object
    firstName: "zak",
    lastName: "kay",
    birthDate: "Jan 7, 1934",
    gender: "male",
  },
  {
    /// {} this is an object
    firstName: "jack",
    lastName: "black",
    birthDate: "Jan 20, 1945",
    gender: "male",
  },
  {
    /// {} this is an object
    firstName: "John",
    lastName: "ham",
    birthDate: "Jan 28, 1972",
    gender: "male",
  },
  {
    /// {} this is an object
    firstName: "Jane",
    lastName: "fonda",
    birthDate: "Jan 1, 1965",
    gender: "female",
  },
];
//=======================================================================================
//Create a function that uses a for...of loop and an if statement to console.logthe value associated with the key birthDate of each object if the birth year is an odd number.
//=======================================================================================

// const forOfFunction = () => {
//   //this is how you create the name of the function
//   for (let person of arrayOfPersons) {      
//     console.log(person.firstName);          //.notation, person.firstName is pulling all the first names from the objects in the array.  
//   }
// };
// forOfFunction()

//=======================================================================================

const forOfFunction = () => {
    //this is how you create the name of the function
    for (let person of arrayOfPersons) {       //.notation, person.firstName is pulling all the first names from the objects in t
    //   console.log(person.birthDate.split(" ")[2] );
     let birthYear = person.birthDate.split(" ")[2]   
     if (birthYear % 2 == 1)  {
        console.log(birthYear)
     }                            
    }
  };
  forOfFunction()

  //=======================================================================================
  //Use .map() to map over the arrayOfPersons and console.log() their information. 
  //=======================================================================================
arrayOfPersons.map((person, i, array)=>{
    console.log(person, i, array)
}) 
  //=======================================================================================
  //Use .filter() to filter the persons array and console.log 0only males in the array.
  //=======================================================================================
  let newArrayOfMales = arrayOfPersons.filter((person)=>{
    // console.log(person.gender)
    return person.gender === "male"
})
console.log("Here Is Your List Of Males:",newArrayOfMales)

//=======================================================================================
//Create a function that returns true if the value of birthDate is before Jan 1, 1990
//=======================================================================================
const functionForBirthYear = () => {
    for (let person of arrayOfPersons) {
        let birthYear = person.birthDate.split(" ")[2] 
        if (birthYear <= 1990) {
            console.log(birthYear, "true")
        }
    }
}
functionForBirthYear();


//=======================================================================================
//Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
//=======================================================================================

// let newArrayOfMales = arrayOfPersons.filter((person)=>{
//     // console.log(person.gender)
//     return person.gender === "male"
// })
// console.log("Here Is Your List Of Males:",newArrayOfMales) 

let arrayOfPeople = arrayOfPersons.filter((person)=>{
    let birthYear = person.birthDate.split(" ")[2] 
    return birthYear <= 1990   
})
console.log("List of people borne before jan 1, 1990:", arrayOfPeople)


// const forOfFunction = () => {
//     //this is how you create the name of the function
//     for (let person of arrayOfPersons) {       //.notation, person.firstName is pulling all the first names from the objects in t
//     //   console.log(person.birthDate.split(" ")[2] );
//      let birthYear = person.birthDate.split(" ")[2]   
//      if (birthYear % 2 == 1)  {
//         console.log(birthYear)
//      }                            
//     }
//   };
//   forOfFunction()