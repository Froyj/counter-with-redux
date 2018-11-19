import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  count: state
});

const mapDispatchToProps = dispatch => ({
  onAdd: () => dispatch({ type: "ADD" }),
  onAddMore: () => dispatch({ type: "ADD_MORE" }),
  onRemove: () => dispatch({ type: "REMOVE" }),
  onRemoveMore: () => dispatch({ type: "REMOVE_MORE" }),
  onReset: () => dispatch({ type: "RESET" })
  });

const CounterComponent = ({ count, onAdd, onAddMore, onRemove, onRemoveMore, onReset }) => (
  <div>
    <p id="render-store"></p>
    <p>{count}</p>
    <button id="add" onClick={onAdd}>
      add 1
    </button>
    <button id="addMore" onClick={onAddMore}>
      add 10
    </button>
    <br />
    <button onClick={onRemove}>remove 1</button>
    <button onClick={onRemoveMore}>remove 10</button>
    <br />
    <button onClick={onReset}>reset</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);