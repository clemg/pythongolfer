function init() {
  output.value = "Ready!";
}

function golfcode() {
  const code = document.getElementById("code");
  const output = document.getElementById("output");

  code.value = code.value.replace(/^\s*[\r\n]/gm, ""); // Blank lines
  code.value = code.value.replace(/\s*$/gm, ""); // Trailling spaces at end of lines

  try {
    if (code.value.length % 2 != 0) {
        code.value = code.value.concat(" ");
    }

    if (code.value.includes("+ ") || code.value.includes(". ")) {
      if (document.getElementById("errorAlertDiv").childElementCount === 0) {
        var errorAlert = document.createElement("p");
        errorAlert.textContent = "Alert: Your code contains \"+ \" or \". \", and this causes a bug which reverses a part of the output. Consider removing this from your input code if the output does not work.";

        document.getElementById("errorAlertDiv").appendChild(errorAlert);
      }
    } else {
      var errorDiv = document.getElementById("errorAlertDiv");

      errorDiv.querySelectorAll("*").forEach(n => n.remove());
    }

    var buffer = new ArrayBuffer(code.value.length);
    var bufferView = new Uint16Array(buffer);

    for (var i = 0, strLen = code.value.length; i < strLen - 1; i += 2) {
      var c1 = code.value.charCodeAt(i);
      var c2 = code.value.charCodeAt(i + 1);

      if ((c1 || c2) > 127) {
        throw("At least one of your code char is invalid.");
      }

      bufferView[i / 2] = c2 << 8 | c1;
    }

    output.value = "exec(bytes('" + String.fromCharCode.apply(String, bufferView) + "','u16')[2:])";
    displayStats();
  } catch (error) {
    output.value = "An error occured. Refresh the page or check the logs.";
    console.log("An error occured:\n" + error +
      "\nVisit: https://github.com/clemg/pythongolfer/blob/main/README.md#qa" +
      "\nMaybe the problem will be listed there. If not, you can open an issue."
    );
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.body.addEventListener("keydown", function(event) {
    if(!(event.keyCode == 13 && (event.metaKey || event.ctrlKey))) return;

    golfcode();
  });
});

function copyOutput() {
  var copyText = document.getElementById("output");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");
}

function charCount(s) {
  return s.length;
}

function calculateCharsCode(s) {
  var codeChars = document.getElementById("codeChars");
  var codeCharsP = document.getElementById("codeCharsP");

  if (codeCharsP.style.visibility === "hidden") {
    codeCharsP.style.visibility = "visible";
  }

  codeChars.innerHTML = charCount(code.value);
}

function displayStats() {
  var codeChars = charCount(document.getElementById("code").value);
  var golfChars = charCount(document.getElementById("output").value);

  var diffChars = codeChars - golfChars;
  var percentageReduction = (Number(((codeChars - golfChars) / codeChars) * 100).toFixed(2));
  var negativePercentageReduction = - percentageReduction;

  document.getElementById("golfChars").innerHTML = golfChars;
  document.getElementById("charsDiff").innerHTML = diffChars;
  document.getElementById("percentageReduction").innerHTML = (negativePercentageReduction < 0 ? "" : "+") + negativePercentageReduction;
  document.getElementById("percentageDiff").innerHTML = 100 - percentageReduction;

  document.getElementById("stats").style.visibility = "visible";
  document.getElementById("copyButton").style.visibility = "visible";
}