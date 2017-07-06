/*global alert, prompt, console*/
(function () {

    "use strict";
    var newItemButton, list, listItem;
    //Access new-item button
    newItemButton = document.querySelector(".packing button");
    //Access unordered list
    list = document.querySelector(".packing ul");
    //Declare variable list-item

    //Define function removeItem (use event object to find out which item is clicked).
    function removeItem(event) {
        //Remove clicked item from unordered list.
        list.removeChild(event.target);
    }
    //End function removeItem.

    //Define function addItem.
    function addItem() {
        //Create list item and store output in a variable.
        listItem = document.createElement("li");
        //Use innerHTML on created list item and assign it with user input
        listItem.innerHTML = prompt("Add something to your packing list.");
        //from prompt("Enter a new item for to-do list:").

        //If list item has a content:
        if (listItem.innerHTML !== null) {
            //Append list item to unordered list.
            list.appendChild(listItem);
            //Add event listener to the added list-item to listen for click event - event  //handler will be removeItem function.
            listItem.addEventListener("click", removeItem);
        }
    }

    //End function addItem.

    //Add event listener to button to listen for click event - event handler will be  
    //addItem function.
    newItemButton.addEventListener("click", addItem, false);
    //Close and immediately invoke closure*/

}());