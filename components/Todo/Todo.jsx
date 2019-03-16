import React, { Component } from 'react';
import styles from './Todo.module.css';
import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';
import PropTypes from 'prop-types';
class Todo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inputValue: '',
			todoItems: []
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDeleteItem = this.handleDeleteItem.bind(this);
		this.handleDeleteItemWithEnterKey = this.handleDeleteItemWithEnterKey.bind(this);
	}

	//get the value from the todo form
	handleInputChange = e => {
		this.setState({
			inputValue: event.target.value
		});
	};

	//handle submiting of todo item
	handleSubmit = e => {
		//prevent default form submit action
		e.preventDefault();
		//check if the something iw written down in the input box and only add the item to the list. so empty items cannot be added
		if (this.state.inputValue !== '') {
			this.setState({
				todoItems: [...this.state.todoItems, this.state.inputValue],
				// set the input value to epmty
				inputValue: ''
			});
		}
	};

	// handle deleting of an item
	handleDeleteItem = (index, e) => {
		// remove the item from the todo List
		this.state.todoItems.splice(index, 1);
		// set todo item to modified list
		this.setState({
			todoItems: [...this.state.todoItems]
		});
	};

	//for accessibility, this function deletes item from the list with an enter key
	handleDeleteItemWithEnterKey = (index, e) => {
		if (e.key === 'Enter') {
			// calls the delete function when enter key is pressed
			this.handleDeleteItem(index);
		}
	};

	render() {
		const { main, Todo } = styles;
		const { todoItems, inputValue, checked } = this.state;
		return (
			<main className={main}>
				<section className={Todo}>
					<TodoList
						todoItems={todoItems}
						checked={checked}
						deleteItem={this.handleDeleteItem}
						deleteItemWithEnterKey={this.handleDeleteItemWithEnterKey}
					/>
					<TodoForm changeInput={this.handleInputChange} addTodoItem={this.handleSubmit} inputValue={inputValue} />
				</section>
			</main>
		);
	}
}

export default Todo;
