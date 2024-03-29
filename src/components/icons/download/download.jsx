import React from 'react';
import './download.scss';

function Download(props) {
	return (
		<svg
			className="download-icon"
			id="Capa_1"
			data-name="Capa 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100 100"
		>
			<defs>
				<style>{`.download-icon__color{fill:#2d00f6;}`}</style>
			</defs>
			<title>download</title>
			<path
				className="download-icon__color"
				d="M19.26,55.41,48.61,84.64l-3.79,3.92L15.47,59.21ZM51.78,0V81.6H46.34V0ZM78.85,55.41l3.8,3.93L53.42,88.56,49.5,84.64Z"
			/>
			<rect className="download-icon__color" x="5.31" y="94.56" width="86.6" height="5.44" />
			<polygon
				className="download-icon__color"
				points="91.91 83.87 91.91 89.19 91.91 94.5 97.23 94.5 97.23 89.19 97.23 83.87 91.91 83.87"
			/>
			<polygon
				className="download-icon__color"
				points="0 83.87 0 89.19 0 94.5 5.31 94.5 5.31 89.19 5.31 83.87 0 83.87"
			/>
		</svg>
	);
}

export default Download;
