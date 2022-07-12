import React from 'react';

const message = 'Hi!_I\'m_Dongha_Kang.';
const Welcome = () => {
  return (
    <div className='container'>
      {message.split('').map((char, i) => char === '_' ? (
        <span key={i} style={{ fontSize: 80, fontWeight: 'bold' }}>&nbsp;</span>
      ) : (
        <span key={i} className='welcomeMessage' style={{ fontSize: 80, fontWeight: 'bold', animationDelay: `${0.05 * i}s` }}>{char}</span>
      ))}
    </div>
  )
}

export default Welcome;