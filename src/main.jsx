import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from "./routes"; // <-- import default
import { StoreProvider } from './hooks/useGlobalReducer';

const Main = () => {
    return (
        <React.StrictMode>
            <StoreProvider>
                <Layout />
            </StoreProvider>
        </React.StrictMode>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);