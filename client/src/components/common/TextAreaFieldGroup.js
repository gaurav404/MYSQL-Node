import React from 'react'
import PropTypes from 'prop-types'
const TextAreaFieldGroup = ({
  name,placeholder,info,error,onChange,value
})=>

  <div className="form-group">
    <textarea
      className={"form-control form-control-lg"+(error?" is-invalid":"")}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      rows="3"
    />
    {error&&(<div className="invalid-feedback">{error}</div>)}
    {info&&(<small className="text-form text-muted"></small>)}
  </div>


TextAreaFieldGroup.propTypes ={
  name:PropTypes.string.isRequired,
  placeholder:PropTypes.string,
  info:PropTypes.string,
  value:PropTypes.string,
  error:PropTypes.string,
  onChange:PropTypes.func.isRequired
}
export default TextAreaFieldGroup;
