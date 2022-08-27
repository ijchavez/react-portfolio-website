import React from 'react'

import '../../../styles/progress.css'

const Progress = ({done, colorOne, colorTwo}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`,
            background: `linear-gradient(to left, ${colorOne}, ${colorTwo})`,
            boxShadow: `0 2px 2px -5px ${colorOne}, 0 2px 5px ${colorOne}`,

		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				
			</div>
			
		</div>
	)
}

export default Progress