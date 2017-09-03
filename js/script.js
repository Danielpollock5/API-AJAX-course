var xhr = new XMLHttpRequest();
var btn = document.getElementById('magic')
btn.addEventListener('click', findGif)
console.log(xhr)


// function findSample() {
// 	//open takes 3 parameters (method, url/filepath, async(boolean))
// 	xhr.open("GET", "sample.txt", true)
// 	console.log(xhr.readyState)
// 	// xhr.onload = function(){
// 	// 	//this; is xhr 
// 	// 	console.log(this.responseText)
// 	// }
// 	xhr.onreadystatechange = function(){
// 		console.log(xhr.readyState)
// 		if(xhr.readyState === 4){
// 			//do this code
// 			document.write(xhr.responseText)

// 		}
// 	}
// 	xhr.send();

// }
// findSample();


//Jquery
// $.ajax("sample.txt",{
// 	type: "GET",
// 	url: "sample.txt",

// })


// http://api.giphy.com/v1/gifs/search?q=car&api_key=d98d8e84ea1a4a9d8e674e0522868a65

//findSample();

function findGif(){
	var userInput = document.getElementById('userInput').value;
	var limitInput = document.getElementById('limitInput').value;
	var api_key = "d98d8e84ea1a4a9d8e674e0522868a65"
	xhr.open("GET", "http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=" + api_key + "&limit=" + limitInput, true)
	
	xhr.onreadystatechange = function(){
		console.log(xhr.readyState)
		if(xhr.readyState === 4){
			//do this code
			var results = document.getElementById("results")
			var response =  JSON.parse(xhr.response).data;
			console.log(response)
			results.inner = "";
			for(let i = 0; i < response.length; i++){
				//create an image tag for each gif in JS

				var newGif = document.createElement('img')
				newGif.src = response[i].images.preview_gif.url
				//send gif to the brower
				results.appendChild(newGif)
			}

		}
			
	}
	xhr.send()
}












