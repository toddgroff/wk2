
var ages = [3, 4 , 5, 3, 2, 4, 3];

var ageSum = 0;

// for (var i = 0; i < ages.length; ++i) {
//     ageSum = ageSum + ages[i];
//     //console.log(ages[i]);
// }

ages.forEach(function (age) {
    ageSum= ageSum + age;
})

console.log(ageSum / ages.length);
