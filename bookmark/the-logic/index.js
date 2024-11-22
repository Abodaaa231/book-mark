var bookNameInput = document.getElementById("bookName");
var bookUrlInput = document.getElementById("siteName");

var addsite;
if (localStorage.getItem("products") == null) {
  addsite = [];
} else {
  addsite = JSON.parse(localStorage.getItem("products"));
  display();
}

function addbook() {
  var Books = {
    code: bookNameInput.value,
    urlSite: bookUrlInput.value,
  };
  addsite.push(Books);
  localStorage.setItem("products", JSON.stringify(addsite));

  display();
  clear();
}
function display() {
  var carton = "";
  for (var i = 0; i < addsite.length; i++) {
    carton += `  
   
          <div class="col-3">
            <h2 class="h4 pt-2">${[i + 1]}</h2>
          </div>
          <div class="col-3">
            <h2 class="h4 pt-2">${addsite[i].code}</h2>
          </div> 
          <div class="col-3">
         <a href="${
           addsite[i].urlSite
         }"> <button class="btn btn-visit"><i class="fa-regular fa-eye"></i> Visit</button></a>
          </div>
          <div class="col-3">
              <button onclick="deleturl()" class="btn btn-delete"><i class="fa-regular fa-trash-can"></i> Delet</button>
          </div>
        </div>
         <hr />
           `;
  }
  console.log(carton);

  document.getElementById("myroow").innerHTML = carton;
}
function deleturl() {
  addsite.splice(0, 1);
  display();
  console.log(addsite);
}

function clear() {
  site: bookNameInput.value = null;
  urlSite: bookUrlInput.value = null;
}
