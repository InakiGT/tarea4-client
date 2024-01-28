const url = 'http://localhost:8080';

const type = process.env.TYPE;
const id = process.env.ID;
const name = process.env.NAME;
const mine_id = process.env.MINE_ID;


switch (type) {
    case "select":
        fetch(url, {
            method: 'GET',
        }).then(response => {
            console.log(response.json());
        });
        break;
    case "insert":
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
                name,
                type,
            }),
        }).then(response => {
            console.log(response.json());
        });
        break;
    case "update":
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
                mine_id,
            }),
        }).then(response => {
            console.log(response.json());
        });
        break;
    case "delete":
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
            }),
        }).then(response => {
            console.log(response.json());
        });
        break;
    default:
        console.error("Formato inválido.");
        console.log("Formato selección: TYPE=select node index.js");
        console.log("Formato actualización: TYPE=update ID=<id> MINE_ID=<mine_id> node index.js");
        console.log("Formato inserción: TYPE=insert ID=<id> NAME=<name> TYPE<type:string> node index.js");
        console.log("Formato eliminación: TYPE=delete ID=<id> node index.js");
        break;
}