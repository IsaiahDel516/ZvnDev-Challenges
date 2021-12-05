// Challenge 1
// Prompt

// You are given an array representing the heights of neighboring buildings on a city street, from east to west. 
// The city assessor would like you to write an algorithm that returns how many of these buildings have a view of the setting sun, in order to properly value the street.
// For example, given the array [3, 7, 8, 3, 6, 1], you should return 3, since the top floors of the buildings with heights 8, 6, and 1 all have an unobstructed view to the west.
// Can you do this using just one backward pass through the array?

// High Level Approach - 
//To do this going backwards in the array, what we need to do is look for everytime there is a new largest number. This is because anything number that is smaller to the east of another number will have its view of the sun blocked
// but it shouldnt affect the view of any number to the west of it.

// Pseudocode -
// initialize a currentLargest var and set its value to 0 (since the array contains only positive ints)
// initialize a counter var set to 0 
// Iterate through our input array starting at the end of the array and decrementing our index on each iteration
  // check if our current number element is greater than the currentLargest var.
    // if true, we want to set the currentLargest var to the current num el
    // now increment counter var
// Once array is finished being iterated on, return the counter var

// Code - 
function sunsetView(array) {
  let currentLargest = 0;
  let counter = 0;
  for (let i = array.length; i >= 0; i--) {
    if (array[i] > currentLargest) {
      currentLargest = array[i];
      counter++;  
    }  
  }
  return counter;    
}


// Challenge 2

// Implement division of two positive integers without using the division, multiplication, or modulus operators. 
// Return the quotient as an integer, ignoring the remainder.

// High level Approach - 
// I was thinking of doing this recursively and also using closure because it can be done so why not and I also want to showcase some of my knowledge in these areas :) 
// this may be overkill for a problem that could be solved with a simple while loop but i hope you dont mind this approach 
// We will have a Highorder function that will accept the two positive ints we are dividing
// inside here we will find out which number is smaller (to know what number to add) and which is larger (to use as a comparison later)
// considering that we arent worried about the remainder, id say its say to assume that we are dont need to worry about fractions meaning we will only divide the bigger num by the smaller number
// now we will have a callback function that we will call inside of our higherorder function
// we want to check for the smaller number and continue to add that to another var
// until it is greater than our larger number (base case). 
// 

// Psuedocode -
// Initialize a function that takes in 2 args (the 2 integers we are dividing)
function division(int1, int2) {
  // if the two numbers are the same return 1
  if (int1 === int2) {
    return 1
  } 
  // initialize a largerNum var and a smallerNum var. No need to set its value just yet
  let largerNum;
  let smallerNum;
  // check if int1 is greater than int2
  if (int1 > int2) {
    // if so,
    // set largerNum equal to int1
    largerNum = int1
    // set smallerNum equal to int2
    smallerNum = int2
  } else {
    // else,
    // set largerNum equal to int2
    largerNum = int2
    // set smallerNum equal to int1
    smallerNum = int1
  }
  // Initialize a func that takes 3 args (the largerNum, a counter var set equal to 0, and a currentSum var set to the smallerNumber) 
  function divAddition (largerNum, counter, currentSum) {
    // check if our currentSum is greater than or equal to the largerNum var
    if (currentSum > largerNum) {
      //  if so, return counter
      return counter  
    }  
    // otherwise recursively call this function passing in the largerNum, an incremented counter var, and a currentSum which has had smallerNum added to it  
    return divAddition(largerNum, counter+= 1, currentSum += smallerNum)
  }
  // return the result of calling our divAddition
  return divAddition(largerNum, 0, smallerNum)
}
  