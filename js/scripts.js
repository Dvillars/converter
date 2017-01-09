function celToFah(celsius){
  var result = (celsius * 1.8) + 32;
  return result;
};

function fahToCel(fahrenheit){
  var result = (fahrenheit - 32) / 1.8;
  return result;
};

function asktemp(){
  var result = prompt('what are you converting, celsius = c or farhrenheit = f')
  if (result === 'c') {
    var c = parseFloat(prompt('Enter temp in Celsius:'));
    var x = celToFah(c);
    alert(x);
  } if (result === 'f' ) {
    var f = parseFloat(prompt('Enter temp in Fahrenheit:'));
    var y = fahToCel(f);
    alert(y);
  };
};

//asktemp();


function galToLit(gallons){
  var result = gallons * 3.78541;
  return result;
};

function litToGal(liters){
  var result = liters * .264172;
  return result;
};

function askvol(){
  var result = prompt('what are you converting, gallons = g or liters = l')
  if (result === 'g') {
    var g = parseFloat(prompt('Enter vol in gallons:'));
    var x = galToLit(g);
    alert(x);
  } if (result === 'l' ) {
    var l = parseFloat(prompt('Enter vol in liters:'));
    var y = litToGal(l);
    alert(y);
  };
};

askvol();
