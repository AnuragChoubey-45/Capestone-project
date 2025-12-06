function validateInput() {
        let val = document.getElementById("screenTime").value;
        let error = document.getElementById("error");
        let num=Number(val);

        if (val === "") {
            error.innerText = "";
            return false;
        }

        if (num < 0 || isNaN(num)) {
            error.innerText = "Please enter a valid screen time (positive number)";
            return false;
        } else {
            error.innerText = "";
            return true;
        }
    }

    function updateScreenTime() {
        if (!validateInput()) return;

        let val = parseFloat(document.getElementById("screenTime").value);

       
        let hours = Math.floor(val);
        let minutes = Math.round((val - hours) * 60);

       
        let summaryH1 = document.querySelector(".card h1");
        if (summaryH1) {
            summaryH1.innerText = hours + "h " + minutes + "min";
        }

        
        let weeklyAvg = 4 + 5/60; 
        let summaryP = document.querySelector(".card p[style*='color: #008000']");
        if (summaryP) {
            if (val < weeklyAvg) {
                summaryP.innerText = "Today’s screen time is slightly lower than the weekly average ✔";
            } else {
                summaryP.innerText = "Today’s screen time is higher than the weekly average ⚠️";
            }
        }

       
        
    }
