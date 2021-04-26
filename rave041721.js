// 1.Write a function that given a list of countries, returns the country(s) that occur the least times
// i.e - ["Argentina", "Cuba", "Chile", "Argentina"] -> ["Cuba", "Chile"] -----------***

function least(arr) {
    //edgecase later

    // frequencies of element
    let obj ={}
    for (let val of arr) {
        obj[val] = ++obj[val] || 1
    }
    console.log(obj)

    // compare values
    let countArr = Object.values(obj)
    console.log(countArr)
    let min = Math.min(...countArr)
    console.log(min)

    let answer = {}
    for (let key in obj) {
        if (obj[key] === min) {
            answer[key] = min
        } 
    }
    console.log(answer)

    let countries = Object.keys(answer)
    console.log(countries)

    return countries
}

// least(["Argentina", "Cuba", "Chile", "Argentina", "Korea", "Chile", "Cuba", "Argentina", "Korea", "Cuba"])




// 2.Write a program to find longest Palindromic Substring within a string.
// Also find the start index and the end index of that Palindromic Substring within the string. 
//Print the palindromic substring, the start index, the end index and also the original string removing the palindromic substring.
// i.e thequickbrownfoxxofnworbquickthe ->  brownfoxxofnworb
// The start index : 8, end index :23
// The string without palindromic substring :thequickquickthe



// 3.Write a program to find the index of a value in a sorted array. 
// If the value does not find return the index where it would be if it were inserted in order.
// Example: 
// [1, 2, 4, 5, 6] 5(target)
//  -> 3(index)
// [1, 2, 4, 5, 6] 0(target)
//  -> 0(index)
// [1, 2, 4, 5, 6] 3(target)
//  -> 2(index)

// search([2, 3, 5, 8], 0)

function search(arr, val){
    // if (arr.includes(val)) {
    //     console.log(arr.indexOf(val))
    
    //     return arr.indexOf(val)
 
    // } else if (val < arr[0] ) {
    //     console.log(0)
    //     return 0

    // } else if (val > arr[arr.length - 1]) {
    //     console.log(arr.length)
    //     return arr.length
    // }
    // } else if ( (arr[0] <= val) && ((arr[arr.length - 1]) >= val) ) {
        let position = 0
        // console.log(position)
    for (let num of arr) {
        if (num < val) {
            // console.log(position)
            position = position + 1
            // console.log(position)
        } else {
            console.log(position)
            return position
        }
    }
    console.log(position)
    return position
    // }
}

// search([2, 3, 5, 8], 9)


// compare argument val to other elements in the array
//         let sth = -1
//         for (let num of arr) {
//             if val < num     
//         }


//         let min = 0
//         let max = arr.length - 1 
//         let position
//         while(min < max) {
            
//         }
//         find its position(index) in numerical order o

//return an array with numbers from 1 to 100
// function type100(){
//     arr = []
//     for (i=1; i < 101; i++){
//         arr.push(i)
//     }
//     console.log(arr)
//     return arr
// }
// type100()

//[1,2,3,4,5] -> [2,1,3,4,5] -> [3,2,1,4,5] -> [4,2,3,1,5] -> [5,2,3,4,1]
// then start from 2 and so on

function swap(arr){

    for (i = 1; i < arr.length; i++){
        for (j = 0; j < i ; j++){ 
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp 
            console.log("i: ", i)
            console.log("j: ", j)
            console.log(arr)
        }
        console.log(arr)
    }
}
swap([1,2,3,4,5])


 // let i = 0 
    // let j = 1
    // while (i < j && j < arr.length) {
    //     let temp = arr[i]
    //     arr[i] = arr[j]
    //     arr[j] = temp 
    //     console.log(arr)
    //     i++
    //     j++
    // }
   
//  let i = 0 
//     for ( let j = 1; j < arr.length; j++ ) {
//         let temp = arr[i]
//         arr[0] = arr[j]
//         arr[j] = temp 

//         console.log(arr)
//     }
//     return arr


// for (i = 0 ; i < arr.length; i++) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j+1] = temp
//     // console.log(arr[i])
//     console.log(arr)


