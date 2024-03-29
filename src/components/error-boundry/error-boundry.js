import React, { Component } from 'react';
import ErrorIndicator from "../error-indicator";

class ErrorBoundry extends Component {

    state = {
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render(){
        const { hasError } = this.state;
        const { children } = this.props;

        return hasError ? <ErrorIndicator /> : children
    }

}

export default ErrorBoundry;