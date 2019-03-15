import React from 'react';
import styles from './TodoForm.module.css';
import PropTypes from 'prop-types';

export default function TodoForm(props) {
	const { Todo__Form, Todo__Input, Todo__Add } = styles;
	const { changeInput, addTodoItem, inputValue } = props;

	return (
		<form className={Todo__Form}>
			<input
				type="text"
				className={Todo__Input}
				placeholder="What do we have todo"
				onChange={changeInput}
				onSubmit={addTodoItem}
				autoFocus
				value={inputValue}
				autoComplete="true"
				autoCorrect="true"
				tabIndex="1"
			/>

			<button type="submit" className={Todo__Add} onClick={addTodoItem}>
				Add
			</button>
		</form>
	);
}
TodoForm.propTypes = {
	changeInput: PropTypes.func
};
