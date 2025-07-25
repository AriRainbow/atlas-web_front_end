function countPrimeNumbers() {
    let count = 0;
  
    for (let num = 2; num <= 100; num++) {
      let isPrime = true;
  
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        count++;
      }
    }
  
    return count;
  }
  
  // Measure performance for running it 100 times
  const t0 = performance.now();
  
  for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }
  
  const t1 = performance.now();
  
  console.log(
    `Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`
  );