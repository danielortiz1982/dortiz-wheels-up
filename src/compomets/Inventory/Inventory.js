import React, {Component} from 'react'
import InventoryDetails from '../InventoryDetails/InventoryDetails'
import './inventory.sass'

class Inventory extends Component{
    render(){
        return (
            <div className="inventory">
                <InventoryDetails details={this.props.data.inv} />
            </div>
        )
    }
}

export default Inventory