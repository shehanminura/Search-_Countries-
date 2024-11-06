loadItems();
async function loadItems() {
    
    let res = await fetch("https://restcountries.com/v3.1/all");
    let items = await res.json();
    let body = "";
    items.forEach(element => {
        console.log(element);
        body+=`
            <div class="col">
                <div class="card shadow-sm">
                  <img src=${element.flags.png} alt="">
                  <div class="card-body">
                  <P>Countries-<b>${element.continents}</b><P>
                    <p class="card-text">Region-<b>${element.region}</b></p>
                     <p class="card-text">timezones-<b>${element.timezones}</b></p>
                      
                    
                  </div>
                </div>
              </div>
        `;

        
        
    });

    console.log(body);

    document.getElementById("row").innerHTML=body;
    
}

function searchCountry(){
    console.log("Search!!");
    let txtSearch = document.getElementById("txtSearch").value;

    fetch(`https://restcountries.com/v3.1/name/${txtSearch}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        let body="";
        data.forEach(element => {
            body+=`
            
            <div class="col">
                <div class="card shadow-sm">
                  <img src=${element.flags.png} alt="">
                  <div class="card-body">
                  <P>Countries-<b>${element.continents}</b><P>
                    <p class="card-text">Region-<b>${element.region}</b></p>
                     <p class="card-text">timezones-<b>${element.timezones}</b></p>
                    
                  </div>
                </div>
              </div>
            
            `
        });

        document.getElementById("row").innerHTML=body;
        
    })
    
}
