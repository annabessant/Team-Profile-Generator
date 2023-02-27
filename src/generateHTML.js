const generateHTML = (answerArr) => {
    let newCard = '';
    let employeeCard = [];
    for (let i = 1; i < answerArr; i++) {
        switch (answerArr [i].getRole()) {
            
            case 'Engineer':
                newCard +=`
    <!-- Engineer card -->>
    <div class="card" style="width: 18rem;">
        <div class ="card-body">
        <h3 class="card-title text-center" id="name">${answerArr[i].name}</h3>
        <h5 id="role" class="text-center"><i class="fas fa-user-ninja"></i> ${answerArr[i].getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-ietm" id="id">ID: ${answerArr[i].id}</li>
            <li class="list-group-item" id="email"><a href="mailto: ${answersArr[i].email}">Email: ${answerArr[i].email}</a></li>
            <li class="list-group-item" id="github"><a href="https://github.com/${answersArr[i].github}" target="_blank">Github: ${answerArr[i].github}</a></li>
        </ul>
    </div>`; 

            employeeCard.push(newCard)
            break;

            case 'Intern':
                newCard +=`
    <!-- Intern card -->>
    <div class="card" style="width: 18rem;">
        <div class ="card-body">
        <h3 class="card-title text-center" id="name">${answerArr[i].name}</h3>
        <h5 id="role" class="text-center"><i class="fas fa-user-graduate"></i> ${answerArr[i].getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-ietm" id="id">ID: ${answerArr[i].id}</li>
            <li class="list-group-item" id="email"><a href="mailto: ${answersArr[i].email}">Email: ${answerArr[i].email}</a></li>
            <li class="list-group-item" id="school">School: ${answerArr[i].school}</li>
        </ul>
    </div>`;
            
        employeeCard.push(newCard)
        break;
        }
    }
};

return 

<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
<link rel="stylesheet" href="styles.css" /></link>

<title>My Team</title>
</head>

<body>

<!-- fluid jumbotron -->
<div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h1 class="display-4">My Team</h1>
        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    </div>
</div>

<!-- card container -->
<div class="container" id="card-container">
    <div class="row">
        <div class="card-area col-12 d-flex justify-content-center mit-5">
<!-- Manager card -->
<div class="card text"  style="width: 18rem;">
  <div class="card-body">
    <h3 class="card-title text-center" id="name">${answersArr[0].name}</h3>
    <h5 id="role" class="text-center"><i class="fas fa-user-tie"></i>Manager</h5>
  </div>

  <ul class="list-group list-group-flush">
    <li class="list-group-item" id="id">ID: ${answersArr[0].email}">Email: ${answersArr[0].email}</a></li>
    <li class="list-group-item" id="email"> <a href="mailto:${answersArr[0].email}">Email: ${answersArr[0].email}</a></li>
    <li class="list-group-item" id="officeNum">Office number: ${answersArr[0].officeNum}></li>
  </ul>
</div>
${newCard}
        </div>
    </div>
</div>

</body>

</html>`;

module.exports = generateHTML; 