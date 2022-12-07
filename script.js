const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '43c9800ea3msh5c6a047bf5156ecp1186ecjsnfced52ea1741',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));