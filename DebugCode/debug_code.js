 
    function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
                    let result = DoAll(num1, num2);

                    // Display the result
                    displayResult(result);
                } else {
                    displayResult('Please enter valid numbers');
                }
            }
             let mult;
             let add;
             let sub;
             let div;

            function DoAll(a,b){
               debugger;

                mult= a*b;
                add = a+b;
                sub = a-b;
                div = a/b;

               
                
            }

            function displayResult(result) {
                // Display the result in the paragraph element
                const resultElement = document.getElementById('result');
                resultElement.innerHTML= `<p><strong>Multiplication</strong> : ${mult}</p>
                <p><strong>Addition</strong> : ${add}</p>
                <p><strong>Subtraction</strong> : ${sub}</p>
                <p><strong>Division</strong> : ${div}</p>`;
            }
        