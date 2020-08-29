import React, {Component} from 'react'
import './inventory-details.sass'

class InventoryDetails extends Component{
    render(){
        console.log(this.props.details)
        return this.props.details.map( element => (
            <div className="inv-list" key={element.itemId}>
                {element.car.map(car => (
                    <h1 key={car.make}>{car.make}, {car.model}</h1>
                ))}
                {element.inventoryList.map( inventoryList => (
                    <div className="list-detail" key={inventoryList.id}>
                        <div className="details">
                            <div className="date-received">
                                <p>Date received: {inventoryList.dateReceived}</p>
                            </div>
                            <div className="quantity">
                                <p>Quantity: {inventoryList.quantity}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <h4>Total: {element.quantityTotal}</h4>
            </div>
        ))
    }
}

export default InventoryDetails