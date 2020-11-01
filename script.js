$("#find-city").on("click", function (event) {
    event.preventDefault();
    var city = $("#city-input").val();

    // Performing an AJAX request with the URL
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=155254d4cfa2f09c3f1c54e72c7adf19",
        method: "GET"

    })
        // After data comes back from the request
        .then(function (response) {
            // console.log(response);

            // Storing the result
            let data = response;
            console.log(data);

            var city = data.name;
            var description = data.weather[0].description;
            var iconURL = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
            var temp = Math.round((data.main.temp - 273.15) * 1.80 + 32);
            var humidity = data.main.humidity;
            var wind = data.wind.speed;
            var uvIndex = data.coord.lat + data.coord.lon;

            // Creating and storing a div tag
            var newDiv = $("<div>");

            //Creating a paragraph tag with the result for each variable
            var pOne = $("<p>").text(`${city}`).attr('style', 'font-weight: bold');
            var pTwo = $("<img>").attr("src", iconURL);
            var pThree = $("<p>").text(`Temperature: ${temp}°F`);
            var pFour = $("<p>").text(`Humidity: ${humidity}%`);
            var pFive = $("<p>").text(`Wind Speed: ${wind}MPH`);
            var pSix = $("<p>").text(`UV: ${uvIndex}`);
            var pSeven = $("<p>").text(`Weather: ${description}`);
         
            //Appending the paragraph and iconImage created to the "newDiv" div 
            newDiv.append(pOne, pSeven, pTwo, pThree, pFour, pFive, pSix)

            //Appending newDiv created to the "result-view" div
            $("#result-view").append(newDiv).attr('style', 'background-color: lightgrey');         
            $("#searched-city-appear-here").append(city);
        })


    // Performing an AJAX request with the URL for 5 day forecasting
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&cnt=40&appid=155254d4cfa2f09c3f1c54e72c7adf19",
        method: "GET"

    })
        .then(function (response) {
            console.log(response)
            let data2 = response.list;

            // Creating and storing a div tag
            var firstNewDiv = $("<div>");
            var secondNewDiv = $("<div>");
            var thirdNewDiv = $("<div>");
            var fourthNewDiv = $("<div>");
            var fifthNewDiv = $("<div>");

            //Setting variables for the Dates
            var firstDate = moment(response.list[0].dt_txt);
            var dayOne = firstDate.format('MMM Do YYYY');
            
            var secondDate = moment(response.list[8].dt_txt);
            var dayTwo = secondDate.format('MMM Do YYYY');
            
            var thirdDate = moment(response.list[16].dt_txt);
            var dayThree = thirdDate.format('MMM Do YYYY');
            
            var fourthDate = moment(response.list[24].dt_txt);
            var dayFour = fourthDate.format('MMM Do YYYY');

            var fifthDate = moment(response.list[32].dt_txt);
            var dayFive = fifthDate.format('MMM Do YYYY');

            //Setting variables for the weathercondition 
            var weatherConditionOne = response.list[0].weather[0].main;
            var weatherConditionTwo = response.list[8].weather[0].main;
            var weatherConditionThree = response.list[16].weather[0].main;
            var weatherConditionFour = response.list[24].weather[0].main;
            var weatherConditionFive = response.list[32].weather[0].main;

            //Setting variables for the temperatures
            var temperatureOne = Math.round((response.list[0].main.temp - 273.15) * 1.80 + 32) + "°F";
            var temperatureTwo = Math.round((response.list[8].main.temp - 273.15) * 1.80 + 32) + "°F";
            var temperatureThree = Math.round((response.list[16].main.temp - 273.15) * 1.80 + 32) + "°F";
            var temperatureFour = Math.round((response.list[24].main.temp - 273.15) * 1.80 + 32) + "°F";
            var temperatureFive = Math.round((response.list[32].main.temp - 273.15) * 1.80 + 32) + "°F";

            //Setting variables for the humidity
            var humidityOne = response.list[0].main.humidity + "%";
            var humidityTwo = response.list[3].main.humidity + "%";
            var humidityThree = response.list[9].main.humidity + "%";
            var humidityFour = response.list[17].main.humidity + "%";
            var humidityFive = response.list[25].main.humidity + "%";

            // Creating a paragraph tag with the result for each variable
            var pOne = $("<p>").text("" + dayOne);
            var pOneTwo = $("<p>").text("" + dayTwo);
            var pOneThree = $("<p>").text("" + dayThree);
            var pOneFour = $("<p>").text("" + dayFour);
            var pOneFive = $("<p>").text("" + dayFive);

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

             // Creating a paragraph tag with the result for each variable
            var iconUrlOne = "http://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + "@2x.png";
            var iconUrlTwo = "http://openweathermap.org/img/wn/" + response.list[3].weather[0].icon + "@2x.png";
            var iconUrlThree = "http://openweathermap.org/img/wn/" + response.list[9].weather[0].icon + "@2x.png";
            var iconUrlFour = "http://openweathermap.org/img/wn/" + response.list[17].weather[0].icon + "@2x.png";
            var iconUrlFive = "http://openweathermap.org/img/wn/" + response.list[25].weather[0].icon + "@2x.png";
            
             // Creating a paragraph tag with the result for each variable
            var pFive = $("<img>").attr("src", iconUrlOne);
            var pFiveTwo = $("<img>").attr("src", iconUrlTwo);
            var pFiveThree = $("<img>").attr("src", iconUrlThree);
            var pFiveFour = $("<img>").attr("src", iconUrlFour);
            var pFiveFive = $("<img>").attr("src", iconUrlFive);
          
            //Appending the variables to divs 
            firstNewDiv.append(pOne, pTwo, pFive, pThree, pFour);
            secondNewDiv.append(pOneTwo, pTwoOne, pFiveTwo, pThreeTwo, pFourTwo);
            thirdNewDiv.append(pOneThree, pTwoTwo, pFiveThree, pThreeThree, pFourThree);
            fourthNewDiv.append(pOneFour, pTwoThree, pFiveFour, pThreeFour, pFourFour);
            fifthNewDiv.append(pOneFive, pTwoFour, pFiveFive, pThreeFive, pFourFive);

            // Appending the divs to the appropriate id
           
            // $("#five-day-forecast").text("5 Day Forecast").attr('style', 'font-wight: bold')
            $("#five-day-forecast").text("5 Day Forecast").attr('style', 'font-weight: bold');
            $("#day-view-1").append(firstNewDiv).attr('style', 'background-color: lightgrey');
            $("#day-view-2").append(secondNewDiv).attr('style', 'background-color: lightblue');;
            $("#day-view-3").append(thirdNewDiv).attr('style', 'background-color: lightgrey');;
            $("#day-view-4").append(fourthNewDiv).attr('style', 'background-color: lightblue');;
            $("#day-view-5").append(fifthNewDiv).attr('style', 'background-color: lightgrey');;

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

 