const form = document.getElementById("Converter-form");
const resultDiv= document.getElementById("result");


form.addEventListener("submit", function(event){
    event.preventDefault();

    const temperature = parseFloat(document.getElementById("temperature").value);
    const fromunit=document.getElementById("from-unit").value;
    const tounit= document.getElementById("to-unit").value;


    let result;

    if(fromunit === "celsius" && tounit === "fahrenheit")
    {
        result = (temperature * (9/5))+32;
    }else if(fromunit === "celsius" && tounit === "kelvin") {
        result = (temperature + 273.15);
        
    } else if (fromunit === "fahrenheit" && tounit === "celsius") {
        result = (temperature - 32) * (5/9);
        
    } else if (fromunit === "fahrenheit" && tounit === "kelvin") {
        result = ((temperature - 32) * (5/9)) + 273.15;
        
    } else if (fromunit === "kelvin" && tounit === "celsius") {
        result = temperature - 273.15;
        
    } else if (fromunit === "kelvin" && tounit === "fahrenheit") {
        result = ((temperature - 273.15) * (9/5)) + 32;
        
    } else {
        result = temperature; // No conversion needed if units are the same
    }

    resultDiv.textContent = `Result: ${result.toFixed(2)} ${tounit}`;
});

