import React from 'react';

const SingleColor = ({ index, color }) => {
	const { hex, weight } = color;

	return (
		<article
			className={index > 10 ? 'color color-light' : 'color'}
			style={{ backgroundColor: `#${hex}` }}
		>
			<p className="percent-value">{weight}%</p>
			<p className="color-value">#{hex}</p>
		</article>
	);
};

export default SingleColor;
