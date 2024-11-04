const db = require("../db/db.js");


const index = (req, res) => {
    // creo variabili per salvare il contenuto del listItem e tutti i listItems
    let listItem = "";
    let listItems = "";

    // ciclo per riempire il contenuto del listItem e aggiornare la lista dei listItems
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

    // assegno al markup tutti i listItems
    const markup = `
    <ol>
        ${listItems}
    </ol>`;

    res.send(markup);
}


const show = (req, res) => {
    // prendo il post con slug === al parametro nella query string con find
    const post = db.find(post => post.slug === req.params.slug);
    // console.log(post);
    
    // blocchiamo lo script sia se troviamo il post sia se non lo troviamo
    if (!post) {
        return res.status(404).json({
            error: `404! Not found`
        })
    }
    return res.status(200).json({
        data: post
    })

}












module.exports = {
    index,
    show
}