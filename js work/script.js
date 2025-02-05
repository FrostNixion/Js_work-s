
        function calculateSquare() {
            const side = parseFloat(document.getElementById("square-side").value) || 0;
            const area = side * side;
            const perimeter = 4 * side; 
            document.getElementById("square-area").textContent = `Alan: ${area}`;
            document.getElementById("square-perimeter").textContent = `Çevre: ${perimeter}`;
        }


        let count = 0;
        function increment() {
            count += 1;
            document.getElementById("counter").textContent = count;
        }
        function decrement() {
            count--;
            document.getElementById("counter").textContent = count;
        }
        function reset() {
            count = 0;
            document.getElementById("counter").textContent = count;
        }





        
        function checkOddEven() {
            const number = parseInt(document.getElementById("odd-even-number").value) || 0;
            const result = (number % 2 === 0) ? "Çift" : "Tek"; 
            document.getElementById("odd-even-result").textContent = `Sonuç: ${number} bir ${result} sayıdır.`;
        }




        
        function calculateSum() {
            const num1 = parseFloat(document.getElementById('calc-number1').value);
            const num2 = parseFloat(document.getElementById('calc-number2').value);

            if (isNaN(num1) || isNaN(num2)) {
                document.getElementById('calc-result').textContent = "Lütfen her iki sayıyı da girin.";
                return;
            }
            const sum = num1 + num2;
            document.getElementById('calc-result').textContent = `Sonuç: ${sum}`;
        }
