//your JS code here. If required.
const squares = document.querySelectorAll(".squares");

for (let i = 0; i< squares.length; i++){
 //squares[i].forEach(square) => {
	squares[i].addEventListnener("mouseover", function(){
		for(let j=0; j<squares.length; j++){
			if(squares[j] !== this){
				squares[j].style.backgroundColor = "rgb(111,78,55)";
			}
		}
	});
    squares[i].addEventListnener("mouseout", function(){
		for(let j=0; j<squares.length; j++){
			//if(squares[j] !== this){
				squares[j].style.backgroundColor = "rgb(230,230,250)";
			}
		});
}
	
