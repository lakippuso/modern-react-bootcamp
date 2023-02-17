class Hello extends React.Component {
	render() {
		var name = "matt"
		return (
			<div className="me">
				<h1>Hello im {name}</h1>
				<img src="https://hips.hearstapps.com/hmg-prod/images/ny-5-2-clean-1656446800.jpg" alt="nayeon" width="500" height="400"/>
			</div>
		);
	}
}

ReactDOM.render(<Hello />, document.getElementById('app'));