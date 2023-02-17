class App extends React.Component {
	render() {
		return (
			<div>
				<Hello name="Matt" />
				<Hello name="Mariel" />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));