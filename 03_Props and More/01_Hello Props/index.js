class App extends React.Component {
	render() {
		return (
			<div>
				<Hello to="Matt" from="Mariel" num={5}/>
				<Hello to="Mariel"  from="Matt" num={6}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));