const createNewSheetButton = document.getElementById("create-new-sheet-button");


let sheetCounter = 2; 


function createNewSheet() {
    
    resetDefaultOptions();
    const sheetName = "Sheet" + sheetCounter;


    const newSheetTab = document.createElement("div");
    newSheetTab.className = "tab";
    newSheetTab.textContent = sheetName;
    

     newSheetTab.addEventListener("click", switchToSheet);

   const sheetTabs = document.getElementById("sheet-tabs");
    sheetTabs.appendChild(newSheetTab);

 sheetCounter++;
}

function switchToSheet(event) {
    console.log("Switching to a sheet");
     const allTabs = document.querySelectorAll(".tab");
    allTabs.forEach(tab => tab.classList.remove("active-tab"));

    const clickedTab = event.target;
    clickedTab.classList.add("active-tab");

    // Switch the content to the corresponding sheet (you should customize this part)
    const sheetContent = document.getElementById("sheet-content");
    sheetContent.innerHTML = ""; // Clear existing content
    const sheetName = clickedTab.textContent;
    const newSheetContent = document.createElement("div");
    newSheetContent.className = "sheet-content"; // You may need to define the CSS styles for this class
    newSheetContent.textContent = "Content of " + sheetName;
    sheetContent.appendChild(newSheetContent);
}




function resetDefaultOptions() {
    const fontFamilyDropdown = document.getElementById("font-family-dropdown");
    fontFamilyDropdown.value = "Courier New, monospace";

    const fontSizeInput = document.getElementById("font-size-input");
    fontSizeInput.value = "16";

    // Reset text alignment to "start"
    const textAlignmentButtons = document.querySelectorAll(".data-value");
    textAlignmentButtons.forEach(button => {
        if (button.getAttribute("data-value") === "start") {
            button.classList.add("active-option");
        } else {
            button.classList.remove("active-option");
        }
    });

   
    const textColorInput = document.getElementById("color-picker");
    textColorInput.value = "#000000";

    const bgColorInput = document.getElementById("bgcolor-picker");
    bgColorInput.value = "#ffffff";


    const expressionInput = document.getElementById("expression-input");
    expressionInput.value = "";clearCellData();
}

function clearCellData() {
    const cells = document.querySelectorAll(".row div");
    cells.forEach(cell => {
        cell.textContent = "";
        cell.backgroundColor="white;"
    });
}