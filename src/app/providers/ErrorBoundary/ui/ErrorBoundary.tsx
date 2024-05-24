import React, {ErrorInfo, Suspense} from "react";
import {ErrorPage} from "widgets/ErrorPage/ui/ErrorPage";

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

function logErrorToMyService(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return {hasError: true};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        logErrorToMyService(error, errorInfo);
    }

    render() {

        const {children} = this.props;
        const {hasError} = this.state;

        if (hasError) {
            // You can render any custom fallback UI
            return (
                <Suspense fallback={''}>
                    <ErrorPage/>
                </Suspense>

            )
        }

        return children;
    }
}

export default ErrorBoundary;