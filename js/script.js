// ALL FUNCTIONS
/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 * https://css-tricks.com/snippets/javascript/shuffle-array/
 */
// yourArray.sort(function() { return 0.5 - Math.random() });

function shuffle(a) {
    var j, x, i; 
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

//Helper to "pause" the game after 2 active blocks
var holdOn = false;


//Function: show block, change opacity and add to activeblock-array

//Function: Check if block is the same as active block

//Function: Remove found blocks, change backgroundimage to 'memory-found

//Function: hide blocks, change opacity again


//Function addElement 
  // create a new div element 
  
  // add a class to the newly created element
  
  // add the background image to the element
  
  // add the newly created element and its content into the DOM 






// create an array with happy tree friends


// duplicate the content of this array


// shuffle the array 

 
// initialize all blocks, put them in an array


// initialize url params


// initialize an empty array that will contain the active blocks
  

// loop through each block to add functionality
    // combine url
    // add the background image to each block + add a class


    // functionality after a click
        // if less thean 2 blocks, make block visible

        // if 2 blocks are active, check them and hide or remove them
        // pause parameter
            // pause while checking

            // automatically hide the blocks after 2 seconds




