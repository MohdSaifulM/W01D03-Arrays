//Array Practice

//Question 1
// let input = 2548609384;
// let makeString = input.toString();
// let arrInput = makeString.split("");

// let newArr = [];

// for(let i = 0; i < arrInput.length; i++){
//     if(arrInput[i-1] % 2 === 0 && arrInput[i] % 2 === 0){
//         newArr.push("-", arrInput[i])
//     }else{
//         newArr.push(arrInput[i]);
//     }
// }
// console.log(newArr.join(""));

//Question 2
// var input=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var maxFrequency = 1;
// var frequency = 0;
// var mostFrequentItem;

// for (var i=0; i<input.length; i++)
// {
//         for (var j=i; j<input.length; j++)
//         {
//                 if (input[i] == input[j])
//                  frequency++;
//                 if (maxFrequency<frequency)
//                 {
//                   maxFrequency = frequency; 
//                   mostFrequentItem = input[i];
//                 }
//         }
//         frequency=0;
// }
// console.log(mostFrequentItem + " " + maxFrequency +" times") ;

//Question 3

// let input = [1, "a", "A", "b", 2, 2];
// let arrInput = [];
// for(let i = 0; i < input.length; i++){
//     if(isNaN(input[i])){
//         let result = input[i].toLowerCase();

//         if(!arrInput.includes(result)){
//             arrInput.push(result);
//         }
//     }else if(!arrInput.includes(input[i])){
//         arrInput.push(input[i]);
//     }
// }
// console.log(arrInput);

//Question 4

// let input1 = [1, 2, 3];
// let input2 = [100, 2, 1, 10];

// let newArr = [];

// for(let i = 0; i < input1.length; i++){
    
//     for(let j = 0; j < input2.length; j++){
//         if(input1[i] == (input2[j])){
//             newArr.push(input1[i]);
//         }
//     }
// }
// console.log(newArr); 

//Question 5

let input1 = [1, 2, 3];
let input2 = [2, 30, 1];

let newArr = [];

for(let i = 0; i < input1.length; i++){

    for(let j = 0; j < input2.length; j++){
        if(!newArr.includes(input1[i])){
        newArr.push(input1[i]);
        }
    
        if(!newArr.includes(input2[j])){
            newArr.push(input2[j]);
        }
    }
}

console.log(newArr);