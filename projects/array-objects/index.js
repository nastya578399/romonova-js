

arr.forEach((item, i, arr) => {
  alert( i + ": " + item + " (массив:" + arr + ")" );
});



let newArray = ar.map((n) => n * n);




let result = arr.reduce((sum, current) => {
  return sum + current;
}, 0); 





function upperProps(obj) {
  return Object.keys(obj).map(key => key.toUpperCase())
}





function createProxy(obj) {
}

export { forEach, map, reduce, upperProps, createProxy };
