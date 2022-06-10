import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
            alignSelf: "center",
            fontFamily: "fantasy",
          }}
        >
          Counter
        </h1>
        <div>
          <button onClick={this.props.onCreate} className="btn btn-primary m-2">
            Create New
          </button>
          <button
            onClick={this.props.onReset}
            className="btn btn-primary btn-sm m-2"
          >
            Reset All
          </button>
        </div>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
