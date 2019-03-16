import React from 'react';
import styles from './TodoList.module.css';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';
import { TodoEmptyState } from '../TodoItem/TodoItem';

export default function TodoList(props) {
	const { Todo__Header, Todo__Items, Todo__Content } = styles;
	const { todoItems, deleteItem, deleteItemWithEnterKey } = props;

	return (
		<section className={Todo__Content}>
			<div className={Todo__Header}>Todo</div>
			<ul className={Todo__Items}>
				{/* check if todo item is empty, render the empty state if there is no item or the todo items, if there are items */}
				{todoItems.length === 0 ? (
					<TodoEmptyState />
				) : (
					todoItems.map((item, index) => (
						<TodoItem
							item={item}
							key={index}
							index={index}
							deleteItem={e => deleteItem(index, e)}
							deleteItemWithEnterKey={e => deleteItemWithEnterKey(index, e)}
						/>
					))
				)}
			</ul>
		</section>
	);
}

TodoList.propTypes = {
	todoItems: PropTypes.array,
	deleteItem: PropTypes.func,
	deleteItemWithEnterKey: PropTypes.func
};
