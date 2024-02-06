import React, { useState } from "react";

const Form = ({addItem}) => {
  const [item, setItem] = useState({item: ""});
  const handleAdd = (e) => {
    e.preventDefault();
    if (item.item === '') {
        alert('Please fill item Field!');
        return;
    }
    addItem(item);
    setItem({item: ""});
    
  };
  const handleChange = (e) => {
    if (e.target.name === 'item') {
        setItem({...item, item: e.target.value})
    } 
    return;
  };
  
  return (
    <>
      <form className="form-inline">
        <div className="form-group-sm col-sm-12">
          <input
            type="text"
            name="item"
            className="form-control form-control-sm"
            value={item.item}
            onChange={handleChange}
            placeholder="Add Item"
          />
          
            <button
              type="button"
              className="btn btn-outline-success btn-sm"
              onClick={handleAdd}
            >
              Add
            </button>
          
        </div>
      </form>
    </>
  );
};

export default Form;
