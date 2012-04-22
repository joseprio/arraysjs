Arrays.js
=========

This library implements an API similar to the Java Arrays helper class; it's
purpose is to ease the transition from Java to JavaScript, and at the same time
offer better array handling.

New functions:
`Arrays.create(m, n, ...)`
Creates a new multidimensional array of dimensions m**n**...

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