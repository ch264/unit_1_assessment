const inc = document.getElementById('inc');
const dec = document.getElementById('dec');

inc.addEventListener('click', increase);
dec.addEventListener('click', decrease);


function increase() {
	let counter = document.getElementById('counter');
	let output = parseInt(document.getElementById('counter').innerText);
	let input = parseInt(document.getElementById('input').value);
	newValue = output + input;
	counter.innerHTML = newValue;

	if (newValue < 0) {
		counter.style.color="#ff0000";
	} else {
		counter.style.color="#000000";
	}
}

function decrease() {
	let counter = document.getElementById('counter');
	let output = parseInt(document.getElementById('counter').innerText);
	let input = parseInt(document.getElementById('input').value);
	newValue = output - input;
	counter.innerHTML = newValue;

	if (newValue < 0) {
		counter.style.color="#ff0000";
	} else {
		counter.style.color="#000000";
	}
}



// if (totalAdded < 0)
// 05
//     {
// 06
//         document.getElementsByName("totalAddedCost").style.color="#ff0000";
// 07
//     }
// 08
//     else if (totalSold < 0)
// 09
//     {
// 10
//         document.getElementsByName("totalSoldCost").style.color="#ff0000";
// 11
//     }  
