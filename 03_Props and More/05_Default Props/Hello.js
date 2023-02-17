class Hello extends React.Component {
	// Make default values
	static defaultProps = {
		from: 'Matt',
		bangs: 1
	}
	render() {
		let bangs = "!".repeat(this.props.bangs);
		return (
			<h1>Hello World! I'm {this.props.from}{bangs}</h1>
		);
	}
}