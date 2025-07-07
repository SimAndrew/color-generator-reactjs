import React from 'react';
import { toast } from 'react-toastify';

const SingleColor = ({ index, color }) => {
	const { hex, weight } = color;
	const saveToClipboard = async () => {
		if (navigator.clipboard) {
			await navigator.clipboard.writeText(`#${hex}`);
			try {
				toast.success(`Color #${hex} copied to clipboard!`);
			} catch (error) {
				toast.error('Failed to copy color to clipboard!');
			}
		} else {
			toast.error('Clipboard access is not available!');
		}
	};

	return (
		<article
			onClick={saveToClipboard}
			className={index > 10 ? 'color color-light' : 'color'}
			style={{ backgroundColor: `#${hex}` }}
		>
			<p className="percent-value">{weight}%</p>
			<p className="color-value">#{hex}</p>
		</article>
	);
};

export default SingleColor;
