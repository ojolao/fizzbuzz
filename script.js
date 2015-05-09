$(document).ready(function() {
$(function () {
  for (var i = 0; i++ < 100; )
    $("ul").append("<li>" + fizzbuzz(i) + "</li>");
});

function fizzbuzz(i) {
  var str = "";
  if (i % 3 == 0) str += "Fizz";
  if (i % 5 == 0) str += "Buzz";
  return str == "" ? i : str;
} 
});

	/*var listItems = "";

	var i;

	for (i = 1; i < 101; i = i + 1) {

    	listItems += "<li>";

		if ((i % 3 === 0) && (i % 5 === 0)) {
        listItems += "fizzbuzz";
    	}
   	 	else if (i % 3 === 0) {
        listItems += "fizz";
    	}
    	else if (i % 5 === 0) {
        listItems += "buzz";
    	}
    	else {
        listItems += i;
    	}
    	listItems += "</li>";

	};

$('.list').append('<li>' + listItems + '</li>');
});
*/

/*var list = document.getElementById("list");

var listItems = "";

	for (var i = 1; i <= 100; i++){
		listItems += "<li>";
	if (i % 3 === 0 && i % 5 === 0) {
		listItems += "fizz buzz";
	} else if (i % 3 === 0) {
		listItems += "fizz";
	} else if (i % 5 === 0) {
		listItems += "buzz";
	} else {
		listItems += i;
	}
	listItems += "</li>";
}
list.innerHTML += listItems;
*/