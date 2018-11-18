function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);

    var id_token = googleUser.getAuthResponse().id_token;

    procesGoS(id_token).then();

    // fetch('http://localhost:8000/go/s')
    //     .then(function (r) {
    //         return r;
    //     });
    //
    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', 'http://localhost:8000/go/s');
    // xhr.setRequestHeader('User-Agent', 'vc');
    // xhr.setRequestHeader('Content-Type', 'gos');
    // xhr.setRequestHeader('Accept-Language', '');
    // xhr.onload = function() {
    //     console.log('Signed in as: ' + xhr.responseText);
    // };
    // xhr.send('idtoken=' + id_token);
}

async function procesGoS(token) {
    let res = await getGoS(token)
    console.log(res)
}

async function getGoS(body) {
    let h = new Headers()

    h.set('Content-Type', '')
    h.set('User-Agent', '')
    h.set('Accept-Language', '')
    h.set('Accept', '')

    return await fetch('http://localhost:8080/go/startCoords', {
        body,
        credentials: 'omit',
        headers: h,
        method: 'PUT',
    })
}