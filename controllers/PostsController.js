const db = require("../db/db.js");


const index = (req, res) => {
    let listItem = "";
    let listItems = "";
    db.forEach(post => {
        
        listItem = 
        `<li>
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <img src="${post.image}">
            <p>${post.tags}</p>
        </li>`

        listItems += listItem;
    })

    const markup = `
    <ul>
        ${listItems}
    </ul>`;

    res.send(markup);
}















module.exports = {
    index,
    
}