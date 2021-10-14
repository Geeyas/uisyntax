$(function(){
// syntax for draggable methods
		
	$('#box1').draggable({scroll:true, revert:"invalid"}); // revert will keep the box back to it's orginal position if not dropped properly
	$('#box2').draggable({axis:"y"});
	$('#box3').draggable({axis:"x"});
	$('#box4').draggable({containment:".box"});


// syntax for the droppable methods

$('.boxI').hover(function(){
	$(this).text('Hey! You can Drop the Item now.');
});


$('.boxI').draggable();

$('.boxI').droppable({
	accept: "#box1", // this will allow the box just to accept the specific element only
	drop: function() {
		$(this).text('Thanks for the item');
	}
});



// code for SORTABLE methods

$('#sortable').sortable({connectWith:"#sortableToo", placeholder:".placeHolder"}); // .placeHolder is the class created and cascade from css.. it is not included in  HTML
$('#sortableToo').sortable({connectWith:"#sortable"});

// code for accordion

$('#accordion').accordion({collapsible:true, heightStyle:"content"}); // by deafult accordion will take the height of largest div so <heightStyle: content> method will now give necessary height for all accordion

//code for datePicker

$('.date').datepicker({
	showOtherMonths:true,
	selectOtherMonths:true,
	showButtonPanel:true,
	changeMonth:true,
	changeYear:true,
	numberOfMonths:2,
	minDate: -1, // u can put the number in negative to go back
	maxDate:"+1W 5D" // u can put the string like 1W, 1D, 1Y as well with neagtive or positive value
// this above code means go forward of 1week plus 5days
});


});