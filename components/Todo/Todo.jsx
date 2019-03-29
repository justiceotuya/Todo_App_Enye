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

		//binding functions
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDeleteItem = this.handleDeleteItem.bind(this);
		this.handleDeleteItemWithEnterKey = this.handleDeleteItemWithEnterKey.bind(this);
		this.getInitialProps = this.getInitialProps.bind(this);
	}

	componentDidMount() {
		//when the device mounts, hoist the getInitialProps function and run it
		this.getInitialProps();
	}

	getInitialProps = async function() {
		//fetch data from the backend
		const res = await fetch('/todo-items');
		const data = await res.json();

		// set the data as todo items
		this.setState({
			todoItems: [...data.items]
		});
	};

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
		//check if the something is written down in the input box and only add the item to the list. so empty items cannot be added
		if (this.state.inputValue !== '') {
			this.setState({
				todoItems: [...this.state.todoItems, this.state.inputValue],
				// set the input value to empty
				inputValue: ''
			});
		}
	};

	// handle deleting of an item
	handleDeleteItem = (index, e) => {
		//copy state items to a new array to avoid mutating state directly
		let modifiedArray = [...this.state.todoItems];

		// remove the item from the todo List
		modifiedArray.splice(index, 1);

		// set todo item to modified list
		this.setState({
			todoItems: modifiedArray
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
