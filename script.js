function init() {
  document.getElementById("output").value = "Ready!";
}

function copyOutput() {
  let copyText = document.getElementById("output");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");
}

function charCount(s) {
  return s.length;
}

function calculateCharsCode() {
  let codeChars = document.getElementById("codeChars");
  let codeCharsP = document.getElementById("codeCharsP");

  if (codeCharsP.style.visibility === "hidden") {
    codeCharsP.style.visibility = "visible";
  }

  codeChars.textContent = charCount(document.getElementById("code").value);
}

function displayStats() {
  let codeChars = charCount(document.getElementById("code").value);
  let golfChars = charCount(document.getElementById("output").value);

  let diffChars = codeChars - golfChars;
  let percentageReduction = (Number(((codeChars - golfChars) / codeChars) * 100).toFixed(2));
  let negativePercentageReduction = - percentageReduction;
  
  document.getElementById("codeChars").textContent = charCount(document.getElementById("code").value);

  document.getElementById("golfChars").textContent = golfChars;
  document.getElementById("charsDiff").textContent = diffChars;
  document.getElementById("percentageReduction").textContent = (negativePercentageReduction < 0 ? "" : "+") + negativePercentageReduction;
  document.getElementById("percentageDiff").textContent = 100 - percentageReduction;
  
  document.getElementById("stats").style.visibility = "visible";
  document.getElementById("copyButton").style.visibility = "visible";
}

function golfcode() {
  const code = document.getElementById("code");
  const minifyBefore = document.getElementById("minifyBefore");
  const output = document.getElementById("output");

  code.value = code.value.replace(/^\s*[\r\n]/gm, ""); // Blank lines
  code.value = code.value.replace(/\s*$/gm, ""); // Trailling spaces at end of lines


  let codeToGolf;
  if (minifyBefore.checked) {
    codeToGolf = minifyCode(code);
  } else {
    codeToGolf = code.value;
  }


  try {
    if (codeToGolf.length % 2 !== 0) {
      codeToGolf = codeToGolf.concat(" ");
    }

    if (codeToGolf.includes("+ ") || codeToGolf.includes(". ")) {
      codeToGolf = codeToGolf.replace("+ "," +").replace(". "," .");

      if (document.getElementById("errorAlertDiv").childElementCount === 0) {
        let errorAlert = document.createElement("p");
        let warning = document.createElement("p");
        
        errorAlert.textContent = "Alert: Your code contains \"+ \" or \". \", and this causes a bug which reverses a part of the output. Consider removing this from your input code if the output does not work.";
        warning.textContent = "Warning: Since these substrings were found in your code, they all got replaced from \"+ \" to \" +\" and from \". \" to \" .\". If the result code is not working as expected, consider refactoring your code.";
        
        errorAlert.style.cssText = "font-size: 18px;color: red;";
        warning.style.cssText = "font-size: 18px;color: orange;";
        document.getElementById("errorAlertDiv").appendChild(errorAlert);
        document.getElementById("errorAlertDiv").appendChild(warning);
      }
    } else {
      let errorDiv = document.getElementById("errorAlertDiv");

      errorDiv.querySelectorAll("*").forEach((n) => n.remove());
    }

    let buffer = new ArrayBuffer(codeToGolf.length);
    let bufferView = new Uint16Array(buffer);

    for (let i = 0, strLen = codeToGolf.length; i < strLen - 1; i += 2) {
      let c1 = codeToGolf.charCodeAt(i);
      let c2 = codeToGolf.charCodeAt(i + 1);

      if ((c1 || c2) > 127) {
        throw new Error("At least one of your code char is invalid.\nAll your chars in your code must be in the ASCII table.");
      }

      bufferView[i / 2] = c2 << 8 | c1;
    }

    output.value = "exec(bytes('" + String.fromCharCode.apply(String, bufferView) + "','u16')[2:])";
    displayStats();
  } catch (error) {
    output.value = "An error occured. Refresh the page or check the logs.";
    throw new Error("An error occured:\n" + error +
      "\nPlease visit: https://github.com/clemg/pythongolfer/blob/main/README.md#qa" +
      "\nMaybe the problem will be listed there. If not, you can open an issue."
    );
  }
}

function minifyCode(code) {
  // Minify using python-minifier
  let charsWon, minifiedCode;
  
  let request = new XMLHttpRequest();
  request.open("POST", "https://clemg.pythonanywhere.com/", false);
  request.setRequestHeader('Content-Type', 'application/json');

  request.send(JSON.stringify({
    "code": code.value
  }));
  
  if (request.status === 200) {
    let data = JSON.parse(request.response);
    charsWon = data.chars_won;
    minifiedCode = data.golfed_code;

    return minifiedCode;
  }
  
}


document.addEventListener("DOMContentLoaded", function() {
  document.body.addEventListener("keydown", function(event) {
    if(!(event.keyCode === 13 && (event.metaKey || event.ctrlKey))) { return; }

    golfcode();
  });
});
