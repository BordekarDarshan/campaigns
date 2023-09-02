import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(_error) {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return <>Something Went Wrong!!!</>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
