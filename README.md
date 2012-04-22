Arrays.js
=========

This library implements an API similar to the Java Arrays helper class; it's
purpose is to ease the transition from Java to JavaScript, and at the same time
offer better array handling.

New functions:

`Arrays.create(m, n, ...)`

Creates a new multidimensional array of dimensions m\*n\*...


`Arrays.isArray(a)`

Returns true if a is an array, false otherwise


Functions equivalent to Java:

`static int binarySearch(Object[] a, int fromIndex, int toIndex, Object key)`

`static int binarySearch(Object[] a, Object key)`

`static boolean equals(Object[] a, Object[] a2)`

`static void fill(Object[] a, int fromIndex, int toIndex, Object val)`

`static void fill(Object[] a, Object val)`

`static void sort(Object[] a)`

`static void sort(Object[] a, Comparator c)`

`static void sort(Object[] a, int fromIndex, int toIndex)`

`static void sort(Object[] a, int fromIndex, int toIndex, Comparator c)`

`static String toString(Object[] a)`

`static boolean deepEquals(Object[] a1, Object[] a2)`

`static String deepToString(Object[] a)`

`static Object[] copyOf(Object[] original, int newLength)`

`static Object[] copyOfRange(Object[] original, int from, int to)`

 
Unimplemented functions:

`static int binarySearch(Object[] a, Object key, Comparator c)`

`static int hashCode(Object[] a)`

`static int deepHashCode(Object[] a)`

`static List	asList(Object[] a)`


MIT License
-----------

Copyright (c) 2012 Josep del Rio

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

