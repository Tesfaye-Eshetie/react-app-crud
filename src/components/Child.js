import React from 'react';

export default function Child(props) {
  return (
    <div style={{  backgroundColor:"blue", padding: "10px" }}>
      <h5>This is from child component.</h5>
      { props.children }
    </div>
    
  )
}
