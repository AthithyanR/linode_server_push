const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (_req, res) => res.status(200).json({ message: "hello" }))

app.listen(8080, () => console.log('server started on port 8080'))