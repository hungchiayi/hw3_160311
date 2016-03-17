var personobj = {
	firstname: 'Simon',
	fullname: '',
	age: 37,
	married: true,
	hasownhair: null,
	children: [{
		firstname: 'Erica'
	}, {
		firstname: 'Isobel'
	}]
}

var personjson = JSON.stringify(personobj);
console.log(personjson);