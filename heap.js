// JS Practices for more heap memory efficiency

var garbages = [1,2,3,4] // add the temporary and unnecessary variables here.

Object.prototype.destroy = (variable) => variable = null;

Array.prototype.unshiftHeap = (array) => {
  const item = array[array.length - 1]
  array.splice(array.indexOf(item), 1)
  return item;
}
Array.prototype.shiftHeap = (array) => {
  const item = array[0]
  array.splice(array.indexOf(item), 1)
  return item;
}
