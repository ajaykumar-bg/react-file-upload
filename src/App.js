import './App.css';
import Card from '@mui/material/Card';
import FileUploadContainer from './components/file-upload.container';

function App() {
	return (
		<Card sx={{ margin: 20 }} md={{ margin: 30 }} lg={{ margin: 100 }}>
			<FileUploadContainer />
		</Card>
	);
}

export default App;
