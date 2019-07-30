// Code mostly from React docs

import React from "react";
import { Link, Redirect } from "@reach/router";

export default class ErrorBoundary extends React.Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing.{" "}
          <Link to="/">Click here to go back to the home page</Link> or wait 5
          seconds to be redirected
        </h1>
      );
    }
    // Return what's inside component
    return this.props.children;
  }
}
