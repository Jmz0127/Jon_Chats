import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
	baseUrl: 'https://app-eyhyrydmfiwa.frontegg.com',
	clientId: '06fc33b8-a7bd-4d60-be96-2045b4475411'
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</FronteggProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
