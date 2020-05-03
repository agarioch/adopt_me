import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    if (this.state.hasError) {
      return (
        <div className="w-10/12 m-auto text-xl">
          <h1>
            There was an error with this listing.{" "}
            <Link to="/adopt_me/" className="text-teal-700 font-bold">
              {" "}
              Click here{" "}
            </Link>{" "}
            to return to the home page or wait to be redirected.
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
