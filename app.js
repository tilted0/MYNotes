console.log("Welcome to notes app. This is app.js");
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addbtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addtext");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";

 
  showNotes();
});

// Function to show elements from localStorage
function showNotes() {
  
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
    
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";

  notesObj.forEach(function (elements, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note${index + 1}</h5>
                        <p class="card-text">${elements}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else { 
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
   
  }
}
//function to delete note
function deleteNote(index1){
  console.log('iam deleteing');
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index1,1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}
let searchtext = document.getElementById('searchtext');
searchtext.addEventListener("input",function(){
  let inputval = searchtext.value.toLowerCase();
  let noteCard = document.getElementsByClassName('noteCard');
  Array.from(noteCard).forEach(function(element) {
    let cardtxt = element.getElementsByTagName('p')[0].innerText;
   
    if(cardtxt.includes(inputval)){
      element.style.display="block";
    }
    else{
      element.style.display="none";
    }
  });
   
});
