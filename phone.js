$(document).ready(function () { // do this when the document is loaded
    "use strict";
	$("#dialerPage").show(); // show the element with ID "element"
	$("#contactPage").hide(); // hide the element with ID "otherElement"
    $("#addPage").hide();
    $("#helpPage").hide();
});
$("#dialTab").click(function () { // when "button_id" is clicked
    "use strict";
	$("#dialerPage").show(); // show element
	$("#contactPage").hide();	// hide other element
    $("#addPage").hide();
    $("#helpPage").hide();
});
$("#contactTab").click(function () { // when "button_id" is clicked
    "use strict";
	$("#contactPage").show(); // show element
	$("#dialerPage").hide();	// hide other element
    $("#addPage").hide();
    $("#helpPage").hide();
});
$("#addTab").click(function () { // when "button_id" is clicked
    "use strict";
	$("#addPage").show(); // show element
	$("#dialerPage").hide();	// hide other element
    $("#contactPage").hide();
    $("#helpPage").hide();
});
$("#helpTab").click(function () { // when "button_id" is clicked
    "use strict";
	$("#addPage").hide(); 
	$("#dialerPage").hide();	
    $("#contactPage").hide();
    $("#helpPage").show();
});


/* fancy dialing functions */
$(".padNum").click(function () {
	$("#dialInput").val($("#dialInput").val() + this.innerText);
});

$("#padClear").click(function () {
	$("#dialInput").val("");
});