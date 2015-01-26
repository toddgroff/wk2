//learning how to write some of the built-in functions

//indexOf
function indexOf(arr, searchElement, fromIndex) {
    for (var i = 0; i < arr.length; ++i) {
        var currentItem = arr[i];
        if (currentItem === searchElement) {
        return i;
        }
    }
    return -1;
    }
}

//indexesOf, returns array of indices of each element
//in an array that matches a specific value

function indexesOf(arr, searchElement, fromIndex) {
    var result = [];

    for (var i = 0; i < arr.length; ++i) {
        var currentItem = arr[i];
        if (currentItem === searchElement) {
            result.push(i);
        }
    }
    return result;
}
}

var ages = [34, 25, 22]
var index = indexOf([1, 4, 8], 8); // 2
var index2 = indexOf(['a', 'b', 'c'], 'd'); // -1
console.log(index);


}

//filter() method creates a new array with all elements
//that pass the test implement by the provide function
//two parameters, the array to be filtered and the callback
function filter(arr, testFunction) {
    var result = [];
    for (var i = 0; i < arr.length; ++i)
        var currentValue = arr[i];
        if (passesTest(currentValue)) {
            result.push(currentValue);
        }
    }
    return result;
}

var users = ['chris', 'jane', 'carlos', 'tom', 'tim'];
var usersWithC = filter(users, function(userName) {
    var firstChar = userName[0];
    var doesUserNameStartWithC = (firstChar === 'C');
    return doesUserNameStartWithC; //true or false
});
