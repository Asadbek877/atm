let totalBalance = 50000;

        function hisoblash(value) {
            if (totalBalance >= value) {
                totalBalance -= value;
                // console.log( '  Qolgan balans: ' + totalBalance + ' so\'m.');
                document.getElementById("hisob").innerText = totalBalance;
                window.location.href = "/bankamat1/5-rasm/index.html";
            } else {
               document.getElementById("hisob").innerText = "hisobingizda yetarli mablah mavjutemas"
            }
        }