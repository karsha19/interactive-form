$("#other-title").hide();

let designSelect = document.getElementById("design");
let colorSelect = document.getElementById("color");

let options = {
  "js puns": [
    {value: "cornflowerblue", text: "Cornflower Blue (JS Puns shirt only)"},
    {value: "darkslategrey", text: "Dark Slate Grey (JS Puns shirt only)"},
    {value: "gold", text: "Gold (JS Puns shirt only)"}
  ],
  "heart js": [
    {value: "tomato", text: "Tomato (I &#9829; JS shirt only)"},
    {value: "steelblue", text: "Steel Blue (I &#9829; JS shirt only)"},
    {value: "dimgrey", text: "Dim Grey (I &#9829; JS shirt only)"}
  ]
};

designSelect.addEventListener("change", function() {
  let optionsHTML = "";
  if (designSelect.value === "Select Theme") {
    optionsHTML = `<option>Select Color</option>`;
  } else {
    options[designSelect.value].forEach(function(opt) {
      optionsHTML += `<option value="${opt.value}">${opt.text}</option>`;
    });
  }
  colorSelect.innerHTML = optionsHTML;
});

  
  
  
  