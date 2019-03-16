import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './TodoItem.module.css';
import PropTypes from 'prop-types';

//epmty state for the todo list
export const TodoEmptyState = () => {
	const { empty, addIcon } = styles;

	return (
		<React.Fragment>
			<section className={empty}>
				<p> Please Add a task</p>
				<FontAwesomeIcon icon={faPlus} fixedWidth className={addIcon} />
			</section>
		</React.Fragment>
	);
};

export default function TodoItem(props) {
	const { item, deleteItem, deleteItemWithEnterKey } = props;
	const { Todo__Item, Item, trash } = styles;

	return (
		<li className={Todo__Item}>
			<div className={Item} tabIndex="0">
				{item}
			</div>
			<FontAwesomeIcon
				tabIndex="0"
				role="button"
				icon={faTrashAlt}
				onKeyDown={deleteItemWithEnterKey}
				className={trash}
				onClick={deleteItem}
				aria-label={`delete ${item}`}
				title={`delete ${item}`}
			/>
			<label />
		</li>
	);
}

TodoItem.propTypes = {
	item: PropTypes.string,
	deleteItem: PropTypes.func,
	deleteItemWithEnterKey: PropTypes.func
};
