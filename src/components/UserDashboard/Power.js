import './Power.css'
import React from 'react';

function Power() {


  return (
    <div className="power-card">
      <div className='power-details margin-issue-resolved'>
          <h1>LIVE FEEDS</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="2.8em" height="2.8em" viewBox="0 0 24 24"><path fill="none" stroke="#766f6f" stroke-width="2" d="M1 13h4l2.5-9l5 16.5L17 9l2 4h4"/></svg>
        </div>
        <hr></hr>
        <div className='power-details'>
          <svg className='small-timer' xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 48 48"><g fill="none" stroke="#766f6f" stroke-linejoin="round" stroke-width="4"><path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"/><path stroke-linecap="round" d="M24.008 12v12.01l8.479 8.48"/></g></svg>
          <p>10:35:<span>23</span></p>
        </div>
        
    </div>
  );
}

export default Power;
