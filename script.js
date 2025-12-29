//your JS code here. If required.
const squares = document.querySelectorAll(".squares");

for (var i = 0; i< squares.length; i++){
 //squares[i].forEach(square) => {
	squares[i].addEventListnener("mouseover", function(){
		for(var j=0; j<squares.length; j++){
			if(squares[j] !== this){
				squares[j].style.backgroundColor = "#6F4E37";
			}
		}
	});
    squares[i].addEventListnener("mouseover", function(){
		for(var j=0; j<squares.length; j++){
			//if(squares[j] !== this){
				squares[j].style.backgroundColor = "#6F4E37";
			}
		});
}
	
