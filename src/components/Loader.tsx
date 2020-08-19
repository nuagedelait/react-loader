import React from 'react';
import DefaultLoader from './DefaultLoader.js';
import Buffer from '../classes/Buffer.js';
//import status from '../config/status.js';


type LoaderProps = typeof Loader.defaultProps & {
  display?:React.ElementType<{progress:number}>
}
type LoaderState = {
  statusCode : number,
  current : number | null
}


export default class Loader extends React.Component<LoaderProps,LoaderState>{

  static defaultProps = {
    display : DefaultLoader
  };
  buffer = new Buffer();
  state = {
    statusCode : 0,
    current : null
  }

  load = (url:string) => {
    this.buffer.add(url);
  }

  render(){
    const DisplayComponent = this.props.display;
    return(
      <div className="apploader">

        <DisplayComponent progress={100}/>

        <div className="apploader__content">
          {
            this.props.children
          }
        </div>
      </div>
    )
  }
}
