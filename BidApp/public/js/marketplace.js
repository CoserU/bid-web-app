for(var i = 0; i < $("button").length; i++){
	$("#button"+i).on("click", function(){
		var new_price = prompt("Please input your bid price!");
		var id = this.id;
		var num = id.slice(6);
		var name = $("#name"+num).text();
		while(isNaN(new_price) || new_price <= $("#price"+num).text()){
			new_price = prompt("Your input is not valid. Please input your bid price as a number greater than the current price!");
		}

		$.ajax({
	        url: '/edit',
	        dataType: 'JSON',
	        type: 'POST',
	        data: {
	            price: new_price,
	            name: name,
	            index: num
	        },
	        success: function(data){
	        	if(data.price != undefined){
	        		$("#price"+num).text(data.price);
	        	    // If the updated price.text doesn't match the input new_price, show an error message
	        		if($("#price"+num).text() != new_price){
	        			alert("The bid value is not correctly updated!");
	        		}
	        	}
	        	else{alert("An error occurred during updating the database!");}
	    	}
    	});
	});
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
