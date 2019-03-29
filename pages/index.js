import React from 'react';
import Todo from '../components/Todo/Todo';
import './index.css';
import 'isomorphic-fetch';

const dev = process.env.NODE_ENV !== 'production';
const server = dev ? 'http://localhost:3000' : '';

class Index extends React.Component {
	//fetch data from the backend
	static async getInitialProps() {
		const res = await fetch(`${server}/todo-items`);
		const data = await res.json();
		//return an object here

		return { data: data.items };
	}

	render() {
		return <Todo items={this.props.data} />;
	}
}

export default Index;
