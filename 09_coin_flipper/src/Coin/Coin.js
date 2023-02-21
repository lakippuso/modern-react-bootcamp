import './Coin.css';
function Coin(props){

    var face = props.face ? "https://www.ramint.gov.au/file/401/download?token=SjitG6Pn" : "https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Tails.png";

    return (
        <img src={face} alt="" />
    );
}
export default Coin;
