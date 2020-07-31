import React, {Component} from 'react'
import axios from 'axios';
import HouseInfo from './HouseInfo';
import Buttonz from './Buttonz';




class ProductInteraction extends Component {
    constructor(){
      super();
      this.state = {
        itemsForSale: [{
            name: "",
            year: "",
            id: 0,
            description: "",
            status: false
        }],
        index: 0 
      }
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

    sold = () => {
        if(!this.state.itemsForSale[this.state.index].status){
            this.setState({
                status: "Available"
            })
        } else {this.setState({
            status: "Sold!!!"
        })}
    }




    render(){
        // console.log(this.state)
        return (<div className="CatchAll">
                <header className="Head">                          
                    <h1 className = "business-title"> Anderson <br/>Auction House</h1>         
                </header>
                <HouseInfo itemsForSale={this.state.itemsForSale} index={this.state.index}/>
                <Buttonz next={this.next} previous={this.previous} sold={this.sold}/>
                <footer className="Foot"></footer>
            </div>
        )

    }
};

export default ProductInteraction;