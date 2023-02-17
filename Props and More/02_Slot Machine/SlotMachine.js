function getNum(){
	return Math.floor(Math.random() * 3) + 1;
}
const allEqual = arr => arr.every(val => val === arr[0]);

class SlotMachine extends React.Component {
	render() {
		// var random_num1 = getNum();
		// var random_num2 = getNum();
		// var random_num3 = getNum();
		var random_num1 = this.props.n1;
		var random_num2 = this.props.n2;
		var random_num3 = this.props.n3;
		var msg = ''
		if(allEqual([random_num1, random_num2, random_num3])){
			msg = <span>You Win!</span>
		}
		else{
			msg = <span>You Lost!</span>
		}

		return (
			<div className="SlotMachine">
				<span>{random_num1} | {random_num2} | {random_num3}</span>
				<p>{msg}</p>
			</div>
		);
	}
}