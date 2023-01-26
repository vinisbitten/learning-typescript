// return type equals to the type of the parameter
function genericFunc<T>(data: T): T {
    console.log(data);
    return data;
}

// list of any type
class list<T> {
    // items must be an array of the same type as the list
    items: Array<T> = [];
    // add item to the list -- must be of the same type as the list
    add(item: T) {
        this.items.push(item);
    }
    // remove item from the list -- must be of the same type as the list
    remove(item: T) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}

// create a list of numbers
let list1 = new list<number>();
list1.add(1);
list1.add(2);
list1.add(3);
list1.remove(2);
console.log(list1.items);

// create a list of strings
let list2 = new list<string>();
list2.add('a');
list2.add('b');
list2.add('c');
list2.remove('b');
console.log(list2.items);