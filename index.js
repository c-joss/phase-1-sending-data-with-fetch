function submitData(name, email) {
    const user = {
        name: `${name}`,
        email: `${email}`
    };
    const url = "http://localhost:3000/users";
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(user),
    };

    return fetch(url, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            console.log(object);

            const idElement = document.createElement("p");
            idElement.textContent = `ID: ${object.id}`;
            document.body.appendChild(idElement);
        })
        .catch(function (error) {
            alert("error");
            console.log(error.message)
        
            const errorMessage = document.createElement("p");
            errorMessage.textContent = `Error: ${error.message}`;
            document.body.appendChild(errorMessage);
        });
};





