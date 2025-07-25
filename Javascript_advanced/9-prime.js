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
  
  // Measure performance
  const t0 = performance.now();
  countPrimeNumbers();
  const t1 = performance.now();
  
  console.log(
    `Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`
  );