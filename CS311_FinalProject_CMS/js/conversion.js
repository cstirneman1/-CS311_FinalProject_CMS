function convert() {
    try {
      // Get the selected radio button and entered value
      var selectedConversion = document.querySelector('input[name="conversion"]:checked');
      var inputValue = document.getElementById('conversion-value').value;

      // Validate if a radio button is selected and the entered value is a number
      if (!selectedConversion) {
        throw new Error('Please select a conversion.');
      }//end if

      if (isNaN(inputValue) || !inputValue) {
        throw new Error('Please enter a valid numeric value.');
      }//end if

      // Perform the conversion based on the selected radio button
      var result = performConversion(selectedConversion.value, parseFloat(inputValue));

      // Display the result
      document.getElementById('converted-answer').innerText = result;

      // Show the "converted-answer" paragraph
    document.getElementById('converted-answer').style.display = 'block';

    } //end try statement
    catch (error) {
      // Handle exceptions (display an alert for simplicity)
      alert(error.message);
    }//end catch statement
  }//end convert function

  function performConversion(conversionType, inputValue) {
    // switch statement to convert the value based on the conversion selection
    switch (conversionType) {
      case 'Meters to Feet':
        return `${inputValue} Meters is approximately ${(inputValue * 3.28084).toFixed(2)} Feet`;
  
      case 'Kilometers to Miles':
        return `${inputValue} Kilometers is approximately ${(inputValue * 0.621371).toFixed(2)} Miles`;
  
      case 'Celsius to Fahrenheit':
        return `${inputValue} degrees Celsius is approximately ${((inputValue * 9/5) + 32).toFixed(2)} degrees Fahrenheit`;
  
      case 'Kilograms to Pounds':
        return `${inputValue} Kilograms is approximately ${(inputValue * 2.20462).toFixed(2)} Pounds`;
  
      case 'Grams to Ounces':
        return `${inputValue} Grams is approximately ${(inputValue * 0.03527396).toFixed(2)} Ounces`;
  
      case 'Feet to Meters':
        return `${inputValue} Feet is approximately ${(inputValue * 0.3048).toFixed(2)} Meters`;
  
      case 'Miles to Kilometers':
        return `${inputValue} Miles is approximately ${(inputValue * 1.60934).toFixed(2)} Kilometers`;
  
      case 'Fahrenheit to Celsius':
        return `${inputValue} degrees Fahrenheit is approximately ${((inputValue - 32) * 5/9).toFixed(2)} degrees Celsius`;
  
      case 'Pounds to Kilograms':
        return `${inputValue} Pounds is approximately ${(inputValue * 0.453592).toFixed(2)} Kilograms`;
  
      case 'Ounces to Grams':
        return `${inputValue} Ounces is approximately ${(inputValue * 28.3495).toFixed(2)} Grams`;
  
      default:
        throw new Error('Invalid conversion type');
    }
  }
  