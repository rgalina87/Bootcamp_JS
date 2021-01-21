  var bottles;
  for (count = 99; count >= 1; count--) {
    if (count == 1) {
    bottles = 'bottle';
  } else {
    bottles = 'bottles';
  }
  console.log(count+ " " + bottles + " of beer on the wall.");
  if (count < 99){
    console.log('');
    console.log (count+ " "+bottles+" of beer on the wall.");
  }
  console.log(count+" "+bottles+" of beer");
  if(count == 1){
  console.log("Take one down, pass it around,");
} else {
  console.log("Take one down, pass them around,");
}
  if (count == 1)
  console.log("No bottles");
}
