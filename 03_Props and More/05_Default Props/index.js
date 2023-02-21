class App extends React.Component {
	render() {
		return (
			<div className="hello-div">
				<Hello />
				<Hello from="Yuki" bangs={5}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));