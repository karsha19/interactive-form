$("#other-title").hide();


// function for updating design section
function selectDesign () {
  let $design = $("#design");
  let $color = $("#color");

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

  $design.change(function() {
    let optionsHTML = "";
    if ($design.val() === "Select Theme") {
      optionsHTML = `<option>Select Color</option>`;
    } else {
      options[$design.val()].forEach(function(opt) {
        optionsHTML += `<option value="${opt.value}">${opt.text}</option>`;
      });
    }
    $color.html(optionsHTML);
  });
}


selectDesign();


/* 

 <fieldset class="activities">
    <legend>Register for Activities</legend>
    <label><input type="checkbox" name="all"> Main Conference — $200</label>
    <label><input type="checkbox" name="js-frameworks"> JavaScript Frameworks Workshop — Tuesday 9:00 - 12:00, $100</label>
    <label><input type="checkbox" name="js-libs"> JavaScript Libraries Workshop — Tuesday 13:00 - 16:00, $100</label>
    <label><input type="checkbox" name="express"> Express Workshop — Tuesday 9:00 - 12:00, $100</label>
    <label><input type="checkbox" name="node"> Node.js Workshop — Tuesday 13:00 - 16:00, $100</label>          
    <label><input type="checkbox" name="build-tools"> Build tools Workshop — Wednesday 9:00 - 12:00, $100</label>
    <label><input type="checkbox" name="npm"> npm Workshop — Wednesday 13:00 - 16:00, $100</label>    	
  </fieldset>
  
*/

// function to parse each label and retrun an object with name, time, cost and weekday.
function getEventInfo($label) {
  let $input = $label.find("input");
  let name = $input.attr("name");
  let time = $label.text().match(/(\d{1,2}:\d{2})/g);
  let cost = $label.text().match(/\$(\d{3})/g);
  let weekday = $label.text().match(/(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)/g);
  return {
    name: name,
    time: time,
    cost: cost,
    weekday: weekday
  };
}

// function to extract names, times, costs and weekdays from all labels and store in an array.
function getEvents() {
  let $labels = $(".activities label");
  let events = [];
  $labels.each(function() {
    events.push(getEventInfo($(this)));
  });
  return events;
}

console.log(getEvents());

// function to disable competing labels if they have overlap with selected label.
function disableOverlap($selectedLabel, $labels) {
  
  for (lab of $labels) {
    console.log(lab.name + " " + lab.weekday);
    let event = getEventInfo(lab);
    let selectedEvent = getEventInfo($selectedLabel);

    if (event.name != selectedEvent.name && event.weekday == selectedEvent.weekday) {
      lab.find("input").attr("disabled", true);
      console.log(lab.name + " and " + selectedEvent.name + " have overlap");
    }
  }
}

// function to notice changes in the activities when user selects or deselects an event.
function selectActivities() {
  let $activities = $(".activities");
  let $labels = $(".activities label");
  
  $activities.change(function(e) {
    let $label = $(e.target).parent();
    if ($(e.target).is(":checked")) {
      disableOverlap($label, $labels);
    } else {
      $label.find("input").attr("disabled", false);
    }
  });
}

selectActivities();