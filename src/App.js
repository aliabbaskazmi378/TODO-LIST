import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import uuid4 from "uuid4";

function App() {
  const localStorageKey = "items";
  const [ItemData, setItemData] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(ItemData));
  }, [ItemData]);

  const addItem = (data) => {
    setItemData([...ItemData, { id: uuid4(), data }]);
  };

  const removeItem = (id) => {
    const updatedList = ItemData.filter((val) => {
      return val.id !== id;
    });
    setItemData(updatedList);
  };

  const deleteAllItems = (data) => {
    localStorage.removeItem(localStorageKey);
    setItemData([]);
  };

  return (
    <div className="App">
      <div className="row justify-content-center">
        <div className="col-sm-1-12 mx-auto">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">
                <Header />
              </h3>
              <div className="card-text">
                <Form addItem={addItem} />
                <ItemList
                  ItemList={ItemData}
                  removeItem={removeItem}
                  deleteAllItems={deleteAllItems}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
