import React from 'react'
import PropTypes from 'prop-types'
const InputFieldTextGroup = ({
  label,
  type,
  value,
  placeholder,
  disabled,
  name,
  onChange,
  error,
  info
})=>{
  return (
    <div className="form-group">
      <label style={{paddingLeft: "15px"}}>{label}</label>
      <input
        type={type}
        className={"form-control form-control-lg"+(error?" is-invalid":"")}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {error&&(<div className="invalid-feedback">{error}</div>)}
      {info&&(<small className="text-form text-muted">{info}</small>)}
    </div>
  )

}

InputFieldTextGroup.propTypes={
  label:PropTypes.string,
  type:PropTypes.string.isRequired,
  value:PropTypes.string,
  placeholder:PropTypes.string,
  disabled:PropTypes.string,
  name:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  error:PropTypes.string
}
InputFieldTextGroup.defaultProps={
  type:'text'
}

export default InputFieldTextGroup;
