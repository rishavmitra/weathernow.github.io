function submit(){
	city = document.getElementById("city").value
	
	httpRequest = new XMLHttpRequest();
	url= "https://api.weatherbit.io/v2.0/current?&city_name="+city+"&country_code=IN&key=fd9b7df8032c43e9831d29d74c037bd4";
	httpRequest.open("GET",url);
	httpRequest.send();

	httpRequest.onreadystatechange = function(){
		if(this.readyState==4 && this.status==200){
			raw_data = JSON.parse(this.responseText);
			document.getElementById("temp").innerHTML = "Temp ="+raw_data.data[0].temp+" C";
			document.getElementById("wind_speed").innerHTML = "Wind Speed ="+raw_data.data[0].wind_spd+" Km/h";
			document.getElementById("clouds").innerHTML = "Clouds ="+raw_data.data[0].clouds+" oktas";
			document.getElementById("tz").innerHTML = "Timezone ="+raw_data.data[0].timezone
			document.getElementById("State_code").innerHTML = "State Code ="+raw_data.data[0].state_code;
			document.getElementById("Country_code").innerHTML = "Country Code ="+raw_data.data[0].country_code;
		}
	}
}