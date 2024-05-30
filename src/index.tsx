import App from "./app/App";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/themeProvider";
import "shared/config/i18n/i18n";
import {ErrorBoundary} from "app/providers/ErrorBoundary";
import './app/styles/index.scss';


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
);