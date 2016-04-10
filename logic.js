/**
 * Created by zp035497 on 4/10/16.
 */

var connection = new Firebase('https://animalz.firebaseio.com/');
var dogAge = 0;

var writeData = function() {
  connection.set({
    dog: {
      name: "Bob",
      age: dogAge++
    }
  });
};

var showData = function() {
  connection.child("dog").on("value", function(snapshot) {
    alert(snapshot.child('name').val() + ": " + snapshot.child('age').val());
  });
};


