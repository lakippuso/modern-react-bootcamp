class App extends React.Component {
	render() {
		return (
			<div className="group">
				<Friend name="Matt" hobbies={["Testing", "Coding"]}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));