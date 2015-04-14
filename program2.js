var array = process.argv;
var summed = 0;
for (i = 2; i < array.length; i++) {
  summed += Number(array[i]);
}
console.log(summed);
