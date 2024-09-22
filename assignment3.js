function* generatePrimes(limit) {
    function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    for (let num = 2; num <= limit; num++) {
      if (isPrime(num)) {
        yield num;
      }
    }
  }
  
 
  const limit = 50;
  const primes = generatePrimes(limit);
  
  for (const prime of primes) {
    console.log(prime);
  }
  