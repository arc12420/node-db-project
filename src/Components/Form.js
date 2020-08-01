import React, {Component} from 'react';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            year: "",
            description: ""
        }
    }

    handleName (value) {
        this.setState({name: value})
    }
    handleYear (value) {
        this.setState({year: value})
    }
    handleDescription (value) {
        this.setState({description: value})
    }





    render(){
        const {name, year, description} = this.state

        return <div className="formContainer">
            <form onSubmit = {(e) => {
                // e.preventDefault() 
                this.props.addItem(name, year, description)
            }}>
                <input onChange = {(e) => this.handleName(e.target.value)} value ={name} type="text" placeholder = "Item Name"/>
                <input onChange = {(e) => this.handleYear(e.target.value)} value ={year} type="text" placeholder = "Year Crafted"/>
                <input onChange = {(e) => this.handleDescription(e.target.value)}value ={description} type="text" placeholder = "Description of Item"/>
                <button type = "submit"> Add Item </button>
            </form>
        </div>
    }
}

export default Form;