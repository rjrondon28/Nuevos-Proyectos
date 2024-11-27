import './input.css'
export const Input = ( {type,placeholder,clas} ) =>{
  return (
      <input className={clas} type={type} placeholder={placeholder} />  
  );
}