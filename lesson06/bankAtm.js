var balance = 10000; // Initialize the balance
const DEPOSIT_CAP = 50000;
const LOW_BALANCE_WARNING = 500;

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
        // Radio buttons
        function myfunction(val) {
            if (val == 1) {
                document.getElementById('bank1').innerHTML = "Your Balance is: $" + balance;
                resetOptions();
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
        // Withdrawals
        function getamount() {
            var withdrawAmount = parseFloat(document.getElementById('amount1').value);
            if (withdrawAmount > 0) {
                if (balance - withdrawAmount < 0) {
                    document.getElementById('bank1').innerHTML = "Invalid Amount. Insufficient funds.";
                } else if (balance - withdrawAmount < LOW_BALANCE_WARNING) {
                    if (confirm("This withdrawal will leave your balance below $" + LOW_BALANCE_WARNING + ". Are you sure you want to proceed?")) {
                        balance -= withdrawAmount;
                        document.getElementById('bank1').innerHTML = "You have withdrawn: $" + withdrawAmount + ". Your new balance is: $" + balance;
                    }
                } else {
                    balance -= withdrawAmount;
                    document.getElementById('bank1').innerHTML = "You have withdrawn: $" + withdrawAmount + ". Your new balance is: $" + balance;
                }
            } else {
                document.getElementById('bank1').innerHTML = "Invalid Amount";
            }
            document.getElementById('withdraw').style.display = 'none';
            resetOptions();
        }
    // Deposits
        function depositAmount() {
            var depositAmount = parseFloat(document.getElementById('amount2').value);
            if (depositAmount > 0) {
                if (depositAmount > DEPOSIT_CAP) {
                    document.getElementById('bank1').innerHTML = "Deposit amount exceeds the cap of $" + DEPOSIT_CAP;
                } else {
                    balance += depositAmount;
                    document.getElementById('bank1').innerHTML = "You have deposited: $" + depositAmount + ". Your new balance is: $" + balance;
                }
            } else {
                document.getElementById('bank1').innerHTML = "Invalid Amount";
            }
            document.getElementById('deposit').style.display = 'none';
            resetOptions();
        }

        function resetOptions() {
    // Reset the radio buttons
    var radios = document.getElementsByName('radio');
    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
}