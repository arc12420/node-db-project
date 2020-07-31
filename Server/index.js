const express = require('express');
const ctrl = require('./controller');
const app = express();
const port = 4040;

app.use(express.json());

app.get("/api/ItemsForSale", ctrl.getItemsForSale)
app.post("/api/ItemsForSale", ctrl.addItemsForSale)
// app.delete("/api/ItemsForSale/:id")
// app.put("/api/ItemsForSale/complete/:id")
// app.put("/api/ItemsForSale/:id")

app.listen(port, () => console.log (`Server listening on port ${port}`));

