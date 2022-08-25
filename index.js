function submitData(name, email) {
    const userInfo = {
        "name": name,
        "email": email,
    };
    const configurationObject = {
        method: `POST`,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(userInfo),
    };
    return fetch('http://localhost:3000/users', configurationObject)
        .then((response => response.json()))
        .then(((body => addNewContact(body.id))))
        .catch(function() {
            let message = 'Unauthorized Access'
            document.body.append(message)
    });
};

function addNewContact(newUser) {
    document.getElementsByTagName('body')[0].innerHTML = newUser    
}

submitData("name", "email")