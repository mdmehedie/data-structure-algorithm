//List Method
// size (method): Returns the size of the list.
// clear (method): Clears the list.
// print (method): Prints all the items of the list.
// getElement (method): Returns the item at the current position in the list.
// insert (method): Inserts a new item after the given item in the list.
// append (method): Adds a new item on the top of the list.
// remove (method): Removes the given item from the list.
// front (method): Moves the position to the first item in the list.
// rear (method): Moves the position to the last item in the list.
// prev (method): Moves the position to the previous item in the list.
// next (method): Moves the position to the next item in the list.
// currPos (method): Returns the current position in the list.
// moveTo (method): Moves to the specific position in the list.
// contains (method): Check if item is present in the list.

function List() {
  //Initialization the list
  this.listSize = 0; //track the list size
  this.pos = 0; //track the current posistion
  this.items = []; //Hold item

  // Add item the list
  this.append = (element) => {
    this.items[this.listSize++] = element;
  };

  //Finding the item from list
  this.find = (element) => {
    if (typeof element === 'object' && element != null) {
      for (let i = 0; i < this.listSize; i++) {
        if (
          Object.entries(
            this.items[i].toString() === Object.entries(element).toString()
          )
        ) {
          return i;
        }
      }
    } else {
      for (let i = 0; i < this.listSize; i++) {
        if (this.items[i] === element) {
          return i;
        }
      }
    }
    return -1;
  };

  //Removing item from list
  this.remove = (element) => {
    let index = this.find(element);

    if (index > -1) {
      this.items.splice(index, 1);
      --this.listSize;
      return true;
    }

    return false;
  };

  //Insert item after the spacifiq posistion
  this.insert = (element, after) => {
    let insertPosition = this.find(after);

    if (insertPosition > -1) {
      this.items.splice(insertPosition + 1, 0, element);
      ++this.listSize;

      return true;
    }

    return false;
  };

  //Check if presemt in list
  this.contains = (element) => {
    let index = this.find(element);

    return index > -1 ? true : false;
  };

  //Print all items of the list
  this.print = () => {
    return this.items.join(', ');
  };
}

let list = new List();

list.append('Jan');
list.append('Feb');
list.append('Mar');
list.append('Apr');
list.append('May');
list.append('Jun');
list.append('Jul');

console.log(list.print());

list.remove('May');
console.log(list.print());
