function showall() {
    const list = document.getElementById('list');
    let namelist = "";
    names
    names.forEach(element => {
        namelist += element + "<br/>";
        
    });
    list.innerHTML = namelist;
}
   
    

function addName() {
    const name = document.getElementById('name').value;
    names.push(name);
    showall();
    document.getElementById('name').value="";
}
    