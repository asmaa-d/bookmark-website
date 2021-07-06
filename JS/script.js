var btnSubmit =document.getElementById("btnSubmit");
var webSitesName = document.getElementById("webSitesName");
var siteNameInp = document.getElementById("SiteName");
var siteURLInp = document.getElementById("SiteURL");
tBoody = document.getElementById("tBoody");
var webLink = document.getElementById("webLink");
var nameRequired =  document.getElementById("nameRequired");
var urlRequired = document.getElementById("urlRequired");

var webSites ;

if(localStorage.getItem("websitesData") == null){
    webSites = []
}else{
    webSites = JSON.parse(localStorage.getItem("websitesData"));
    display();
}

function addWebSite(){

   if(cheackInput() == true){
    var webNames = {
        siteName:siteNameInp.value,
        siteURL:siteURLInp.value
      }
  
      webSites.push(webNames);

      localStorage.setItem("websitesData" , JSON.stringify(webSites))
  
     clear()

  
     display();

     removeDisplayBlock()
    }else{
       nameRequired.style.display = "block";
       urlRequired.style.display = "block"
    }
 
}


function display(){
    var cartona = ""
    for(var i = 0 ; i<webSites.length ; i++){

        cartona +=` <div class="d-flex webSites p-3 mb-3">
            <h4 class="mr-5 w-50" id="">${webSites[i].siteName}</h4>
        
            <a href="${webSites[i].siteURL}"  target="_blank" class="btn btn-primary  mr-3 " id="webLink">visit</a>
            <button class="btn btn-danger" onclick=deleteSite(${i})>delete</button>
            
            
        </div>`
    }
    
    webSitesName.innerHTML = cartona
    
}

function clear(){
    siteNameInp.value = "";
    siteURLInp.value = ""
}

function deleteSite(index){
    webSites.splice(index , 1)
    localStorage.setItem("websitesData" , JSON.stringify(webSites))
    display()
}

function cheackInput(){

    if(siteNameInp.value != "" && siteURLInp.value != "" ){
        return true;
    }
    else{
        return false;
    }
}

function removeDisplayBlock(){
    nameRequired.style.display = "none";
    urlRequired.style.display = "none"
}

function search(){
    var searhInp = document.getElementById("searchSite");
    var cartonaRow = "";
    for(var i = 0 ; i<webSites.length ; i++){

        if(webSites[i].siteName.toLowerCase().includes(searhInp.value.toLowerCase())){
            cartonaRow += ` <div class="d-flex webSites p-3 mb-3">
            <h4 class="mr-5 w-50" id="">${webSites[i].siteName.replace(searhInp.value,`<mark style="background-color: yellow;">${searhInp.value}</mark>`)}</h4>
        
            <a href="${webSites[i].siteURL}"  target="_blank" class="btn btn-primary  mr-3 " id="webLink">visit</a>
            <button class="btn btn-danger" onclick=deleteSite(${i})>delete</button>
            
            
        </div>`
        }
    }

    webSitesName.innerHTML = cartonaRow;
  

}