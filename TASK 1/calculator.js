document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let lastResult = 0;
    
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        if (button.id === 'clear') {
          clearDisplay();
        } else if (button.id === 'equals') {
          calculate();
        } else if ( button.id === 'delete'){
            deleteLastCharacter();
        } else if (button.id === 'answer') {
            useLastResult();
        }else if (button.id === 'root') {
            calculateSquareRoot();
        }else if (button.id === 'percent') {
            calculatePercentage();
        }else if (button.id === 'pi') {
            insertPi();
        }else {
          currentInput += button.textContent;
          display.textContent = currentInput;
        }
      });
    });
  
    function clearDisplay() {
      currentInput = '';
      display.textContent = '0';
    }

    function insertPi() {
        currentInput += Math.PI; // Insert the value of pi into the current input
        display.textContent = currentInput;
      }

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

    function deleteLastCharacter() {
        currentInput = currentInput.slice(0, -1);
        display.textContent = currentInput || '0';
      }

      function useLastResult() {
        currentInput = lastResult.toString();
        display.textContent = currentInput;
      }
  });
  