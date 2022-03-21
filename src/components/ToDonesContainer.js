import React, { useContext } from 'react';
import ToDoneItem from './ToDoneItem';
import MyContext from './Context/MyContext';

function ToDonesContainer () {
  const {toDones} = useContext(MyContext)

    const toDoNesItems = toDones.map(el => {
      return (
        <ToDoneItem
          item={el}
          key={el.id}
        ></ToDoneItem>
      );
    });

    return (
      <div className="todones-container">
        <h3>BACKLOG</h3>
        {toDones.length > 0 && toDoNesItems}
      </div>
    );
  }

export default ToDonesContainer;