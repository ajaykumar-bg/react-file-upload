import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	dropzone: {
		margin: 20,
		cursor: 'pointer',
		minHeight: 150,
		border: '2px dashed rgba(0, 0, 0, 0.3)',
		background: 'white',
		padding: '20px 20px',
		borderRadius: 10,
	},
	dropzoneText: {
		fontFamily: 'sans-serif',
		fontWeight: 600,
		fontSize: 20,
		textAlign: 'center',
		margin: '2em 0',
		lineHeight: 1.5,
	},
});

function DropzoneDialogExample({ fileAdded }) {
	const onDrop = useCallback((acceptedFiles) => {
		fileAdded(acceptedFiles);
		// Do something with the files
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	const classes = useStyles();
	return (
		<section {...getRootProps()} className={classes.dropzone}>
			<input {...getInputProps()} />
			<div className={classes.dropzoneText}>
				{isDragActive ? (
					<div>Drop the files here ...</div>
				) : (
					<div>
						DRAG FILE HERE{' '}
						<div>
							OR <span style={{ color: 'cornflowerblue' }}>BROWSE</span>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}

export default DropzoneDialogExample;
