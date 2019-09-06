function getRepos(repoSearch) {
  let url = `https://api.github.com/users/${repoSearch}/repos`
  fetch(url)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
}

function displayResults(responseJson) {
  $('.results').empty();
  $('.hidden').show();
  for (let i = 0; i < responseJson.length; i++) {
    $('.results').append(
      `<li>
        <h2>${responseJson[i].name}</h2>
        <p><a href="${responseJson[i].html_url}" target="_blank">${responseJson[i].html_url}</a></p>
        </li>`
    );
  }
}

function listen() {
  $('form').submit(event => {
    event.preventDefault();
    let repoSearch = $('.search').val();
    getRepos(repoSearch);
  });
}

function start() {
  listen();
}

$(start);

