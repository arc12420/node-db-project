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
            <div className="formInput">
                <form onSubmit = {(e) => {
                this.props.addItem(name, year, description)
                }}>
                    <input className="inpt" onChange = {(e) => this.handleName(e.target.value)} value ={name} type="text" placeholder = "Item Name"/>
                    <input className="inpt" onChange = {(e) => this.handleYear(e.target.value)} value ={year} type="text" placeholder = "Year Crafted"/>
                    <input className="inpt" onChange = {(e) => this.handleDescription(e.target.value)}value ={description} type="text" placeholder = "Description of Item"/>
                    <button className="adBtn" type = "submit"> Add Item </button>
                </form>
            </div>
        </div>
    }
}

export default Form;