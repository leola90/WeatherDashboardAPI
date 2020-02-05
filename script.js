$("#find-city").on("click", function(event) {
    event.preventDefault();
    var city = $("#city-input").val ();
    
    // Performing an AJAX request with the URL
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=155254d4cfa2f09c3f1c54e72c7adf19",
        method: "GET"
          
    })
    // After data comes back from the request
    .then(function(response) {
        console.log(response);

        // Creating and storing a div tag
        var newDiv = $("<div>");
        var iconImage = $("<img>");

        // Storing the result
        var city = response.name;   
        var temp = Math.round((response.main.temp - 273.15) * 1.80 + 32);
        var humidity = response.main.humidity;
        var wind = response.wind.speed;
        var uvIndex = response.coord.lat + response.coord.lon;
        iconImage.attr("src", response.weather[0].icon);
      
        // Creating a paragraph tag with the result for each variable
        var pOne = $("<p>").text("" + city);
        var pTwo = $("<p>").text("Temperature: " + temp + "°F");
        var pThree = $("<p>").text("Humidity: " + humidity + "%");
        var pFour = $("<p>").text("Wind Speed: " + wind + "MPH");
        var pFive = $("<p>").text("UV: " +  uvIndex);
        
        //Appending the paragraph and iconImage created to the "newDiv" div 
        newDiv.append(pOne,pTwo,pThree,pFour, pFive);
        newDiv.append(iconImage);

        //Appending newDiv created to the "result-view" div
        $("#result-view").append(newDiv);
        $("#searched-city-appear-here").append(city);
    })

    
    // Performing an AJAX request with the URL for 5 day forecasting
    $.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&cnt=40&appid=155254d4cfa2f09c3f1c54e72c7adf19",
    method: "GET"
      
    })
    .then(function(response) {

        // Creating and storing a div tag
        var firstNewDiv = $("<div>");
        var secondNewDiv = $("<div>");
        var thirdNewDiv = $("<div>");
        var fourthNewDiv = $("<div>");
        var fifthNewDiv = $("<div>");

        //Setting variables for the Dates
        var date = response.list[0].dt_txt;
        var secondDate = response.list[8].dt_txt;
        var thirdDate = response.list[16].dt_txt;
        var fourthDate = response.list[24].dt_txt;
        var fifthDate = response.list[32].dt_txt;

        //Setting variables for the weathercondition 
        var weatherConditionOne = response.list[0].weather[0].main;
        var weatherConditionTwo = response.list[3].weather[0].main;
        var weatherConditionThree = response.list[9].weather[0].main;
        var weatherConditionFour = response.list[17].weather[0].main;
        var weatherConditionFive = response.list[25].weather[0].main;

        //Setting variables for the temperatures
        var temperatureOne = Math.round((response.list[0].main.temp - 273.15) *1.80 + 32) + "°F";
        var temperatureTwo = Math.round((response.list[3].main.temp - 273.15) *1.80 + 32) + "°F" ;
        var temperatureThree = Math.round((response.list[9].main.temp - 273.15) *1.80 + 32) + "°F";
        var temperatureFour = Math.round((response.list[17].main.temp - 273.15) *1.80 + 32) + "°F";
        var temperatureFive = Math.round((response.list[25].main.temp - 273.15) *1.80 + 32) + "°F";

        //Setting variables for the humidity
        var humidityOne = response.list[0].main.humidity + "%";
        var humidityTwo = response.list[3].main.humidity + "%";
        var humidityThree = response.list[9].main.humidity + "%";
        var humidityFour = response.list[17].main.humidity + "%";
        var humidityFive = response.list[25].main.humidity + "%";

        // Creating a paragraph tag with the result for each variable
        var pOne = $("<p>").text("" + date);
        var pOneTwo = $("<p>").text("" + secondDate);
        var pOneThree = $("<p>").text("" + thirdDate);
        var pOneFour = $("<p>").text("" + fourthDate);
        var pOneFive = $("<p>").text("" + fifthDate);

        // Creating a paragraph tag with the result for each variable
        var pTwo = $("<p>").text("Weather: " + weatherConditionOne);
        var pTwoOne = $("<p>").text("Weather: " + weatherConditionTwo);
        var pTwoTwo = $("<p>").text("Weather: " + weatherConditionThree);
        var pTwoThree = $("<p>").text("Weather: " + weatherConditionFour);
        var pTwoFour = $("<p>").text("Weather: " + weatherConditionFive);
      
        // Creating a paragraph tag with the result for each variable
        var pThree = $("<p>").text("Temp: " + temperatureOne);
        var pThreeTwo = $("<p>").text("Temp: " + temperatureTwo);
        var pThreeThree = $("<p>").text("Temp: " + temperatureThree);
        var pThreeFour = $("<p>").text("Temp: " + temperatureFour);
        var pThreeFive = $("<p>").text("Temp: " + temperatureFive);

        // Creating a paragraph tag with the result for each variable
        var pFour = $("<p>").text("Humidity: " + humidityOne);
        var pFourTwo = $("<p>").text("Humidity: " + humidityTwo);
        var pFourThree = $("<p>").text("Humidity: " + humidityThree);
        var pFourFour = $("<p>").text("Humidity: " + humidityFour);
        var pFourFive = $("<p>").text("Humidity: " + humidityFive);

        //Appending the variables to divs 
        firstNewDiv.append(pOne, pTwo, pThree, pFour);
        secondNewDiv.append(pOneTwo, pTwoOne, pThreeTwo, pFourTwo);
        thirdNewDiv.append(pOneThree, pTwoTwo, pThreeThree, pFourThree);
        fourthNewDiv.append(pOneFour, pTwoThree, pThreeFour, pFourFour);
        fifthNewDiv.append(pOneFive, pTwoFour, pThreeFive, pFourFive);

        // Appending the divs to the appropriate id
        $("#day-view-1").append(firstNewDiv);
        $("#day-view-2").append(secondNewDiv);
        $("#day-view-3").append(thirdNewDiv);
        $("#day-view-4").append(fourthNewDiv);
        $("#day-view-5").append(fifthNewDiv);
    
        console.log(response);
       
    });

    $("#city-input").empty();
    $("#result-view").empty();
    $("#searched-city-appear-here").empty();
    $("#day-view-1").empty();
    $("#day-view-2").empty();
    $("#day-view-3").empty(); 
    $("#day-view-4").empty();
    $("#day-view-5").empty();

});

