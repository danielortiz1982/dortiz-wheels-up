import React, {Component} from 'react'
import Inventory from '../Inventory/Inventory'
import './main-content.sass'

class MainContent extends Component{
    constructor(props){
        super(props)
        this.state = {
            inv: []
        }
    }
    async componentDidMount(){

        let endpoint = `http://localhost:3500`

        // init empty array
        let inv = []

        // API call to return all Car Makes
        let carMakes        = await fetch(`${endpoint}/CarMakes`)
        let carMakesJSON    = await carMakes.json()
        let carMakesData    = carMakesJSON

        // API call to return all inventory
        let inventory       = await fetch(`${endpoint}/inventory`)
        let inventoryJSON   = await inventory.json()
        let inventoryData   = inventoryJSON

        // Loop through carMakesData
        carMakesData.forEach( (element, index, array) => {
            // Filter out list based on carMake ID
            let car = array.filter( carMake => carMake.id === element.id)
            let inventoryList = inventoryData.filter( car => car.carId === element.id)
            // Add quantity of each inventoryList.quantity
            let quantityTotal = inventoryList.reduce( (previousValue, currentValue) => previousValue + currentValue.quantity, 0)
            // Push new array into inv array
            inv.push({inventoryList, car, itemId: index, quantityTotal})
        })
        this.setState({inv})
    }
    render(){
        return (
            <div className="main-content">
                <Inventory data={this.state} />
            </div>
        )
    }
}

export default MainContent