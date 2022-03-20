import React from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import { connect } from "react-redux";
import { removeTodo } from "../storage/actions";


const TodoList = ({todos =[], onRemovePressed}) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map((todo, index) => (
            <TodoListItem 
                key={index} 
                todo={todo} 
                onRemovePressed={onRemovePressed}
            />
        ))}
    </div>
);

const mapStateToProps =(state) => ({
    todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
    onRemovedPressed: text => dispatch(removeTodo(text)),
});d

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);