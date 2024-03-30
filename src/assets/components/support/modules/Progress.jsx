import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'

import '../../../styles/progress.css'

const Progress = ({ title, done, colorOne, colorTwo }) => {
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
		<article className='experience__details'>
			<BsPatchCheckFill className='experience__details-icon'/>
			<div>
				<h4>{title}</h4>
				<div className="progress">
					<div className="progress-done" style={style}></div>

				</div>

			</div>

		</article>
	)
}

export default Progress