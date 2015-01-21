// TODO: Your job is to write logic that will
// give the user one of three random fortunes
//
// Use the alert("Some text value") function
// to tell the user their fortune.


fortuneNum = Math.floor(Math.random() * 3);

if (fortuneNum === 0) {
    alert ("You're going to survive this week")
}   else if (fortuneNum === 1) {
    alert ("You will get 0 sleep this week")
}   else {
    alert ("You're going to die this week")
}
