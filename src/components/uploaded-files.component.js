import * as React from 'react';
import { List, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import UploadedFile from './uploaded-file.component';

const Demo = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
}));

function UploadedFiles({ files = [] }) {
	return (
		<Grid>
			<Demo>
				<List>
					{files.map((file) => {
						return (
							<UploadedFile
								key={`${file.name}-${file.lastModified}`}
								fileName={file.name}
								type={file.type}
								progress={100}
								completed={true}
							/>
						);
					})}
				</List>
			</Demo>
		</Grid>
	);
}

export default UploadedFiles;
