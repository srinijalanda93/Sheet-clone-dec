document.addEventListener("DOMContentLoaded", function () {
    let header = document.getElementById("header");

    for (let i = 65; i <= 90; i++) {
        let char = String.fromCharCode(i);
        const bold = document.createElement("b");
        bold.innerText = char;
        header.appendChild(bold);
    }
    // Create rows with cells 100 times
    for (let i = 1; i <= 100; i++) {
        createAndAppend(i);
    }
});



function createAndAppend(rowNumber) {
    const row = document.createElement("div");
    row.className = "row";

    for (let i = 64; i <= 90; i++) {
        if (i === 64) {
            const b = document.createElement("b");
            b.innerText = rowNumber;
            row.appendChild(b);
        } else {
            const cell = document.createElement("div");
            cell.id = `${String.fromCharCode(i)}${rowNumber}`;
            cell.contentEditable = "true";
            cell.addEventListener("focus", oncellfocus);
            row.appendChild(cell);
        }
    }

    const body = document.getElementById("body");
    body.appendChild(row);
}