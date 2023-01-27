$("#other-title").hide();

// $("#design").change(function() {
//     let $design = $(this).val();

//     console.log($design);

//     if ($design == "js puns") {
//         $("#colors-js-puns").show();
//         //hide all the other options
//         $("#color option").not(":contains('JS Puns')").hide();
//     } else if ($design == "heart js") {
//         $("#colors-js-puns").show();
//         $("#color option:contains('I <3 JS')").show();
//         //hide all the other options
//         $("#color option").not(":contains('I <3 JS')").hide();
//     } else {
//         $("#colors-js-puns").hide();
//     }
// });

document.getElementById("design").addEventListener("change", function() {
    var colorSelect = document.getElementById("color");
    var selectedDesign = this.value;
  
    // Hide all options
    for (var i = 0; i < colorSelect.options.length; i++) {
      colorSelect.options[i].style.display = "none";
    }
  
    // Show options for selected theme
    if (selectedDesign == "js puns") {
      for (var i = 1; i < 4; i++) {
        colorSelect.options[i].style.display = "block";
      }
    } else if (selectedDesign == "heart js") {
      for (var i = 4; i < colorSelect.options.length; i++) {
        colorSelect.options[i].style.display = "block";
      }
    }
  });
  
  
  
  