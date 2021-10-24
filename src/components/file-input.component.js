import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	dropzoneArea: {
		margin: 20,
	},
	dropzone: {
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

function DropzoneDialogExample() {
	const classes = useStyles();
	return (
		<section className={classes.dropzoneArea}>
			<div className={classes.dropzone}>
				<div className={classes.dropzoneText}>
					<div>DRAG FILE HERE</div>
					<div>
						OR <span style={{ color: 'cornflowerblue' }}>BROWSE</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default DropzoneDialogExample;
