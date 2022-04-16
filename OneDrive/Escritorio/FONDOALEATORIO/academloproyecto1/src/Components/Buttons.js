
const Button = ({ another, btnColor }) => {
    return(
        <div className='container-Button'>
        <button className={`btn btn${btnColor}`} onClick={another}>New Quote</button>
      </div>
    )
}
 



export default Button;