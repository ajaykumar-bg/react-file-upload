import * as React from 'react';
import { Avatar, ListItemAvatar } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { ReactComponent as PsdFileIcon } from '../assets/icon-file-psd.svg';
import { ReactComponent as AiFileIcon } from '../assets/icon-file-ai.svg';
import { ReactComponent as DocFileIcon } from '../assets/icon-file-doc.svg';
import { ReactComponent as XlsFileIcon } from '../assets/icon-file-xls.svg';
import { ReactComponent as PdfFileIcon } from '../assets/icon-file-pdf.svg';
import { ReactComponent as PngFileIcon } from '../assets/icon-file-png.svg';
import { ReactComponent as JpgFileIcon } from '../assets/icon-file-jpg.svg';
import { ReactComponent as UnknownFileIcon } from '../assets/icon-file-unknown.svg';

import { FileTypes } from '../constants/file-types.constants';

const useStyles = makeStyles({
	fileIconAvatar: {
		borderRadius: '0px !important',
		background: 'transparent !important',
	},
	imageIcon: {
		display: 'flex',
		height: 'inherit',
		width: 'inherit',
	},
});

function UploadedFileIcon({ type }) {
	const classes = useStyles();
	const renderIcon = (fType) => {
		switch (fType) {
			case FileTypes.PSD:
				return <PsdFileIcon className={classes.imageIcon} />;
			case FileTypes.AI:
				return <AiFileIcon className={classes.imageIcon} />;
			case FileTypes.DOC:
				return <DocFileIcon className={classes.imageIcon} />;
			case FileTypes.XLS:
				return <XlsFileIcon className={classes.imageIcon} />;
			case FileTypes.PDF:
				return <PdfFileIcon className={classes.imageIcon} />;
			case FileTypes.PNG:
				return <PngFileIcon className={classes.imageIcon} />;
			case FileTypes.JPG:
				return <JpgFileIcon className={classes.imageIcon} />;

			default:
				return <UnknownFileIcon className={classes.imageIcon} />;
		}
	};
	return (
		<ListItemAvatar>
			<Avatar className={classes.fileIconAvatar}>{renderIcon(type)}</Avatar>
		</ListItemAvatar>
	);
}

export default React.memo(UploadedFileIcon);
