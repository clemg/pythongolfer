function init() {
  output.value = "Initializing...";
  languagePluginLoader
    .then(() => {
      output.value = "Ready!";
      document.getElementById("golfit_button").disabled = false;
    })
    .catch(() => output.value = "An error occured. Refresh the page or check the logs.");
}

function golfcode() {
  const code = document.getElementById("code");
  const output = document.getElementById("output");
  try {
    if (code.value.length % 2 != 0) {
      code.value = code.value.concat(" ");
    }

    pyodide.runPythonAsync(`"""` + code.value + `""".encode().decode('utf-16')`)
      .then(result => {
        output.value = "exec(bytes('" + result + "','u16')[2:])";
        displayStats();
      })
      .catch((error) => render(error));
    } catch (error) {
      output.value = "An error occured. Refresh the page or check the logs.";
      console.log("An error occured:\n" + error +
      "\nVisit: https://github.com/Thosquey/pythongolfer/blob/main/README.md#the-site-is-not-loading-what-should-i-do-" +
      "\nThis can be because you exceeded memory usage for now. Please try again later." +
      "\nPro tip: it might work in private browsing.");
    }
}

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