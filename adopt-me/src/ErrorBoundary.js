// Code mostly from React docs

import React from "react";
import { Link } from "@reach/router";

export default class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing.
          <Link to="/">Click here to go back to the home page</Link>
        </h1>
      );
    }
    // Return what's inside component
    return this.props.children;
  }
}
