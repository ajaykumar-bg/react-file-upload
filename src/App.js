import React from 'react';
import { Card } from '@mui/material';
import { Provider } from 'react-redux';
import FileUploadContainer from './components/file-upload.container';

import './App.css';
import { store } from './store';

function App() {
	return (
		<Provider store={store}>
			<Card sx={{ margin: 20 }} md={{ margin: 30 }} lg={{ margin: 100 }}>
				<FileUploadContainer />
			</Card>
		</Provider>
	);
}

export default App;
