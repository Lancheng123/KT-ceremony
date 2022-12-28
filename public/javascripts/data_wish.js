// api url
const api_url =
	"https://script.google.com/macros/s/AKfycbzzwF4QtztAvSOZVcSQz2ssGq-A-w1Bf7y4QsqAs6PB5jalI7OVQ8uER6EeA1IxTDJj/exec?action=getUsers";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
	
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab = "";
	data.sort((a, b) => {
		return new Date(b.ประทับเวลา) - new Date(a.ประทับเวลา); // ascending
	  })
	// Loop to access all rows data.forEach((itemData)
	for (let i = 0; i < 6; i++){
		tab += `
		<div class="col-md-4">
		<div class="container" style="width:auto">
        <div class="container roundded-none">
          <p class="card-text">${ data[i].คำอวยพร}</p> 
		  <h5 class="card-title d-none d-sm-block">${ data[i].ชื่อ}</h5>
          <h6 class="card-subtitle mb-2 text-muted d-none d-sm-block">${ data[i].ประทับเวลา}</h6>
		  <p class="card-text">__________________________</p>
		  </div>
		</div>
      </div>`;




      //<a href="#" class="tagc3" style="left: 136.828px; top: 34.752px; z-index: 102; opacity: 0.111076; color: rgb(255, 255, 255); padding: 5px; display: none;">${ itemData.คำอวยพร}</a>
      //<a href="#" class="tagc3" style="left: 95.415px; top: 30.9076px; z-index: 103; opacity: 0.119797; color: rgb(255, 255, 255); padding: 5px; display: none;">${ itemData.คำอวยพร}</a>
      //<a href="#" class="tagc1" style="left: 58.2577px; top: 45.3038px; z-index: 107; opacity: 0.181538; color: rgb(255, 255, 255); padding: 5px;">${ itemData.คำอวยพร}</a>
      //<a href="#" class="tagc3" style="left: 65.4534px; top: 42.9294px; z-index: 119; opacity: 0.389813; color: rgb(255, 255, 255); padding: 5px;">${ itemData.คำอวยพร}</a>
      //<a href="#" class="tagc2" style="left: 108.202px; top: 30.0199px; z-index: 102; opacity: 0.117901; color: rgb(255, 255, 255); padding: 5px; display: none;">${ itemData.คำอวยพร}</a>
	//<a href="#" class="tagc1" style="left: 58.2577px; top: 45.3038px; z-index: 107; opacity: 0.181538; color: rgb(255, 255, 255); padding: 5px;">${ itemData.คำอวยพร}</a>`;
	};
	// Setting innerHTML as tab variable
	document.getElementById("greetingcard").innerHTML = tab;
}
function show(data) {
	let tab = "";
	data.sort((a, b) => {
		return new Date(b.ประทับเวลา) - new Date(a.ประทับเวลา); // ascending
	  })
	// Loop to access all rows data.forEach((itemData)
	for (let i = 0; i < data.length; i++){
		tab += `
		<div class="col-sm-2>
		<div class="container" style="width:18rem">
        <div class="container roundded-none">
          <p class="card-text">${ data[i].คำอวยพร}</p> 
		  <h5 class="card-title d-none d-sm-block">${ data[i].ชื่อ}</h5>
          <h6 class="card-subtitle mb-2 text-muted d-none d-sm-block">${ data[i].ประทับเวลา}</h6>
		  </div>
		</div>
      </div>`;




      //<a href="#" class="tagc3" style="left: 136.828px; top: 34.752px; z-index: 102; opacity: 0.111076; color: rgb(255, 255, 255); padding: 5px; display: none;">${ itemData.คำอวยพร}</a>
      //<a href="#" class="tagc3" style="left: 95.415px; top: 30.9076px; z-index: 103; opacity: 0.119797; color: rgb(255, 255, 255); padding: 5px; display: none;">${ itemData.คำอวยพร}</a>
      //<a href="#" class="tagc1" style="left: 58.2577px; top: 45.3038px; z-index: 107; opacity: 0.181538; color: rgb(255, 255, 255); padding: 5px;">${ itemData.คำอวยพร}</a>
      //<a href="#" class="tagc3" style="left: 65.4534px; top: 42.9294px; z-index: 119; opacity: 0.389813; color: rgb(255, 255, 255); padding: 5px;">${ itemData.คำอวยพร}</a>
      //<a href="#" class="tagc2" style="left: 108.202px; top: 30.0199px; z-index: 102; opacity: 0.117901; color: rgb(255, 255, 255); padding: 5px; display: none;">${ itemData.คำอวยพร}</a>
	//<a href="#" class="tagc1" style="left: 58.2577px; top: 45.3038px; z-index: 107; opacity: 0.181538; color: rgb(255, 255, 255); padding: 5px;">${ itemData.คำอวยพร}</a>`;
	};
	// Setting innerHTML as tab variable
	document.getElementById("allgreetingcard").innerHTML = tab;
}
