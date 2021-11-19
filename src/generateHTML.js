function generateHTML(data) {

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma-rtl.min.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="./assets/css/styles.css" />
    <title>Music Matcher</title>
    </head>
    
    <body>
      <header>
        <h1 class="title">My Team</h1>
      </header>

      <div class="card">
      <div class="card-content">
        <p class="title">
          ${data.name}
          ${data.role}
        </p>
        <p class="subtitle">
          ${data.id}
          ${data.email}
          ${renderExtraInfo(data.role)}
        </p>
      </div>
    </div>
    
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2020 by ${data.name}</h3>
      </footer>
    </body>
    </html>
    `;
}

function renderExtraInfo(role) {
    // if (role === 'manager') {

    // }

}

module.exports = generateHTML;