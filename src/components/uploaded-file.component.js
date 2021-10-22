import * as React from 'react';
import {
	ListItem,
	ListItemText,
	IconButton,
	LinearProgress,
} from '@mui/material';
import { Check as CheckIcon, Close as CloseIcon } from '@mui/icons-material';

import { makeStyles } from '@mui/styles';
import UploadedFileIcon from './uploaded-file-icon.component';

const useStyles = makeStyles({});

function UploadedFile({
	type,
	fileName = 'File name',
	progress = 50,
	completed = true,
}) {
	const classes = useStyles();
	return (
		<ListItem
			secondaryAction={
				<IconButton edge='end' aria-label='delete'>
					{completed ? (
						<CheckIcon color='success' />
					) : (
						<CloseIcon color='error' />
					)}
				</IconButton>
			}
		>
			<UploadedFileIcon type={type} />
			<ListItemText
				primary={fileName}
				secondary={
					<LinearProgress
						variant='determinate'
						value={progress}
						color={completed ? 'success' : 'error'}
					/>
				}
			/>
		</ListItem>
	);
}

export default UploadedFile;
