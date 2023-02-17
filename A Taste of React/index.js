class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello there!</h1>
			</div>
		);
	}
}

ReactDOM.render(<Hello />, document.getElementById('app'));

// import * as ReactDOM from 'react-dom/client';
// var ReactDOM = require('react-dom/client');

// function Hello() {
// 	return (
// 		<div>
// 			<h1>Hello there!</h1>
// 			<h1>Hello there!</h1>
// 			<h1>Hello there!</h1>
// 		</div>
// 	);
// }
  
// const container = document.getElementById('app');
// const root = ReactDOM.createRoot(container);
// root.render(<Hello />);