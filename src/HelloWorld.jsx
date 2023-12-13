import React from 'react';

function HelloWorldButton() {
  
  const showAlert = (message) => {
    window.alert(message);
  };

  return (
    <div>
      <button className='button' onClick={() => showAlert('გამარჯობა მსოფლიო')}>Click me</button>
    </div>
  );
}

export default HelloWorldButton;