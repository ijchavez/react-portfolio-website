import React from 'react'
import Typed from 'typed.js'

import data from '../data/JobsForTypedData'

const TypedReact = () => {
	const el = React.useRef(null);
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: data,
      typeSpeed: 100,
      backSpeed: 80,
      loop: true,

    };
    
    typed.current = new Typed(el.current, options);
    
    return () => {
      typed.current.destroy();

    }
  }, [])

  return (
      <h3 className='text-light'>
          <span style={{ whiteSpace: 'pre' }} ref={el} />
        
      </h3>


  );
}

export default TypedReact