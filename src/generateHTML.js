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