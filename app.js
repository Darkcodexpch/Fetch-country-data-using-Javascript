// @this_coder_is_alive
//   const request = new XMLHttpRequest();
//   request.open('GET','https://restcountries.eu/rest/v2/all'); //For open Request
//   request.send(); //for Sent Request

//   request.addEventListener('load',function(){
//   //  console.log(this.responseText); //to get response
// const [data] = JSON.parse(this.responseText); //to convert response in JsOn to object format
// console.log(data);
//   })

// https://restcountries.eu/rest/v2/name/nepal

let select = document.querySelector('.select');

fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => {
        let count = "1";
        data.map((val) => {
            return select.insertAdjacentHTML('afterbegin', `<option id="opt" value="${count++}">${val.name}</option>`)

        });
    });

function getSelectValue() {
    let countryinfo = document.querySelector('.countryInformation')
    let url = ("https://restcountries.eu/rest/v2/name/");
    let e = document.getElementById('select');
    var text = e.options[e.selectedIndex].text;
    let value = url.substring(url.lastIndexOf('/' + 1));
    let final = value.concat(text);
    // console.log(final)
    fetch(final)
        .then(response => response.json())
        .then(data => {
            data.map((val) => {
                let html = `<div class="CountryFlag">
                <img src="${val.flag}" alt="countryFlag">
                </div>
                <div class="countryinfo">
                     <p class="countrytitle">Country name: <span>${val.name}</span></p>
                     <p class="population">Country population: <span>${val.population}</p>
                     <p class="timezone">Country timezone: <span>${val.timezones}</p>
                     <p class="capital">Country capital: <span>${val.capital}</p>
                </div>`;
                let div = document.createElement('div');
                div.innerHTML  =  html;
                // console.log(div);
                return countryinfo.insertAdjacentHTML('afterbegin',html);
               

            })
        });
}
getSelectValue();