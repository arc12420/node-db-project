const ItemsForSale = require('./ItemsForSale.json')
let id = 5;

module.exports = {
    getItemsForSale: (req, res) => {
        res.status(200).send(ItemsForSale)
    },
    addItemsForSale: (req, res) => {
        const { name, year, description } = req.body;
        console.log(req.body)
        if (!name) {
            res.status(405).send('Unable to find item Name')
        } else {
            console.log(req.body)
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
    },
    putItemsForSale: (req, res) => {        
        const { id } = req.params;
        const { status } = req.body;
        console.log(id, status)
        const index = ItemsForSale.findIndex((el) => {
            return el.id === +id;
        });
        ItemsForSale[index].status = status;
        return res.status(200).send (ItemsForSale);
    },

    deleteItemsForSale: (req, res) => {
        const { id } = req.params
        const index = ItemsForSale.findIndex ( item =>item.id === +id);
        console.log(id, index)
        if(index === -1){
            res.status (404).send ('Item not found in list')
        } else {
            ItemsForSale.splice(index, 1);
            res.status(200).send(ItemsForSale)
        }
    }
}