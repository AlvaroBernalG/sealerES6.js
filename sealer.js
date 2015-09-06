
function make_sealer () {
	let boxes = {};
	return {
		sealer(value){
			let token = {};
			boxes[token] = value;
			return token;
		},
		unsealer(box){
			return boxes[box];
		}
	};
}

let secret = {password: 1234};

let seal = make_sealer();

let token = seal.sealer(secret);

let value = seal.unsealer(token);

console.log(`The secret password is '${value.password}' `);
