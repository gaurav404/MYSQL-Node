

module.exports =isEmpty = (values)=>{
  return values===undefined||values===null||(typeof values==='object'&&Object.keys(values).length===0)||(typeof values==='string'&&values.trim().length===0);
}
