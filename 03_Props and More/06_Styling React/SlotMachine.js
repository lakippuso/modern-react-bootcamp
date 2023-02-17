function getNum(){
	return Math.floor(Math.random() * 3) + 1;
}
const allEqual = arr => arr.every(val => val === arr[0]);

class SlotMachine extends React.Component {
	render() {
		const {n1, n2, n3} = this.props;
		
		var winner = allEqual([n1, n2, n3]);

		var msg = (winner) ? 'You Win!' : 'You Lost!' ;

		const colors = (winner) ? {backgroundColor: 'green'} : {backgroundColor: 'red'};

		return (
			<div className="SlotMachine">
				<span>{n1} | {n2} | {n3}</span>
				<p style={colors}>{msg}</p>
			</div>
		);
	}
}