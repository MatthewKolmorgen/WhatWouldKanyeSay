import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getQuote } from "../actions";

const Quote = (props) => {
  useEffect(() => {
    // get a quote after the component mounts
    props.getQuote();
  }, [props.getQuote]);

  if (props.loading) {
    return <h2>Fetching more Kanye wisdom...</h2>;
  }
  return (
    <>
      <h2>Kanye says: {props.quote} </h2>
      <button onClick={props.getQuote}>Get new quote</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    quote: state.quote,
    loading: state.loading
  };
};

export default connect(mapStateToProps, { getQuote })(Quote);
