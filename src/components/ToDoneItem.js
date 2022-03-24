import React, { useContext } from 'react';
import MyContext from './Context/MyContext';

function ToDoneItem({item}) {
 const {updateItem}=  useContext(MyContext)
    return (
      <div className="todones-item">
        <div className="textalign"></div>
        <p>{item.text}</p>
        <div className="actions">
          <button
            className="btn"
            onClick={() => updateItem(item.id)}
          >
            &#8635;
          </button>
        </div>
      </div>
    );
  }


export default ToDoneItem;