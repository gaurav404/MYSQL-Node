import React from 'react'
import PropTypes from 'prop-types'
const TextFieldGroup = ({
  name,error,onChange,value,icon,type
})=>{
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={icon}/>
        </span>
      </div>
      <input
        className={"form-control form-control-lg"+(error?" is-invalid":"")}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error&&(<div className="invalid-feedback">{error}</div>)}
    </div>
  )
}
TextFieldGroup.propTypes ={
  name:PropTypes.string.isRequired,
  type:PropTypes.string.isRequired,
  icon:PropTypes.string.isRequired,
  value:PropTypes.string.isRequired,
  error:PropTypes.string,
  onChange:PropTypes.func.isRequired
}
export default TextFieldGroup;
