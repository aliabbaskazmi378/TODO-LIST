import React from 'react'

const ItemList = (props) => {
    const {ItemList, removeItem, deleteAllItems} = props;
    const handleDeleteAllItems = () => {
        deleteAllItems('1');
    }
    const items = ItemList.map((val, i) => {
        return(
            <tr key={i}>
                <td>{val.data.item}</td>
                <td onClick={() => removeItem(val.id)}><button type="button" className="btn btn-outline-danger btn-sm">Delete</button></td>
            </tr>
        )
    })
  return (
    <>
    <div>HERE'S IS YOUR LIST :)</div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {items}
                
            </tbody>
        </table>
        {
            ItemList.length > 0 ? <button type="button" className="btn btn-outline-danger btn-sm" onClick={ handleDeleteAllItems }>Delete All</button> : 'No result found!'
        }
        
    </>
  )
}

export default ItemList