import React, { useState, useRef } from 'react';
import firebase from '../firebase/firebase';


function Todo({todo}){
    const [isUpdate, setIsUpdate] = useState(false);
    const textRef = useRef(null);

    const deleteTodo =() => {
        const todoRef = firebase.database().ref('Todo').child(todo.id);
        todoRef.remove();
    }

    const completeTodo = () => {
        const todoRef = firebase.database().ref('Todo').child(todo.id);
        todoRef.set({
          title: textRef.current.value
        });
      };
    

      const renderForm = () => {
        return (
            <form onSubmit={completeTodo}>
                <input ref={textRef} type="text" defaultValue={todo.title}/>
                <button type="submit">Edit Todo</button>
            </form>
        );
    };

    const renderItem = () => {
        return (
            <div>
            <p>{todo.title}</p>
            <button onClick={deleteTodo}>Delete</button>
            {/* <button onClick={completeTodo}>Complete</button> */}
            <button onClick={() => setIsUpdate(true)}>Edit</button>
        </div>
        );
    }
    return (
        <>
            <p></p>
            <div>
                { isUpdate ? renderForm() : renderItem() }
            </div>             
        </>
    );

    // return (
    //     <div>
    //         <p>{todo.title}</p>
    //         <button onClick={deleteTodo}>Delete</button>
    //         {/* <button onClick={completeTodo}>Complete</button> */}
    //         <button onClick={() => setIsUpdate(true)}>Edit</button>
    //     </div>
    // );
}

export default Todo;