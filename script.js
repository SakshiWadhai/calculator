let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        let btnText = e.target.closest("button")?.innerText.trim(); // Handle button click safely

        try {
            if (btnText === "=") {
                string = eval(string) || "0"; // Evaluate safely
                document.querySelector("input").value = string;
            }
            else if (btnText === "AC") {
                string = "";
                document.querySelector("input").value = string;
            }
            else if (e.target.closest("button")?.id === "backspace") { 
                string = string.slice(0, -1);
                document.querySelector("input").value = string;
            }
            
            else if (btnText === "+/-") {
                string *=-1;
                document.querySelector("input").value = string;
            }
            else if (btnText === "%") {
                string = (parseFloat(string) || 0) / 100;
                document.querySelector("input").value = string;
            }
            else {
                console.log(btnText);
                string += btnText;
                document.querySelector("input").value = string;
            }
        } catch (error) {
            string = "Error"; // Handle invalid expressions
            document.querySelector("input").value = string;
        }
    });
});
