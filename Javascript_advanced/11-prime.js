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
  
  // Defer execution using setTimeout (pushes to end of event loop)
  const t0 = performance.now();
  setTimeout(() => {
    const t0 = performance.now();
  
    for (let i = 0; i < 100; i++) {
      countPrimeNumbers();
    }
  }, 0);
    const t1 = performance.now();
  
    console.log(
      `Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`
    );
 