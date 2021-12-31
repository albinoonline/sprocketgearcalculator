
window.onload = function() {
	//get inputs
	const gears = document.getElementById('gears');
	const first = document.getElementById('first');
	const top = document.getElementById('top');
	const max = document.getElementById('max');
	const go = document.getElementById('go');
	//get output
	const output = document.getElementById('output');
	
	go.addEventListener("click", function(){
		//get b, (top/first)^(1/gears) = b
		let b = Math.pow(top.value/first.value,1/(gears.value-1));
		//get min RPM
		output.innerHTML=`<p>Minimum RPM: ${Math.round(max.value*b)}</p>`;
		//make a functiuon to call gears
		function gear(x){
			//first*(b)^2
			return Math.round(first.value*Math.pow(b,x) * 100) / 100;
		}
		for(let i = 0; i < gears.value; i++){
			output.innerHTML+=`<p>Gear ${i+1}: ${gear(i)}</p>`;
		}
	});
}
