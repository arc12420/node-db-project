const ItemsForSale = require('./ItemsForSale.json')
let id = 5;

module.exports = {
    getItemsForSale: (req, res) => {
        res.status(200).send(ItemsForSale)
    },
    addItemsForSale: (req, res) => {
        const { name, year, description } = req.body;
        if (!name) {
            res.status(405).send('Unable to find item Name')
        } else {
            const NewItemForSale = {
                id,
                status: false,
                name,
                year,
                description
            };
            ItemsForSale.push(NewItemForSale);
            id++;
            res.status(200).send(ItemsForSale);
        }
    }
}