class Sieve {

  NthPrime(n) {
    
    if (n < 0) throw new Error("Invalid input: n must be a non-negative integer");
    if (n === 0) return 2; // First prime is always 2


    let limit = this.estimateUpperLimit(n);   // call estimateUpperLimit method to find the upper limit estimate for the nth prime
    return this.segmentedSieve(limit, n);
    

  }

  
  segmentedSieve(limit, targetIndex) {
    const segmentSize = Math.floor(Math.sqrt(limit)) + 1; //This will round down the square root of the limit and will dictate the size of the small sieve
    const smallSieve = this.sieveOfEratosthenes(segmentSize); // Get small primes


    let primes = [...smallSieve]; // Store found primes
    let low = segmentSize, high = 2 * segmentSize;

    while (low < limit) {
      const sieve = new Array(segmentSize).fill(true);
      


      for (let i = 0; i < smallSieve.length; i++) {       // Use small primes to mark non-primes in the segment
        let prime = smallSieve[i];
        let start = Math.max(prime * prime, Math.ceil(low / prime) * prime);
        for (let j = start; j < high; j += prime) {
          sieve[j - low] = false;
        }
      }


      for (let i = 0; i < segmentSize && low + i < limit; i++) {       // Collect primes from this segment
        if (sieve[i]) primes.push(low + i);

      }


      if (primes.length > targetIndex) return primes[targetIndex]; // Stopping point when we reach the required number of primes


      low += segmentSize;  // Move to next segment
      high += segmentSize;
      if (high > limit) high = limit;
    }
  }

  
  sieveOfEratosthenes(limit) { //sieve of eratosthenes that allow me to have the small sieve with the smaller primes 
    const sieve = new Array(limit).fill(true);
    sieve[0] = sieve[1] = false;

    for (let i = 2; i * i < limit; i++) {
      if (sieve[i]) {
        for (let j = i * i; j < limit; j += i) {
          sieve[j] = false;
          
        }
      }
    }

    return sieve.map((isPrime, index) => (isPrime ? index : null)).filter((num) => num !== null);
  }


  estimateUpperLimit(n) {       //This method right here will calculate the size of the upper limit 
    if (n < 6) return 15;  
    return Math.ceil(n * (Math.log(n) + Math.log(Math.log(n))));
    
  }
  
}



const sieve = new Sieve();





module.exports = Sieve;






