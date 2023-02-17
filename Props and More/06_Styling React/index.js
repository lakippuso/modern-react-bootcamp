class App extends React.Component {
	render() {
		return (
			// Note: use className instead of class
			<div className="Machine">
				<SlotMachine n1="1" n2="1" n3="1" />
				<SlotMachine n1="3" n2="1" n3="1" />
				<SlotMachine n1="1" n2="3" n3="3" />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));