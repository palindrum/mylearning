// const btn = document.getElementById('submitBtn');
// const outputMsg = document.getElementById('output');

// btn.addEventListener('click', () => {
//      const inputValue = document.getElementById('inputBox').value;
//      // let msg = bin2dec(inputValue);

//      // function bin2dec(input) {
//      input = inputValue;
//      const digit = input;
//      const length = parseInt(digit.length);
//      console.log("length: " + length);

//      const isBinary = (str) => /^[01]+$/.test(str);

//      let output;
//      if (length > 8 || length < 1) {
//           outputMsg.innerText += "Max 8 Digits Allowed!";
//      } else if (!isBinary(digit)) {
//           outputMsg.innerText += "Only 0 and 1 Allowed!";
//      } else {
//           let total = 0;
//           let n = 1;
//           for (const i of digit) {
//                console.log(i + " * 2^" + (length - n) + " = " + (i * ( 2 ** (length - n))));
//           if (i == "1") {
//                     let temp = ( 2 ** (length - n) );
//                     total += temp;
//                     console.log(temp);  
//                     console.log(total);
//                }
//                n++;
//           }
//           output = total;

//           outputMsg.innerHTML += "input: " + input + "<br>";
//           outputMsg.innerText += "output: " + output;
//      }
//      // return output;
//      // }
// });



const btn = document.getElementById("submitBtn");
const inputBox = document.getElementById("inputBox");
const outputMsg = document.getElementById("output");

btn.addEventListener("click", () => {

     const input = inputBox.value.trim();

     outputMsg.innerHTML = "";

     const isBinary = /^[01]+$/;

     if (input.length < 1 || input.length > 8) {
          outputMsg.innerText = "Max 8 digits allowed.";
          return;
     }

     if (!isBinary.test(input)) {
          outputMsg.innerText = "Only 0 and 1 are allowed.";
          return;
     }

     let total = 0;

     for (let i = 0; i < input.length; i++) {

          const digit = input[i];

          if (digit === "1") {
               const power = input.length - 1 - i;
               total += 2 ** power;
          }
     }

     outputMsg.innerHTML =
          `Binary: ${input}<br>Decimal: ${total}`;

});