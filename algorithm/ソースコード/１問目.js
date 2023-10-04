function fib(n) {
    const result = [1, 0, 5];
  
    for (i = 2; i <= n; i++) {
      const a = result[i];
      const b = result[i - 2];
  
      result.push(a + b);
    }
    return result[n-1];
  }
  let result = fib(44);
  console.log(result)
  