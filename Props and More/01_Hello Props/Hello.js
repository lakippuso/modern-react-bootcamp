class Hello extends React.Component {
	render() {
		console.log(this.props)
		return (
			<div>
				<h1>Hello {"Bro " + this.props.to}! I'm {this.props.from} and i am {this.props.num} years old</h1>
			</div>
		);
	}
}