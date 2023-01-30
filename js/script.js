$("#other-title").hide();


// function for updating design section
function selectDesign () {
  let design = $("#design");
  let color = $("#color");

  // object structure with theme name as keys, and array of objects as values
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

  design.change(function() {
    let optionsHTML = "";
    if (design.val() === "Select Theme") {
      optionsHTML = `<option>Select Color</option>`;
    } else {
      options[design.val()].forEach(function(opt) {
        optionsHTML += `<option value="${opt.value}">${opt.text}</option>`;
      });
    }
    color.html(optionsHTML);
  });
}


selectDesign();

function selectActivity() {
  let $activities = $(".activities");
  let totalDisplay = $("p");
  let totalCost = 0;

  let conflictingTimeSlots = {
    "js-frameworks": { "name": "Express Workshop", "time": "Tuesday 9:00 - 12:00", "cost": 100 },
    "express": { "name": "JavaScript Frameworks Workshop", "time": "Tuesday 9:00 - 12:00", "cost": 100 },
    "js-libs": { "name": "Node.js Workshop", "time": "Tuesday 13:00 - 16:00", "cost": 100 },
    "node": { "name": "JavaScript Libraries Workshop", "time": "Tuesday 13:00 - 16:00", "cost": 100 }
  };


}
