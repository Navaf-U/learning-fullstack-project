/* eslint-disable react/prop-types */
const wrapperComponent = (WrappedComponent) =>{
    return function enhancedVer (props){
      return(
        <div>
        <WrappedComponent {...props}/>
      </div>
      )
    }
  }
  
  const Func = (props) =>{
    return <div> {props.name} is {props.age}&apos;s  old </div>
  }
  
  const Just = (props) =>{
    return <div>{props.name} is {props.age}&apos;s old </div>
  }
  export const FINAL = wrapperComponent(Func)
  export const RESULT = wrapperComponent(Just)
  