window.onload = function() {
	// Create table //
	var table = document.createElement("table");
	table.id = "table";
	table.style.borderSpacing = "0em";
	
	for (var y=0; y<10; y++) {
		var tableRow = table.insertRow();
		
		for (var x=0; x<10; x++) {
			var tableData = tableRow.insertCell();
			
			tableData.style.width = "1em";
			tableData.style.height = "1em";
			tableData.style.padding = "0em";
			tableData.style.border = "0.05em solid";
			tableData.style.backgroundColor = "#" + x.toString().repeat(2) + "55" + y.toString().repeat(2);
		}
	}
	
	document.body.appendChild(table);
	
	// Create randomiser button //
	var button = document.createElement("button");
	button.onclick = randomiseTableColours;
	
	var text = document.createTextNode("Randomise colours!");
	button.appendChild(text);
	
	button.style.margin = "1em";
	
	document.body.appendChild(button);
}

function randomiseTableColours() {
	function getRandomColour() {
		function getRandomHexDigit() {
			return Math.floor(Math.random()*16).toString(16);
		}
		
		var colour = "#";
		for (var i=0; i<6; i++) {
			colour += getRandomHexDigit();
		}
		return colour;
	}
	
	var table = document.getElementById("table");
	for (var y=0, tableRow; tableRow = table.rows[y]; y++) {
		for (var x=0, tableData; tableData = tableRow.cells[x]; x++) {
			tableData.style.backgroundColor = getRandomColour();
		}
	}
}