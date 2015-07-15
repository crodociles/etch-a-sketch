var wrapper_width = 900;
var def_size = 16;
var square_height = Math.round(wrapper_width / def_size);
var square_width = Math.round(wrapper_width / def_size);

function gridMaker(){
	for(var i = 0; i < Math.pow(def_size, 2); i++){
		$(".wrapper").append("<div class='grid_square'></div>");
	};		
	$(".grid_square").height(square_height);
	$(".grid_square").width(square_width);
};

function clearGrid(){
	var square_number = prompt("What size square grid?", "Enter a number between 1 & 50");
	var new_sq_height = Math.round(wrapper_width / square_number);
	var new_sq_width = Math.round(wrapper_width / square_number);

	$(".grid_square").remove();
	for(var i = 0; i < Math.pow(square_number, 2); i++){
		$(".wrapper").append("<div class='grid_square'></div>");
	};		
	$(".grid_square").height(new_sq_height);
	$(".grid_square").width(new_sq_width);
	$(".grid_square").hover(function(){
		$(this).css("background-color", "green");
	});
	
};
function rainbowGrid(){
	$(".grid_square").hover(function(){
		var hex_num = [1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
		var colour = [];
		for(var i = 0; i <6; i++){
			var rand = Math.round(Math.random() * 14);
			colour.push(hex_num[rand]);
			$(this).css("background-color", "#"+colour);
		};
	});
};

$(document).ready(function(){
	$("body").append("<div class='wrapper'><h1>Etcha-Sketcha!</h1></div>");
	$(".wrapper").append("<button onclick='clearGrid()'>New Grid</button><br><br>");
	$(".wrapper").append("<button onclick='rainbowGrid()'>Rainbow!</button><br><br>");

	gridMaker();
	$(".grid_square").hover(function(){
		$(this).css("background-color", "green");
	});
});