async function fetchAsync(user) {
    let rensponse = await fetch('https://api.github.com/users/EL-markt-Arda')
    rensponse = await rensponse.json();

    console.log(rensponse);

    document.getElementById("EL-markt-Arda").innerHTML = rensponse.login;

    const image = document.getElementById("")
}


