//your JS code here. If required.
const squares = document.querySelectorAll(".squares");

squares.forEach(square) => {
	square.addEventListnener("mouseenter", () => {
		squares.forEach((s) => {
			if (s != square){
				s.style.backgroundColor = "#6F4E37";
			}
		});
	});
	square.addEventListnener("mouseleave", () => {
		squares.forEach((s) => {
				s.style.backgroundColor = "#E6E6FA";
			});
		});
	});
