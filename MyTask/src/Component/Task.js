import React from 'react'
function Task(props) {
	function Deletehandler(){
	console.log('deleted');
	console.log(props.text)
	}
	return (
		<div>
			<div className='card'>
				<h2>{props.text}</h2>
				<div className='actions'>
					<button className='btn'onClick={Deletehandler}>Delete</button>
				</div>
			</div>

		</div>
	);
}
export default Task;