const StockInfo = (props) => {
  return (
    <div>
      <h5> Stock Info</h5>
      <h6> Current Price : {props.price}</h6>
      <h6> Country : {props.country}</h6>
      <h6> Industry : {props.industry}</h6>
      <h6> Currency : {props.currency}</h6>
    </div>
  );
};

export default StockInfo;
