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
    if(activeBlocks.indexOf(block) < 0){
      block.style.opacity = 1;
      activeBlocks.push(block);
    }
  }

//Function: Check if block is the same as active block
function checkBlocks() {
    if(activeBlocks[0].className == activeBlocks[1].className) {
      setTimeout(removeBlocks, 1000);  
    }
  }

//Function: Remove found blocks, change backgroundimage to 'memory-found
function removeBlocks() {
  
    var background = activeBlocks[0].style.backgroundImage;
    addElement(background);
    
    activeBlocks[0].className = 'memory-found';
    activeBlocks[1].className = 'memory-found';
  }

//Function: hide blocks, change opacity again
function hideBlocks() {
    for(var i = 0; i < blocks.length; i++) {  
      blocks[i].style.opacity = 0;
    }
    activeBlocks = [];
    holdOn = false;
  }

//Function addElement 
function addElement (background) { 
    // create a new div element 
    var newDiv = document.createElement("div"); 
    
    // add a class to the newly created element
    newDiv.className = "small-found";
    
    // add the background image to the element
    newDiv.style.backgroundImage = background;
    
    // add the newly created element and its content into the DOM 
    var foundContainer = document.getElementById("found"); 
    foundContainer.appendChild(newDiv);
  }


// create an array with happy tree friends
var happytreefriends = ['cuddles', 'handy', 'giggles', 'lumpy', 'mime', 'monkey', 'nutty', 'pop'];

// duplicate the content of this array: use concat
var doublefriends = happytreefriends.concat(happytreefriends);

// shuffle the array 
shuffle(doublefriends);
 
// initialize all blocks, put them in an array: DOM, get element by id: 'memory-block'
var blocks = document.getElementsByClassName('memory-block');

// initialize url params
var urlPrefix = "img/";
var urlSuffix = ".png";



// initialize an empty array that will contain the active blocks
var activeBlocks = [];

// loop through each block to add functionality
for(var i = 0; i < blocks.length; i++) {
  
    // combine url
    var url = urlPrefix + doublefriends[i] + urlSuffix;
    
    // add the background image to each block + add a class
    blocks[i].style.backgroundImage = 'url('+url+')';
    blocks[i].className += " " + doublefriends[i];
    
    // functionality after a click
    blocks[i].onclick = function(event) {
      
      // if less thean 2 blocks, make block visible
      if(activeBlocks.length < 2) {
        showBlock(event.target);
      } 
      
      // if 2 blocks are active, check them and hide or remove them
      if(activeBlocks.length == 2)
      {
        // pause parameter
        if(!holdOn) {
          // pause while checking
          holdOn = true;
          checkBlocks();
          
          // automatically hide the blocks after 2 seconds
          setTimeout(hideBlocks, 2000);  
        }
      }
    }
  }