import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { connect } from 'react-redux';

import UploadedFiles from './uploaded-files.component';
import FileInput from './file-input.component';
import { addFile } from '../store/actions/file.actions';

const useStyles = makeStyles({
	title: {
		textAlign: 'center',
		fontFamily: 'sans-serif',
		fontSize: 24,
		fontWeight: 600,
	},
});

const FileUploadContainer = (props) => {
	const classes = useStyles();
	const { files } = props;

	const onFileAdded = (addedFiles) => {
		const file = addedFiles[0];
		const { path, lastModified, name, size, type } = file;
		props.addFile({ path, lastModified, name, size, type });
	};
	return (
		<Card>
			<CardHeader
				title={<Typography className={classes.title}>Upload File</Typography>}
			></CardHeader>
			<CardContent>
				<UploadedFiles files={files} />
				<FileInput fileAdded={onFileAdded} />
			</CardContent>
		</Card>
	);
};

const mapStateToProps = (state) => {
	return { files: state.files };
};

const mapDispatchToProps = (dispatch) => {
	return {
		addFile: (file) => dispatch(addFile(file)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FileUploadContainer);
