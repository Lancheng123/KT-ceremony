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
	let tab =
		`<tr>
        <th>เวลา</th>
		<th>คำอวยพร</th>
		<th>จาก</th>
		</tr>`;
	
	// Loop to access all rows
	data.forEach((itemData) =>{
		tab += `<tr>
        <td>${ itemData.ประทับเวลา} </td>
	<td>${ itemData.คำอวยพร} </td>
	<td>${ itemData.ชื่อ} </td>
</tr>`;
	});
	// Setting innerHTML as tab variable
	document.getElementById("wish").innerHTML = tab;
}
