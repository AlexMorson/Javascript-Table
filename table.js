window.onload = function() {
	var body  = document.body;
	var table = document.createElement("table");
	
	for (var y=0; y<5; y++) {
		var tableRow = table.insertRow();
		
		for (var x=0; x<5; x++) {
			var tableData = tableRow.insertCell();
			
			var stringCoordinate = "(" + x.toString() + ", " + y.toString() + ")";
			var textNode = document.createTextNode(stringCoordinate);
			tableData.appendChild(textNode);
		}
	}
	
	body.appendChild(table);
}