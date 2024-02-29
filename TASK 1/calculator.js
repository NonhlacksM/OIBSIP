// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get the display element and all buttons
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.btn');
  let currentInput = ''; // Store the current input
  let lastResult = 0; // Store the last calculated result

  // Add event listeners to all buttons
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      // Check which button was clicked
      if (button.id === 'clear') {
        clearDisplay();
      } else if (button.id === 'equals') {
        calculate();
      } else if (button.id === 'delete'){
          deleteLastCharacter();
      } else if (button.id === 'answer') {
          useLastResult();
      } else if (button.id === 'root') {
          calculateSquareRoot();
      } else if (button.id === 'percent') {
          calculatePercentage();
      } else if (button.id === 'pi') {
          insertPi();
      } else {
        // Append the button's text content to the current input
        currentInput += button.textContent;
        display.textContent = currentInput;
      }
    });
  });

  // Clear the display and reset the current input
  function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
  }

  // Insert the value of pi into the current input
  function insertPi() {
      currentInput += Math.PI;
      display.textContent = currentInput;
  }

  // Calculate the square root of the current input
  function calculateSquareRoot() {
      try {
        const number = parseFloat(currentInput);
        if (isNaN(number) || number < 0) {
          throw new Error('Invalid input');
        }
        const result = Math.sqrt(number);
        display.textContent = result;
        currentInput = result.toString();
      } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
      }
    }

  // Calculate the percentage of the current input
  function calculatePercentage() {
      try {
        const number = parseFloat(currentInput);
        if (isNaN(number)) {
          throw new Error('Invalid input');
        }
        const result = number / 100;
        display.textContent = result;
        currentInput = result.toString();
      } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
      }
  }

  // Evaluate the current input and display the result
  function calculate() {
    try {
      currentInput = currentInput.replace(/(\d+)\(/g, '$1*(');
      const result = eval(currentInput);
      lastResult = result;
      display.textContent = result;
      currentInput = result.toString();
    } catch (error) {
      display.textContent = 'Error';
      currentInput = '';
    }
  }

  // Delete the last character from the current input
  function deleteLastCharacter() {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || '0';
  }

  // Use the last calculated result as the current input
  function useLastResult() {
      currentInput = lastResult.toString();
      display.textContent = currentInput;
  }
});
