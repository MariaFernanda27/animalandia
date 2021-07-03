import './razas.css';

function ModalRazas(props) {
  return (
 	 <div className="modal fade" id={props.pm1} tabindex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{props.pm2}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body row">

      <div className="col-4">
      <img src={props.pm4} className="img-fluid"/>
      </div>

      <div className="col-8">
      <strong className="acercade">ACERCA DE</strong><p className="textacercade" dangerouslySetInnerHTML={{ __html: props.pm3}}></p>
      </div>
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-azul" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-morado">Save changes</button>
      </div>
    </div>
  </div>
</div>
  );
} 

export default ModalRazas;