function squareIterator(numbers) {
    let index = 0;
    
    return {
      next: function() {
        if (index < numbers.length) {
          const value = numbers[index] ** 2;
          index++;
          return { value, done: false };
        } else {
          return { done: true };
        }
      },
      [Symbol.iterator]: function() {
        return this;
      }
    };
  }
  

  const numbers = [1, 2, 3, 4, 5];
  const iterator = squareIterator(numbers);
  
  for (const square of iterator) {
    console.log(square);
  }
  