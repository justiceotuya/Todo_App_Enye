import React from 'react';
import styles from './TodoList.module.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

//epty state for the todo list
const TodoEmptyState = () => {
	return <section className={styles.empty}>You do not have any Task to do at the moment, welldone</section>;
};

const TodoItem = props => {
	const { item, deleteItem, checked } = props;
	const { Todo__Item, done, Item, trash } = styles;
	let className;

	return (
		<li className={Todo__Item}>
			<input type="checkbox" name={item} checked={checked} />
			<div className={Item}>{item}</div>
			<FontAwesomeIcon icon={faTrashAlt} fixedWidth className={trash} onClick={deleteItem} />
		</li>
	);
};

export default function TodoList(props) {
	const { Todo__Header, Todo__Items, Todo__Content } = styles;
	const { todoItems, checked, deleteItem } = props;
	return (
		<section className={Todo__Content}>
			<div className={Todo__Header}>Todo</div>
			<ul className={Todo__Items}>
				{/* check if todo item is empty, render the empty state if there is no item or the todo items, if there are items */}
				{todoItems.length === 0 ? (
					<TodoEmptyState />
				) : (
					todoItems.map(
						(item, index) => (
							<TodoItem
								item={item}
								key={index}
								checked={checked}
								deleteItem={e => deleteItem(index, e)}
							/>
						)
						// console.log(index)
					)
				)}
			</ul>
		</section>
	);
}

TodoItem.propTypes = {
	item: PropTypes.string,
	disabled: PropTypes.bool
};
