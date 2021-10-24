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
					{files.map((file, index) => {
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
					{/* <UploadedFile
						type={'psd'}
						fileName={'some-file-name.psd'}
						progress={100}
						completed={true}
					/>
					<UploadedFile
						type={'ai'}
						fileName={'some-file-name.ai'}
						progress={25}
						completed={false}
					/>
					<UploadedFile
						type={'doc'}
						fileName={'some-file-name.doc'}
						progress={100}
						completed={true}
					/>
					<UploadedFile
						type={'xls'}
						fileName={'some-file-name.xls'}
						progress={100}
						completed={true}
					/>
					<UploadedFile
						type={'pdf'}
						fileName={'some-file-name.pdf'}
						progress={100}
						completed={true}
					/>
					<UploadedFile
						type={'png'}
						fileName={'some-file-name.png'}
						progress={75}
						completed={false}
					/>
					<UploadedFile
						type={'jpg'}
						fileName={'some-file-name.jpg'}
						progress={50}
						completed={false}
					/> */}
				</List>
			</Demo>
		</Grid>
	);
}

export default UploadedFiles;
