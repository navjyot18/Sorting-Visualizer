import React from 'react';
import {motion} from 'framer-motion';

import './styles.css';

function Home() {
	// body...
	return(
		<div className="home">
			<motion.h1 animate={{fontSize:'100px', color:'#c70046', y:40}}>SORTING VISUALIZER</motion.h1>
			
		</div>
	)
}
export default Home;
