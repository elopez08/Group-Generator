//Before we get to the actual writing of the information, we want to make sure that the values that we received are not lost.  Hence why we have three different properties here.  We have the Manager, Engineer, and Intern.  Once that's defined, we then go to the actual writing of the code.  There's an array there because we have a good amount of information on it.  As long as the value doesn't hit max, it'll write all that code down and then take the length of it and continue to go on a loop so that we can get all the information down.
// create Manager card
const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// create Engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

// create Intern card 
const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};


generateHTML = (data) => {


    //This value is empty in the beginning
    pageArray = []; 

    //We have x amount of data.  Say that we entered 3 different people, data.length = 3
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        //This is taken from the .js from the manager, engineer, and intern files.  Once the array is called, it'll then make role equal to whatever the statement of getRole() is.  In this case, we want to add the manager first, so that means that when we selected that as an option, it'll then be directed to the manager.js.  With it, we have getRole() to return as "Manager", which will be used here:
        const role = employee.getRole(); 

        //With the said example, that would make employee = the data array

        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            //Adds information of array from the Manager data
            pageArray.push(managerCard);
        }


        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            //Adds info of the array from the Engineer data
            pageArray.push(engineerCard);
        }


        if (role === 'Intern') {
            const internCard = generateIntern(employee);
            //Adds info of the array from the Intern data
            pageArray.push(internCard);
        }
        
    }

    //Once this is done, the array of pageArray will now hold values.

    //Next, we set the value of employeeCards to be the array information that it is joining.
    const employeeCards = pageArray.join('')

    //generateTeam will then call on the generateTeamPage function and then use all that information gathered and apply it there
    const generateTeam = generateTeamPage(employeeCards); 

    //We return the value of whatever generateTeam is
    return generateTeam;

}

//Make the HTML page from the array that we gathered.
//Inspect that ${employeeCards}.  That is equal to the value of all the information that is being stored.  So with this, it'll start writing down the infromation needed.  Manager, Engineer, and Intern have their own sets of writing, meaning that it'll be set on that specific area with that specific code.  With the css being another factor, it'll then make the value
const generateTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <!-- For the layout of the page -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <!-- For the icons for the page -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!-- For using the stylesheet provided on this project -->
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!--Team Cards-->
                    ${employeeCards}
                </div>
            </div>
        </main>
        
    </body>
  </html>
`;
}

// Export the Index
module.exports = generateHTML; 