import React, { useState } from 'react'
import Model from './Model';
import Backdrop from './Backdrop';

function Task(props) {
	const [IsmodleOpen, ModelStatus] = useState(false);
	function Deletehandler() {
		ModelStatus(true);
	}
	function setmodelFalse(){
		ModelStatus(false)
	}
	return (
		<div>
			<div className='card'>
				<h2>{props.text}</h2>
				<div className='actions'>
					<button className='btn' onClick={Deletehandler}>Delete</button>
				</div>
			</div>
			{IsmodleOpen && <Model onCancel={setmodelFalse}/> }
			{IsmodleOpen && <Backdrop onCancel={setmodelFalse}/>}
		</div>
	);
}
export default Task;