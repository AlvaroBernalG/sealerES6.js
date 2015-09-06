
function make_sealer () {
	let boxes = {};
	return {
		seal(value){
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

let sealer = make_sealer();

let token = sealer.seal(secret);

let value = sealer.unsealer(token);

console.log(`The secret password is '${value.password}' `);
