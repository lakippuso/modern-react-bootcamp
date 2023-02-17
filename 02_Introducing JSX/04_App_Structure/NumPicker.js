function getNum(){
	return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
	render() {
		var random_num = getNum();
		let msg = '';

		if(random_num > 5){
			msg = <span>You Win!</span>;
		}
		else{
			msg = <span>You Lost!</span>;
		}


		return (
			<div className="num-picker">
				<h1>Number: {random_num}</h1>
				{msg}
			</div>
		);
	}
}