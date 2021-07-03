
function Button(){
	return(
	<div>
	<button type="button" className="btn btn-info" onClick={
		()=>{alert('Oprimiste el boton')}}><i className="bi bi-power">
		</i> Ingresar </button>
		<h2 onClick={()=>{alert('Oprimiste texto')}}>Oprimir</h2>
		</div>
	);
}
export default Button;