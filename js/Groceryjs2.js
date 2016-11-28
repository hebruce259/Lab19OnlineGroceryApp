

var runningTotal = 0;
function findTotal(price){
	
    runningTotal = runningTotal + parseFloat(price);
     document.getElementById("Total").value=runningTotal;
}


//the function body is the same as you have defined sue the textbox object to set the value

//var x = document.getElementById("Pepsi").rows[0].cells.length;
//alert(document.getElementById("myTable").rows[0].cells.Pepsi(0).innerHTML)

