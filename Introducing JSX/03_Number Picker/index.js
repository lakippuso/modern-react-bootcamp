class Hello extends React.Component {
	constructor(props){
		super(props)
	}
	getNum = () => {
		return Math.floor(Math.random() * 10) + 1;
	}
	render() {
		var random_num = this.getNum();
		let msg = '';

		if(random_num > 5){
			msg = <span>You Win!</span>;
		}
		else{
			msg = <span>You Lost!</span>;
		}


		return (
			<div className="me">
				<h1>Number: {random_num}</h1>
				{msg}
			</div>
		);
	}
}

ReactDOM.render(<Hello />, document.getElementById('app'));