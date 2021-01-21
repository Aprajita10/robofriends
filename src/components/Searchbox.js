import React from 'react';

const Searchbox = ({ searchfield, searchchange }) =>{
	return(
		<div className='pa2'>
		<input
		 className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow'
		 type='search'
		 placeholder='search robot'
		 onChange={ searchchange }
		 />
		</div>
		);
}


export default Searchbox;