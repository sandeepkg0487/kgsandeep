import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

import "./component.scss";




function LinkedInIcon() {
  return (
    <div className='IconWraper'>
     
     <FontAwesomeIcon icon={faCircle} style={{ color: 'black', fontSize: '32px'  }} />
    <FontAwesomeIcon icon={faMailBulk} style={{ color: '#0ae5ff', fontSize: '10px', position: 'absolute', top: '0', left: '0' }}/>
      {/* <FontAwesomeIcon icon={faLinkedin}  style={{ color: 'black', fontSize: '24px' }}  /> */}
    </div>
  );
}


export default LinkedInIcon;
