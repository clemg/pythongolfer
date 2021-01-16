function init() {
  output.value = "Initializing...";
  languagePluginLoader
    .then(() => (output.value = "Ready!"))
    .catch(() => output.value = "An error occured. Refresh the page or check the logs.");
}

function render(s) {
  output.value = "exec(bytes('" + s + "','u16')[2:])";
}

function golfcode() {
  const code = document.getElementById("code");
  const output = document.getElementById("output");
  try {
    if (code.value.length % 2 != 0) {
      code.value = code.value.concat(" ");
    }

    pyodide.runPythonAsync(`"""` + code.value + `""".encode().decode('utf-16')`)
      .then(output => render(output))
      .catch((error) => render(error));
    displayStats();
  } catch (error) {
    output.value = "An error occured. Refresh the page or check the logs.";
    console.log("An error occured:\n" + error +
      "\nThis can be because you exceeded memory usage for now. Please try again later.\n" +
      "Pro tip: it might work in private browsing.");
  }
}

function copyOutput() {
  var copyText = document.getElementById("output");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");
}

function byteCount(s) {
  return encodeURI(s).split(/%(?:u[0-9A-F]{2})?[0-9A-F]{2}|./).length - 1;
}

function calculateBytesCode(s) {
  var codeBytes = document.getElementById("codeBytes");
  var codeBytesP = document.getElementById("codeBytesP");

  if (codeBytesP.style.visibility === "hidden") {
    codeBytesP.style.visibility = "visible";
  }
  codeBytes.innerHTML = byteCount(code.value);
}

function displayStats() {
  var codeBytes = byteCount(document.getElementById("code").value);
  var golfBytes = byteCount(document.getElementById("output").value);

  var diffBytes = codeBytes - golfBytes;
  var percentageDiff = (Number(((codeBytes - golfBytes) / codeBytes) * 100).toFixed(2));

  document.getElementById("golfBytes").innerHTML = golfBytes;
  document.getElementById("bytesDiff").innerHTML = diffBytes;
  document.getElementById("percentageDiff").innerHTML = percentageDiff;
  
  document.getElementById("stats").style.visibility = "visible";
  document.getElementById("copyButton").style.visibility = "visible";
}