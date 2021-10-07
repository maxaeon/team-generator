
// const employeeObjects = require('./employeeObjects');

let renderEmployees = '';

let generateHTML = function generateHTML(employeeObjects) {

  if (employeeObjects) {
    console.log(employeeObjects);
    employeeObjects.forEach(employee => {
      employee.getName();
        console.log(employee.constructor.name);
        switch(employee.constructor.name) {
            case "Manager":
                renderEmployees += `<div class="card" style="width: 18rem;">
                <div class="card-body manager">
                  <h5 class="card-title" id="${employee.name}">${employee.name}</h5>
                  <p class="card-text" id="${employee.constructor.name}">${employee.constructor.name}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" id="${employee.id}">ID: ${employee.id}</li>
                  <li class="list-group-item" id="${employee.email}">Email: <a href="mailto:${employee.email}" >${employee.email}</a></li>
                  <li class="list-group-item" id="${employee.officeNumber}">Office Number: ${employee.officeNumber}</li>
                </ul>
            </div>\n`
            break;

            case "Engineer":
                renderEmployees += `<div class="card" style="width: 18rem;">
                <div class="card-body manager">
                  <h5 class="card-title" id="${employee.name}">${employee.name}</h5>
                  <p class="card-text" id="${employee.constructor.name}">${employee.constructor.name}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" id="${employee.id}"> ID: ${employee.id}</li>
                  <li class="list-group-item" id="${employee.email}">Email: <a href="mailto: ${employee.email}">${employee.email}</a></li>
                  <li class="list-group-item" id="${employee.github}">Github: <a href="https://github.com/${employee.github}">${employee.github}</a></li>
                </ul>
            </div> \n`
            break;

            case "Intern":
                renderEmployees += `<div class="card" style="width: 18rem;">
                <div class="card-body manager">
                  <h5 class="card-title" id="${employee.name}">${employee.name}</h5>
                  <p class="card-text" id="${employee.constructor.name}">${employee.constructor.name}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" id="${employee.id}">ID: ${employee.id}</li>
                  <li class="list-group-item" id="${employee.email}">Email: <a href="mailto: ${employee.email}" >${employee.email}</a></li>
                  <li class="list-group-item" id="${employee.school}">School: ${employee.school}</li>
                </ul>
            </div> \n`
            break;
            
        }
    })
  }

  return`<!doctype html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
  
      <!-- Bootstrap CSS -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">
  
      <title>Team Info</title>
    </head>
    <body>
      <div class="container">
          <h1 class="text-center mt-5" >Team Profile</h1>
          <!-- Manager Card -->
          ${renderEmployees}
    </div>
  
      <!-- Option 1: Bootstrap Bundle with Popper -->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ" crossorigin="anonymous"></script>
    </body>
  </html>`
}

module.exports = generateHTML;