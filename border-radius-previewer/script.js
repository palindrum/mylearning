// const box = document.getElementById('displayBox');

// const topLeft = document.getElementById('top-left');
// const topRight = document.getElementById('top-right');
// const bottomLeft = document.getElementById('bottom-left');
// const bottomRight = document.getElementById('bottom-right');

// const output = document.getElementById('output-css');
// const copyBtn = document.getElementById('copyBtn');

// let topLeftValue = topLeft.value;
// let topRightValue = topRight.value;
// let BottomLeftValue = bottomLeft.value;
// let BottomRightValue = bottomRight.value;

// let outputCSS = `border-radius: ${topLeftValue}px ${topRightValue}px ${BottomRightValue}px ${BottomLeftValue}px;`;
// output.textContent = outputCSS;
// box.style = outputCSS;

// document.addEventListener('DOMContentLoaded', () => {

//      topLeft.addEventListener('input', (e) => {
//           topLeftValue = e.target.value;
//           outputCSS = `border-radius: ${topLeftValue}px ${topRightValue}px ${BottomRightValue}px ${BottomLeftValue}px;`;
//           output.textContent = outputCSS;
//           box.style = outputCSS;
//      });
//      topRight.addEventListener('input', (e) => {
//           topRightValue = e.target.value;
//           outputCSS = `border-radius: ${topLeftValue}px ${topRightValue}px ${BottomRightValue}px ${BottomLeftValue}px;`;
//           output.textContent = outputCSS;
//           box.style = outputCSS;
//      });
//      bottomLeft.addEventListener('input', (e) => {
//           BottomLeftValue = e.target.value;
//           outputCSS = `border-radius: ${topLeftValue}px ${topRightValue}px ${BottomRightValue}px ${BottomLeftValue}px;`;
//           output.textContent = outputCSS;
//           box.style = outputCSS;
//      });
//      bottomRight.addEventListener('input', (e) => {
//           BottomRightValue = e.target.value;
//           outputCSS = `border-radius: ${topLeftValue}px ${topRightValue}px ${BottomRightValue}px ${BottomLeftValue}px;`;
//           output.textContent = outputCSS;
//           box.style = outputCSS;
//      });

//      copyBtn.addEventListener('click', () => {
//           let copyText = output.innerText;
//           navigator.clipboard.writeText(copyText);
//           alert(`Copied: ${copyText}`);
//      });

// });



const box = document.getElementById("displayBox");

const topLeft = document.getElementById("top-left");
const topRight = document.getElementById("top-right");
const bottomLeft = document.getElementById("bottom-left");
const bottomRight = document.getElementById("bottom-right");

const output = document.getElementById("output-css");
const copyBtn = document.getElementById("copyBtn");

function updateBorderRadius() {

     const tl = topLeft.value;
     const tr = topRight.value;
     const bl = bottomLeft.value;
     const br = bottomRight.value;

     const cssText = `border-radius: ${tl}px ${tr}px ${br}px ${bl}px;`;

     output.textContent = cssText;

     box.style.borderRadius = `${tl}px ${tr}px ${br}px ${bl}px`;
}

document.addEventListener("DOMContentLoaded", () => {

     updateBorderRadius();

     topLeft.addEventListener("input", updateBorderRadius);
     topRight.addEventListener("input", updateBorderRadius);
     bottomLeft.addEventListener("input", updateBorderRadius);
     bottomRight.addEventListener("input", updateBorderRadius);

     copyBtn.addEventListener("click", async () => {

          const copyText = output.innerText;

          try {
               await navigator.clipboard.writeText(copyText);
               alert(`Copied: ${copyText}`);
          } catch (err) {
               alert("Clipboard copy failed.");
          }

     });

});