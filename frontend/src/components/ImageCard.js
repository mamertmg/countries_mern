import React from 'react'

function ImageCard(props) {

  return (
    <img className='w-14 h-10'  alt='flag' src={props.props}>
    </img>
  )
}

export default ImageCard