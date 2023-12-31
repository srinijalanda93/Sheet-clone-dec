const activeCellElement = document.getElementById("active-cell");
const boldButton = document.getElementById("bold");
const italicButton = document.getElementById("italic");
const underlineButton = document.getElementById("underline");
activeCellElement.addEventListener("focus", oncellfocus);


let activeCell = null;
let defaultop;

let fontsizebut = document.getElementById("fs");

function toggleButtonStyle(button, isSelected) {
  if (isSelected) {
    button.classList.add("active-option");
  }
  else {
    button.classList.remove("active-option");
  }
}





function highlightoptiononfocus() {
  // if (defaultop.isBoldSelected) {
  //   // currently selected cell in the bold state.
  //   boldButton.classList.add("active-option");
  // } else {
  //   boldButton.classList.remove("active-option");
  // }

  toggleButtonStyle(boldButton, defaultop.isBoldSelected);




  // if (defaultop.isItalicSelected) {
  //   // the current cell is italic text.
  //   italicButton.classList.add("active-option");
  // } else {
  //   italicButton.classList.remove("active-option");
  // }
  toggleButtonStyle(italicButton, defaultop.isItalicSelected);




  // if (defaultop.isUnderLineSelected) {
  //   // the current cell is italic text.
  //   underlineButton.classList.add("active-option");
  // } else {
  //   underlineButton.classList.remove("active-option");
  // }

  toggleButtonStyle(underlineButton, defaultop.isUnderLineSelected);


  highlightTextAlignButtons(defaultop.textAlign);
}
document.addEventListener("input", function (e) {
  // Capture and update the input box when the cell content changes
  if (activeCell) {
    const expressionInput = document.getElementById("expression-input");
    expressionInput.value = activeCell.textContent;
  }
});







function oncellfocus(e) {
  if (activeCell && activeCell.id === e.target.id) {
    return;
  }
  activeCell = e.target;
  activeCellElement.innerText = e.target.id;
  const expressionInput = document.getElementById("expression-input");
  expressionInput.value = e.target.textContent; 
  const computedStyle = getComputedStyle(activeCell);
  defaultop = {
    fontFamily: computedStyle.fontFamily,
    isBoldSelected: computedStyle.fontWeight === "600",
    isItalicSelected: computedStyle.fontStyle === "italic",
    isUnderLineSelected: computedStyle.textDecoration.includes("underline"),
    textAlign: computedStyle.textAlign,
    textColor: computedStyle.color,
    backgroundColor: computedStyle.backgroundColor,
    fontSize: computedStyle.fontSize,
  }
  highlightoptiononfocus();



}

function onclickbold(boldbutton) {
  //1. toggle active-option class for button
  //2. get the seleceted cell
  boldbutton.classList.toggle("active-option");
  if (activeCell) {
    // const fontWeight = getComputedStyle(activeCell).fontWeight;
    if (defaultop.isBoldSelected) {
      activeCell.style.fontWeight = "400";
    }
    else {
      activeCell.style.fontWeight = "600";
    }
    defaultop.isBoldSelected = !defaultop.isBoldSelected;
  }
}

function onclickitalic(italicbutton) {
  //1. toggle active-option class for button
  //2. get the seleceted cell
  italicbutton.classList.toggle("active-option");
  if (activeCell) {
    //  const italic = getComputedStyle(activeCell).fontStyle;
    if (defaultop.isItalicSelected) {
      activeCell.style.fontStyle = "normal";
    }
    else {
      activeCell.style.fontStyle = "italic";
    }
    defaultop.isItalicSelected = !defaultop.isItalicSelected;
  }
}

function onclickunderline(underlinebutton) {
  //1. toggle active-option class for button
  //2. get the seleceted cell
  underlinebutton.classList.toggle("active-option");
  if (activeCell) {
    if (defaultop.isUnderLineSelected) {
      activeCell.style.textDecoration = "none";
    }
    else {
      activeCell.style.textDecoration = "underline";
    }
    defaultop.isUnderLineSelected = !defaultop.isUnderLineSelected;
  }
}

function highlightTextAlignButtons(textAlignValue) {
  // textAlignValue === "left" => we have to highlight only left button
  // textAlignValue === "right" => we have to highlight only right button
  // textAlignValue === "center" => we have to highlight only center button
  const textAlignElements = document.getElementsByClassName("data-value")
  for (let i = 0; i < textAlignElements.length; i++) {
    if (textAlignElements[i].getAttribute("data-value") === textAlignValue) {
      textAlignElements[i].classList.add("active-option");
    } else {
      textAlignElements[i].classList.remove("active-option");
    }
  }
}

function onclicktextalign(textalignbutton) {
  let selectedvalue = textalignbutton.getAttribute("data-value");
  highlightTextAlignButtons(selectedvalue);

  if (activeCell) {
    activeCell.style.textAlign = selectedvalue;
    defaultop.textAlign = selectedvalue;
  }
}


function onChangeTextColor(textColorInput) {
  let selectedColor = textColorInput.value;
  if (activeCell) {
    activeCell.style.color = selectedColor;
    defaultop.textColor = selectedColor;
  }
}

function onChangeBackgroundColor(textColorInput) {
  let selectedColor = textColorInput.value;
  if (activeCell) {
    activeCell.style.backgroundColor = selectedColor;
    defaultop.backgroundColor = selectedColor;
  }
}

/*
const defaultproperties =
{
 fontFamily:'sans',
  fontSize:16,
  color: "#000",
  backgroundColor:"#fff"

}

function onChangefontsize(fontsizebut)
{
  let  selectedfontsize = fontsizebut.value;
  if (activeCell) {
    activeCell.style.fontSize = selectedfontsize ;
    defaultproperties.fontSize = selectedfontsize;
  }
}*/

function onChangeFontFamily(fontFamilyDropdown) {
  let selectedFontFamily = fontFamilyDropdown.value;
  if (activeCell) {
    activeCell.style.fontFamily = selectedFontFamily;
    defaultop.fontFamily = selectedFontFamily;
  } else {
    // Update the default font family or do something else if no cell is active.
    defaultop.fontFamily = selectedFontFamily;
  }
}


function onChangeFontSize(fontSizeInput) {
  let selectedFontSize = fontSizeInput.value + 'px';
  if (activeCell) {
    activeCell.style.fontSize = selectedFontSize;
    defaultop.fontSize = selectedFontSize;
  } else {
    // Update the default font size or do something else if no cell is active.
    defaultop.fontSize = selectedFontSize;
  }
}