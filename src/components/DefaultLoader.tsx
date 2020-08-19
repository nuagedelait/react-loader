import React from 'react';

import '../styles/style.css';

type DefaultLoaderProps = {
  progress : number
}

const DefaultLoader = (props : DefaultLoaderProps) => {

  const style = {
    width:props.progress+'%'
  }

  return(
    <div className="apploader__loader">
      <div className="apploader__loader__progress" style={style}></div>
    </div>
  )
}

export default DefaultLoader;
