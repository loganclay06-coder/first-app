exports.render = function (req, res) {
    const definitions = [
        {
            term: "MongoDB",
            definition: "MongoDB is a NoSQL database that stores data in flexible JSON-like documents and is designed for scalability and high performance."
        },
        {
            term: "Express",
            definition: "Express is a lightweight web application framework for Node.js that simplifies routing, middleware, and server-side development."
        },
        {
            term: "Angular",
            definition: "Angular is a front-end framework developed by Google for building dynamic single-page web applications using TypeScript."
        },
        {
            term: "Node.js",
            definition: "Node.js is a JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser."
        }
    ];

    res.render('index', {
        name: 'Logan Clay',
        title: 'The MEAN Stack',
        definitions: definitions
    });
};