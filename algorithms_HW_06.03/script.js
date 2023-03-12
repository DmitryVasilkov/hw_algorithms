// Написать рекурсивную реализацию бинарного поиска
function binarySearchRec(arr, num) {
    return find(arr, num, 0, arr.length - 1);}
  
  function find(arr, num, left, right) {
    const midle = left + parseInt((right - left) / 2);
    if (right < left) {
      return 777;
    } else if (num === arr[midle]) {
      return midle;
    } else if (num < arr[midle]) {
      return find(arr, num, left, midle - 1);
    } else {
      return find(arr, num, midle + 1, right);
    }
  }
  
  let arr = [7, 12, 24, 52, 8, 1, 383].sort((x, y) => x - y);
  document.write(arr + "<br>");
  let x = 1;
  
  document.write(
    binarySearchRec(arr, x) + "<br>"
  );