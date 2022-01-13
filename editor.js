
window.onload = function() {
	//get inputs
	const gears = document.getElementById('gears');
	const first = document.getElementById('first');
	const top = document.getElementById('top');
	const max = document.getElementById('max');
	const go = document.getElementById('go');
	const reverseGears = document.getElementById('reverseGears');
	const reverseFirst = document.getElementById('reverseFirst');
	//get output
	const output = document.getElementById('output');
	
	//take the ratio of the previous gear, multiply by target min, divided by target max
	//G2 = G1 * min/max
	//G2 = G1 * min * 1/max
	//G2/min = G1 * 1/max
	//G2/min = G1/max
	//min/G2 = max/G1
	//min = G2* max/G1
	/*
	works for 2 gears: min = G2* max/G1
	min = G2* max/G1
	
	each step is a fixed multiple of the last,
	so gear(x)= first*(b)^2, we have the point (gears,top)
	b is min/max
	once we solve for b:
	each whole value of x is a valid gear.
	to solve:
	
	top = first(b)^gears
	top/first = b^gears
	(top/first)^(1/gears) = b
	
	*/
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
		output.innerHTML+="<h4>Forward Gears</h4>";
		for(let i = 0; i < gears.value; i++){
			output.innerHTML+=`<p>G${i+1}: ${gear(i)}</p>`;
		}
		//reverse gears
		if (reverseGears.value ==0){
			return;
		}
		output.innerHTML+="<h4>Reverse Gears</h4>";
		function reverseGear(x){
			//first*(b)^2
			return Math.round(reverseFirst.value*Math.pow(b,x) * 100) / 100;
		}
		for(let i = 0; i < reverseGears.value; i++){
			output.innerHTML+=`<p>R${i+1}: ${reverseGear(i)}</p>`;
		}
	});
}
