var balance = 10000; // Initialize the balance

        function getaction() {
            var p = document.getElementById('number').value;
            var correctPin = 1111;
            if (p == correctPin) {
                document.getElementById("bank").innerHTML = "Please Choose a Transaction";
                document.getElementById('options').style.display = 'block';
            } else {
                document.getElementById("bank").innerHTML = "Invalid Pin";
            }
        }

        function myfunction(val) {
            if (val == 1) {
                document.getElementById('bank1').innerHTML = "Your Balance is: $" + balance;
                document.getElementById('withdraw').style.display = 'none';
                document.getElementById('deposit').style.display = 'none';
            } else if (val == 2) {
                document.getElementById('withdraw').style.display = 'block';
                document.getElementById('deposit').style.display = 'none';
            } else if (val == 3) {
                document.getElementById('deposit').style.display = 'block';
                document.getElementById('withdraw').style.display = 'none';
            } else if (val == 4) {
                document.getElementById('bank').innerHTML = "ATM session exited. Thank you for using our ATM!";
                document.getElementById('options').style.display = 'none';
                document.getElementById('withdraw').style.display = 'none';
                document.getElementById('deposit').style.display = 'none';
            }
        }

        function getamount() {
            var withdrawAmount = parseFloat(document.getElementById('amount1').value);
            if (withdrawAmount > 0 && withdrawAmount <= balance) {
                balance -= withdrawAmount;
                document.getElementById('bank1').innerHTML = "You have withdrawn: $" + withdrawAmount + ". Your new balance is: $" + balance;
            } else {
                document.getElementById('bank1').innerHTML = "Invalid Amount";
            }
            document.getElementById('withdraw').style.display = 'none';
        }

        function depositAmount() {
            var depositAmount = parseFloat(document.getElementById('amount2').value);
            if (depositAmount > 0) {
                balance += depositAmount;
                document.getElementById('bank1').innerHTML = "You have deposited: $" + depositAmount + ". Your new balance is: $" + balance;
            } else {
                document.getElementById('bank1').innerHTML = "Invalid Amount";
            }
            document.getElementById('deposit').style.display = 'none';
        }