// constructor
  // name, type, color, age
  // render method
  // create table row
  // over data
  //  create table data tag
  // fill with content
  // append to table row

function pet(name, type, color, age){
  this.petName = name;
  this.type = type;
  this.type = color;
  this.age = age;


  // push object instance into my allPets array
  allPets.push(this);
}

pet.prototype.tableRender = function(){
  var tableRow = document.createElement('tr');
  parentElement.appendChild(tableRow);
  var tableData = document.createElement('td')
}

new pet('name', 'type', 'color', 'age(numeric)');
new pet();

function genHeader(){
  // get table element on DOM by id
  var parentElement = document.getElementById('idName');
  // create tr 
  var tableRow = document.createElement('tr');
  // apend tr to parent element
  parentElement.appendChild(tableRow);
  // create th
  
  // repeat this for other header elements============
  var tableHead = document.createElement('th');
  // fil th with name
  tableHead.textContent = 'Name'
  // append to tr
  tableRow.appendChild(tableHead);


}
// invoke funtion
genHeader();