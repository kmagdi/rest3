const getFetch=()=>{
	const url='http://localhost:8080/kabat'
	fetch(url)
  		.then(response => response.json())
  		.then(data => renderTermekek(data));
}
const renderTermekek=(termekek)=>{
    document.querySelector('.container').innerHTML=termekek.map(termek => 
        `<div class="t">
			<h2>${termek.tipus}</h2>
			<div class="m">${termek.meret}</div>
		</div>`).join('');
}
//////////////////////////////////////////////////////
async function getFetchAsync() {
    let url = 'http://localhost:8080/kabat'
    try {
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderTermekek_forEach() {
    let termekek = await getFetchAsync();
    termekek.forEach(termek => {
        document.querySelector('.container').innerHTML += 
			`<div class="t">
				<h2>${termek.tipus}</h2>
				<div class="m">${termek.meret}</div>
			</div>`;
    });
}

async function renderTermekek_map() {
    let termekek = await getFetchAsync();
    document.querySelector('.container').innerHTML=termekek.map(termek => 
        `<div class="t">
			<h2>${termek.tipus}</h2>
			<div class="m">${termek.meret}</div>
		</div>`).join('');
}

//https://www.javascripttutorial.net/javascript-fetch-api/