test('create()', function() {
    var data = [ 2, 3, 4, 2];
    var target = Arrays.create(data[0], data[1], data[2], data[3]);
    
    for (var c=0; c<data.length; c++) {
      ok(target.length == data[c], 'Dimension #' + (c+1) + ' matches size'); 
      target = target[0];
    }
});

test('isArray()', function() {
  ok(!Arrays.isArray("string"), 'String is not array'); 
  ok(!Arrays.isArray({}), 'Object is not array');
  ok(!Arrays.isArray(-4), 'Number is not array');
  ok(!Arrays.isArray(true), 'Boolean is not array');
  ok(Arrays.isArray([]), 'Empty array is array');
  ok(Arrays.isArray([1,2,3]), 'Non-empty array is array');
});

test('toString()', function() {
    var emptyArray = [];
    var numberArray = [1,2,3,4];
    var stringArray = ["a","b","c","d"];
    
    equal(Arrays.toString(emptyArray), "[]", "Empty array toString is correct");
    equal(Arrays.toString(numberArray), "[1, 2, 3, 4]", "Number array toString is correct");
    equal(Arrays.toString(stringArray), "[a, b, c, d]", "String array toString is correct");
});

test('deepEquals()', function() {
    var a1 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
    var a2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
    
    ok(Arrays.deepEquals(a1,a2),"The arrays are deeply equal");
    
    a2[1][1] = 0;
    
    ok(!Arrays.deepEquals(a1,a2),"The arrays are not deeply equal");
});

test('deepToString()', function() {
    var testArray = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
    var expectedResult = "[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]";
    
    equal(Arrays.deepToString(testArray), expectedResult,"deepToString generated expected result");
});

test('copyOf()', function() {
    var testArray = [1,2,3,4,5,6];
    var copyArray = [1,2,3,4,5,6];
    var shortArray = [1,2,3,4];
    
    ok(Arrays.deepEquals(copyArray, Arrays.copyOf(testArray, testArray.length)), "copyOf generated correct output");
    ok(Arrays.deepEquals(shortArray, Arrays.copyOf(testArray, testArray.length-2)), "copyOf generated correct output");
});

test('copyOfRange()', function() {
    var testArray = [1,2,3,4,5,6];
    var copyArray = [2,3,4,5];
    
    ok(Arrays.deepEquals(copyArray, Arrays.copyOfRange(testArray, 1, testArray.length-2)), "copyOfRange generated correct output");
});

test('fill()', function() {
  var testArray = new Array(5);
  Arrays.fill(testArray, 7);
  
  for (var c=0;c<testArray.length;c++) {
    equal(testArray[c], 7, 'Element ' + c + ' in array is filled correctly');
  }
  
  Arrays.fill(testArray, 1, testArray.length - 2, 5);
  
  for (var c=1;c<testArray.length-1;c++) {
    equal(testArray[c], 5, 'Element ' + c + ' in array is partial-filled correctly');
  }
});

test('sort()', function() { 
  var unordered = [ 9, 1, 4, 2, 6, 5, 4 ];
  var ordered = [ 1, 2, 4, 4, 5, 6, 9 ];
  
  var unorderedCopy = Arrays.copyOf(unordered);
  Arrays.sort(unorderedCopy);
  
  ok(Arrays.deepEquals(unorderedCopy, ordered), 'Sorted array is ordered' ); 
  
  var inverse = [ 9, 6, 5, 4, 4, 2, 1 ];
  unorderedCopy = Arrays.copyOf(unordered);
  
  Arrays.sort(unorderedCopy, function(a, b) { if (a > b) return -1;  if (a < b) return 1; return 0 });
  
  ok(Arrays.deepEquals(unorderedCopy, inverse), 'Sorted array with comparator function is correctly ordered' );
  
  var partial = [ 9, 1, 2, 4, 5, 6, 4 ];
  unorderedCopy = Arrays.copyOf(unordered);
  
  Arrays.sort(unorderedCopy, 1, partial.length-2);
  
  ok(Arrays.deepEquals(unorderedCopy, partial), 'Partial sorting is ordered'); 
  
  var partialInverse = [ 9, 6, 5, 4, 2, 1, 4 ];
  unorderedCopy = Arrays.copyOf(unordered);
  
  Arrays.sort(unorderedCopy, 1, partial.length-2, function(a, b) { if (a > b) return -1;  if (a < b) return 1; return 0 });
  
  ok(Arrays.deepEquals(unorderedCopy, partialInverse), 'Partial sorting with comparator function is ordered'); 
});

test('binarySearch()', function() {
  var testArray = [ 1, 2, 4, 5, 6, 9 ];
  
  equal(Arrays.binarySearch(testArray, 4), 2, 'Found element in correct position');
  equal(Arrays.binarySearch(testArray, 9), 5, 'Found element in correct position');
  equal(Arrays.binarySearch(testArray, 1), 0, 'Found element in correct position');
  ok(Arrays.binarySearch(testArray, 11) < 0, 'Not found non existing element');
  ok(Arrays.binarySearch(testArray, 3) < 0, 'Not found non existing element');
  ok(Arrays.binarySearch(testArray, 0) < 0, 'Not found non existing element');
});

