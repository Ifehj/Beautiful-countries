// components/ErrorBoundary.js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error here, if desired
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Return your custom error UI here
      return (
        <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
          }}>
          <p>Oops! Something went wrong.</p>
          <button onClick={() => window.history.back()}>Go Back</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
