//ES2020
//BigInt
//Nullish Coalescing Operator ?? - useful for those occassion where you will use the or operator
//optional Chain Operator ?.  - works on objects to check properties

//BigInt - new type 
typeof 4;           //NUMBER
typeof true;        //BOOLEAN

typeof 1n;          //BIGINT

//MAX_SAFE_INTEGER JS uses double precision floating pint numbers (2^53);
Number.MAX_SAFE_INTEGER;
90071992547409911 +10;                  //doesn't work
90071992547409911n +10n;            //90071992547409921 works
1n + 2n;                            //3n
typeof (3n);                        //bigint

let will_pokemon = {
   pikachu: { 
    species: 'Mouse Pokemon',
    height: 0.4,
    weight: 6, 
   }
}

//want to find out the weight of pickachu and hold it n a variable
let weight = will_pokemon.pikachu.weight;
console.log("weight", weight);

let raegan_pokemon = {
    raichu: { 
     species: 'Mouse Pokemon',
     height: 0.8,
     weight: 30,
     power: 'lightening' 
    }
 }

/*let weight2 = raegan_pokemon.pikachu.weight;
console.log("weight", weight);   */           //error cannot read property "weight" undefined - need to change to pikachu to raichu or if statement

//usually code is written this way...new way optional chaining..

if (raegan_pokemon.pikachu && raegan-raegan_pokemon.pickachu.weight) {
    let weight2 = raegan_pokemon.pickachy.weight;
    console.log(weight2);
}else {
    let weight2= undefined;
    console.log(weight2); 
}           //undefined  raegan pokemon doesn't exist

//optional chaining-- instead of long if statements
let weight3 = raegan_pokemon?.pickachu?.weight;
console.log(weight3);

// checking for properties using 
let raegan_pokemon = {
    raichu: { 
     species: 'Mouse Pokemon',
     height: 0.8,
     weight: 30,
     //power: 'lightening' 
    }
 }

let power = raegan_pokemon?.raichu?.power;
console.log(power);                             //throws undefined

let power2 = raegan_pokemon?.raichu?.power || "no power";       //or || operator checks if it is true false(empty string or 'false") = no power  
console.log(power2);

let power2 = raegan_pokemon?.raichu?.power ?? "no power";       // ?? instead of or operator it checks if it is null or undefined  =  
console.log(power2);

// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER) //9007199254740991
console.log(Number.MIN_SAFE_INTEGER) //-9007199254740991

// Exercise 2: why does this throw an error? How can you fix it?
3 + 4 + 1n // BigInts need to be calculated with other BigInts so...
3n + 4n + 1n // 8n
3 + 4 + 1 // 8 
// Both produce the value of 8, but one is a Number type, the other is a BigInt type

// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            /*charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }*/
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) {  //if either of the pokemons has a friend named chaizard then...
        console.log('fight!')
    } else {
        console.log('walk away...')
        
    }


// Exercise 4: What do these each output?
console.log(false ?? 'hellooo') //false
console.log(null ?? 'hellooo') //'hellooo'
console.log(null || 'hellooo') //'hellooo'
console.log((false || null) ?? 'hellooo') // 'hellooo'
console.log(null ?? (false || 'hellooo')) // 'hellooo'