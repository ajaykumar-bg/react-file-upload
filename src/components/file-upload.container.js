import * as React from 'react';
import {
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Button,
	Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import UploadedFiles from './uploaded-files.component';

const useStyles = makeStyles({
	title: {},
});

function FileUploadContainer() {
	const classes = useStyles();
	return (
		<Card>
			<CardHeader
				title={
					<Typography
						style={{
							textAlign: 'center',
							fontFamily: 'sans-serif',
							fontSize: 24,
							fontWeight: 600,
						}}
					>
						Upload File
					</Typography>
				}
			></CardHeader>
			<CardContent>
				<UploadedFiles />
			</CardContent>
			<CardActions>
				<Button size='small'>Learn More</Button>
			</CardActions>
		</Card>
	);
}

export default FileUploadContainer;
