import React, {useState} from 'react';
import Todo from "../../components/Todo/Todo";
import style from './Todos.module.css'

const TodosPage = () => {
    const [white, setWhite] = useState(["todo 1", "todo 2", "todo 3"])
    return (
        <div className={style.main}>
            {white.map(one => <Todo title = {one}/>)}
        </div>
    );
};

export default TodosPage;