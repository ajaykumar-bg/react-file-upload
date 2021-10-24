import React, { useMemo } from 'react';
import {
	ListItem,
	ListItemText,
	IconButton,
	LinearProgress,
} from '@mui/material';
import { Check as CheckIcon, Close as CloseIcon } from '@mui/icons-material';

import UploadedFileIcon from './uploaded-file-icon.component';
import {
	FileTypeExtensions,
	FileTypes,
} from '../constants/file-types.constants';

function UploadedFile({
	type,
	fileName = 'File name',
	progress = 50,
	completed = true,
}) {
	const getFileType = (fType) => {
		switch (fType) {
			case FileTypeExtensions.JPG:
				return FileTypes.JPG;
			case FileTypeExtensions.PNG:
				return FileTypes.PNG;
			case FileTypeExtensions.PDF:
				return FileTypes.PDF;
			case FileTypeExtensions.PSD:
				return FileTypes.PSD;

			default:
				break;
		}
	};

	const fileType = useMemo(() => getFileType(type), [type]);

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
			<UploadedFileIcon type={fileType} />
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
