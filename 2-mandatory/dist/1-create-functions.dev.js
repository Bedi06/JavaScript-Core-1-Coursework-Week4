"use strict";

/*
Write a function that:
- Accepts an array as a parameter.
- Returns a new array containing the first five elements of the passed array.
*/
function first5(arr) {
  var result = arr.slice(0, 6);
  return result;
}
/*
Write a function that:
- Accepts an array as a parameter.
- Returns a new array containing the same elements, except sorted.
*/


function sortArray(arr) {
  var sortedArr = arr.sort();
  return sortedArr;
}
/*
NOTE: This exercise is the same as one you did last week - try to do it again using things you learnt this week.
Think about what is better about this solution than your one last week, and what is worse.

Write a function that:
- Takes an array of strings as input.
- Removes any spaces in the beginning or end each string.
- Removes any forward slashes (/) in the strings.
- Makes the strings all lowercase.
*/


function tidyUpString() {}
/*
Write a function that:
- Takes an array and an index as input.
- Returns a new array containing the same elements, but without the element at the passed index.
*/


function remove() {}
/*
Write a function that:
- Takes an array of numbers as input.
- Returns an array of strings formatted as percentages (e.g. 10 => "10%").
- The numbers must be rounded to 2 decimal places.
- Numbers greater 100 must be replaced with 100.
*/


function formatPercentage() {}
/* ======= TESTS - DO NOT MODIFY ===== */


test("first5 function works for more than five elements", function () {
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  var copyOfOriginal = numbers.slice();
  expect(first5(numbers)).toEqual([1, 2, 3, 4, 5]); // Make sure first5 didn't change its input array.

  expect(numbers).toEqual(copyOfOriginal);
});
test("first5 function returns a a smaller array for fewer than five elements", function () {
  var letters = ["z", "y", "x"];
  var copyOfOriginal = letters.slice();
  expect(first5(letters)).toEqual(["z", "y", "x"]); // Make sure first5 didn't change its input array.

  expect(letters).toEqual(copyOfOriginal);
});
test("sortArray function returns a sorted version of the array", function () {
  expect(sortArray(["a", "n", "c", "e", "z", "f"])).toEqual(["a", "c", "e", "f", "n", "z"]);
});
test("sortArray function doesn't change the passed in array", function () {
  var before = ["a", "n", "c", "e", "z", "f"];
  var copy = before.slice();
  sortArray(before);
  expect(before).toEqual(copy);
});
test("tidyUpString function works", function () {
  expect(tidyUpString(["/Daniel", " /Sanyia", "AnTHonY", "irina", " Gordon", "ashleigh   ", "   Alastair  ", " anne marie  "])).toEqual(["daniel", "sanyia", "anthony", "irina", "gordon", "ashleigh", "alastair", "anne marie"]);
});
describe("remove function", function () {
  test("removes index 0", function () {
    expect(remove([1, 2, 3], 0)).toEqual([2, 3]);
  });
  test("removes middle index", function () {
    expect(remove([1, 2, 3, 4, 5], 2)).toEqual([1, 2, 4, 5]);
  });
  test("removes end index", function () {
    expect(remove([1, 2, 3, 4, 5], 4)).toEqual([1, 2, 3, 4]);
  });
  test("removes only index", function () {
    expect(remove(["hi"], 0)).toEqual([]);
  });
  test("ignores missing index", function () {
    expect(remove(["hi"], 10)).toEqual(["hi"]);
  });
  test("doesn't modify input array", function () {
    var initial = [1, 2, 3];
    remove(initial, 1);
    expect(initial).toEqual([1, 2, 3]);
  });
});
test("formatPercentage function works", function () {
  expect(formatPercentage([23, 18.103, 187.2, 0.372])).toEqual(["23%", "18.1%", "100%", "0.37%"]);
});