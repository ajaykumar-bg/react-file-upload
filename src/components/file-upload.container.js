import React, { useState } from 'react';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import UploadedFiles from './uploaded-files.component';
import FileInput from './file-input.component';

const useStyles = makeStyles({
	title: {
		textAlign: 'center',
		fontFamily: 'sans-serif',
		fontSize: 24,
		fontWeight: 600,
	},
});

function FileUploadContainer() {
	const classes = useStyles();
	const [files, setFiles] = useState([]);

	const onFileAdded = (addedFiles) => {
		debugger;
		const file = addedFiles[0];
		setFiles([...files, file]);
	};
	return (
		<Card>
			<CardHeader
				title={<Typography className={classes.title}>Upload File</Typography>}
			></CardHeader>
			<CardContent>
				{JSON.stringify(files)}
				<UploadedFiles files={files} />
				<FileInput fileAdded={onFileAdded} />
			</CardContent>
		</Card>
	);
}

export default React.memo(FileUploadContainer);
