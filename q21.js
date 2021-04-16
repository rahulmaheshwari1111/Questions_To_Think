const clothes = ['jacket', 't-shirt'];
clothes.length = 0;

clothes[0]; // => ???


// As result when JavaScript executes clothes.length = 0, all clothes items are deleted.

// clothes[0] is undefined, because clothes array has been emptied.