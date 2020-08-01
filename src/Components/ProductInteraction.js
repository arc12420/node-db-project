import React, {Component} from 'react'
import axios from 'axios';
import HouseInfo from './HouseInfo';
import Buttonz from './Buttonz';
import Form from './Form';
import Navigation from './Navigation';




class ProductInteraction extends Component {
    constructor(){
      super();
      this.state = {
        itemsForSale: [],
        index: 0 
      }
    //   this.getItemsForSale = this.getItemsForSale.bind
    }
    
    componentDidMount() {
        this.getItemsForSale()
    };
  
    getItemsForSale = () => {
      axios.get('/api/itemsForSale')
            .then( res => {
                this.setState({
                    itemsForSale: res.data
                })
            }
        ).catch ( err => console.log(err))
    }

    addItemsForSale = (name, year, description) => {
        axios.post(`/api/ItemsForSale`, {name, year,description})
        .then( res => {
            this.setState({
                itemsForSale:res.data
            })
        }
     ).catch ( err => console.log(err))
    }

    putItemsForSale = (id, status) => {
        axios.put(`/api/ItemsForSale/${this.state.itemsForSale[this.state.index].id}`, {status: !this.state.itemsForSale[this.state.index].status})
            .then( res => {
                this.setState({
                    itemsForSale:res.data
                })
            }
        ).catch ( err => console.log(err))
    } 

    deleteItemForSale =() => {
        axios.delete(`/api/ItemsForSale/${this.state.itemsForSale[this.state.index].id}`)
        .then(res => {
            this.setState({
                itemsForSale: res.data,
                index: 0
            })
        }).catch( err => console.log(err))
    }


    next = () => {
        if(this.state.index < this.state.itemsForSale.length - 1){
            this.setState({
                index: this.state.index + 1
            })
        }
    }
    
    previous = () => {
        if(this.state.index > 0){
            this.setState({
                index: this.state.index - 1
            })
        }
    }


    render(){
        // console.log(this.state)
        return (<div className="CatchAll">
                <header className="Head">                          
                    <h1 className = "business-title"> Anderson <br/>Auction House</h1>         
                </header>
                <main>
                    <div className="spaceAndButtons">
                        <div className="pushHouseInfoBtnRight"></div>
                        {this.state.itemsForSale[this.state.index] ? <Buttonz putItemsForSale={this.putItemsForSale} deleteItemForSale={this.deleteItemForSale}/>: <div className="houseInfoNav"></div>}
                    </div>
                    <section className="allItemInfo">
                        <Form addItem={this.addItemsForSale}/>
                        <HouseInfo itemsForSale={this.state.itemsForSale} index={this.state.index}/>
                    </section>
                </main>
                <footer className="Foot">
                    <Navigation  next={this.next} previous={this.previous}/>
                </footer>
            </div>
        )

    }
};

export default ProductInteraction;