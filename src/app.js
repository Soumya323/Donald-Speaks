import "./styles.css";

var textarea = document.querySelector("#text-area");
var button = document.querySelector("#translate-button");
var resultTextArea = document.querySelector("#result-text-area");

button.addEventListener("click", translateClicked);

function translateClicked() {
  if (!checkEmptyTextBox()) {
    var serverURL = "https://api.funtranslations.com/translate/dolan.json?";
    var textQuery = "text=" + textarea.value;
    var queryURL = serverURL + textQuery;

    resultTextArea.value = "donald translating...  quack quack quackkk.... ";

    fetch(queryURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        updateResultUI(JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Error", error);
      });

    // TestResult("Hey kya bolti tuuu");
  } else {
    alert("Please enter some text.");
  }
}

function checkEmptyTextBox() {
  if (textarea.value == "") return true;
  else return false;
}

function updateResultUI(jsondata) {
  const data = JSON.parse(jsondata);
  var result = data.contents.translated;
  resultTextArea.value = result;
}

function TestResult(data) {
  resultTextArea.value = data;
}
