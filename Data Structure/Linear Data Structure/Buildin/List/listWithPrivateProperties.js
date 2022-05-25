let List = (function () {
  return function List() {
    //Initialization the list
    this.listSize = 0; //track the list length
    this.items = [];

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
  };
})();
