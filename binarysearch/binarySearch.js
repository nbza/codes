let data = [23, 45, 67, 71, 78, 81, 85, 88, 91, 95];
let find = 88;
let start = 0;
let end = data.length - 1;
let position = undefined;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  // console.warn(data[mid])
  if (data[mid] === find) {
    position = mid;
    break;
  } else if (data[mid] < find) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.warn(position);
