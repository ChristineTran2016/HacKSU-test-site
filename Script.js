//alert ('wow, we linked to Javascript!');

var myNumber = 0;

function myFunction() {
//  var foo = 2;
//  var boo = 5;
//  alert(foo+boo);

  var text = document.getElementById('myText').value;
  myNumber = myNumber + text;
//  myNumber = myNumber + 1;
//  alert(myNumber);
  document.getElementById('output').innerHTML = text;
}

var newOutput = '';

newText("boots and ");

function newText(thing) {
//  newOutput = newOutput + thing;

//  document.getElementById('output').innerHTML = newOutput;

//  console.log(thing);

  if (thing > 5) {
    alert('wow big number!');
  } else {
    alert('dat number tiny!');
  }
  }
}
