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

// function to parse each label and retrun an object with name, time, cost and weekday.
function getEventInfo(label) {
  let $input = $(label).find("input");
  let $name = $input.attr("name");
  let $time = $(label).text().match(/(\d{1,2}:\d{2})/g);
  let $cost = $(label).text().match(/\$(\d{3})/g);
  let $weekday = $(label).text().match(/(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)/g);
  return {
    name: $name,
    time: $time,
    cost: $cost,
    weekday: $weekday
  };
}

// variable to keep track of total cost for selected events.
let totalCost = 0;

// helper function to check if the parameter is not null, 
// and access the first element of the array.
function getFirstElement(array) {
  if (array) {
    return array[0];
  }
}

// helper function to check if the parameter is not null,
// then access the last element of the array.
function getLastElement(array) {
  if (array) {
    return array[array.length - 1];
  }
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
function disableOverlap(selectedLabel, labels) {
  let selectedEvent = getEventInfo(selectedLabel);
  
  for (lab of labels) {
    let event = getEventInfo(lab);
  
    if ( getFirstElement(event.weekday) == getFirstElement(selectedEvent.weekday) &&
         getFirstElement(event.time) == getFirstElement(selectedEvent.time) &&
         getLastElement(event.time) == getLastElement(selectedEvent.time) &&
         event.name != selectedEvent.name) {
      $(lab).find("input").attr("disabled", true);
      console.log(event.name + " and " + selectedEvent.name + " have overlap");
    }
  }
}


// function to update total cost of selected events.
function updateTotalCost(numercialCost) {
  let $labels = $(".activities label");
  $labels.each(function() {
    let $input = $(this).find("input");
    if ($input.is(":checked")) {
      totalCost += numercialCost;
    }
  });
  $(".activities").append(`<p>Total Cost: $ ${totalCost} </p>`);
}


// function to notice changes in the activities when user selects or deselects an event.
function selectActivities() {
  let $labels = $(".activities label");
  $labels.change(function() {
    let $selectedLabel = $(this);
    let costString = getFirstElement(getEventInfo($selectedLabel).cost).replace("$", "");
    let numercialCost = parseInt(costString);
    
    if ($selectedLabel.find("input").is(":checked")) {
      console.log("we are in select activity and is checked " + numercialCost);
      disableOverlap($selectedLabel, $labels);
      updateTotalCost(numercialCost);
    } else {
      $labels.find("input").attr("disabled", false);
    }
    
  });
}

selectActivities();
