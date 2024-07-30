function factorial(n) {
    let result = 1;
    let i = 1;
  
    while (i <= n) {
      result *= i;
      i++;
    }
  
    return result;
  }
  
  // Test the function
  const num = prompt("Enter a number: ");
  const fact = factorial(num);
  console.log(`Factorial of ${num} is: ${fact}`);