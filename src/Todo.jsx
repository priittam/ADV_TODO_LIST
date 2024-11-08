import React, { useState } from 'react'
import './index.css'
const Todo = () => {

    const [inputData,setInputData]=useState();
    const [items,setItems]=useState([]);
    const[toggle,setToggle]=useState(true);
    const[isEditItem,setIsEditItem]=useState(null);
    const addItem=()=>{
      if(!inputData){
        alert("plz write something before adding");
      }else if(inputData && !toggle){
        setItems(items.map((elem)=>{
            if(elem.id===isEditItem){
                return{...elem, name:inputData}
            }
            return elem;
        }))
        setToggle(true);
        setInputData("");
        setIsEditItem(null);
      }
      else{
        const allInputData={id:new Date().getTime().toString(),name: inputData}
      setItems([...items,allInputData]);
      setInputData("");
      }
    }
    const deleteItem=(index)=>{
      const upditems=items.filter((elem)=>{
         return index != elem.id;
      });
      setItems(upditems);
    }
    const removeAll=()=>{
        setItems([]);
    }
    const editItem=(id)=>{
       let newEditItem=items.find((elem)=>{
        return elem.id===id;
       })
       setToggle(false);
       setInputData(newEditItem.name);
       setIsEditItem(id);
    }
  return (
    <>
    <div className='main-div'>
        <div className='child-div'>
          <figure>
            <img src="http://surl.li/hkzve" alt="" />
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className='addItems'>
            <input type="text" placeholder='🖐️ add Items...'
            value={inputData}
            onChange={(e)=>setInputData(e.target.value)}
             />
          {
            toggle ?  <i class="fa fa-sharp fa-solid fa-plus fa-fade fa-2xl" title='add items' onClick={addItem}></i>
            : <i className="fa fa-solid fa-pen-to-square fa-fade" title='update item'onClick={addItem} ></i>
          }
          </div>
          <div className='showItems'>
          {items.map((elem)=>{
            return(
                <div className='eachItem' key={elem.id}>
                    <h3>{elem.name}</h3>
                    <div className='todo-btn'>
                    <i className="fa fa-solid fa-pen-to-square fa-fade" title='edit item' onClick={()=>editItem(elem.id)}></i>
                    <i className="fa fa-solid fa-trash" title='delete items' onClick={()=>deleteItem(elem.id)}></i>
                    </div>
                </div>
            );
          })}
           

          </div>
          <div className='showItems'>
            <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}><span>Check List</span></button>
          </div>
        </div>
    </div>
   </>
  )
}

export default Todo