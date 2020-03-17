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
function showBlock(block) {

  }

//Function: Check if block is the same as active block
function checkBlocks() {

  }

//Function: Remove found blocks, change backgroundimage to 'memory-found
function removeBlocks() {

  }

//Function: hide blocks, change opacity again
function hideBlocks() {

  }


//Function addElement 
function addElement (background) { 
     // create a new div element 
  
    // add a class to the newly created element
    
    // add the background image to the element
    
    // add the newly created element and its content into the DOM 
  }





// create an array with happy tree friends
var happytreefriends = [];

// duplicate the content of this array: use concat


// shuffle the array 
shuffle(doublefriends);
 
// initialize all blocks, put them in an array: DOM, get element by id: 'memory-block'
var blocks;

// initialize url params
var urlPrefix = "img/";
var urlSuffix = ".png";



// initialize an empty array that will contain the active blocks
var activeBlocks = [];

// loop through each block to add functionality
for(var i = 0; i < blocks.length; i++) {
  // combine url
  // add the background image to each block + add a class


    // functionality after a click
    blocks[i].addEventListener('click', function(event) {
        // if less thean 2 blocks, make block visible

        // if 2 blocks are active, check them and hide or remove them
        // pause parameter
            // pause while checking

            // automatically hide the blocks after 2 seconds

    });
}