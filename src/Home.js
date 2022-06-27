import React from 'react';
import axios from 'axios';

export default class Cars extends React.Component{


    constructor(){
        super();
        this.state={
            cars: [],
            dure:0,
            prixT:0,
            marque:'',
            nombreCv:'',
            annee:'',
            serie:'',
            image:'',
        
        
        }
        }
        
          
        
        
        
        handleChange = event => {
            this.setState({ [event.target.name] : [event.target.value] });
            console.log(this.state)
          }
          handleSubmit = event =>{
        
        console.log(this.state)
        
        
          }
            
        
          componentDidMount() {
            axios.get(`https://car-rental-v2.herokuapp.com/api/Car-list/`)
              .then(res => {
                const cars = res.data;
                this.setState({ cars });
              })
          }
        
          render() {
            const {marque} =this.state.marque
            const {nombreCv} =this.state.nombreCv
            const {annee} =this.state.annee
            const {serie} =this.state.serie
            const {image} =this.state.image

            return (
            <div className='container'> 
        
            <div className='row'> 
            
        
                {
        this.state.cars
                    .map(car =>
                    
        <div className="col-lg-4 m-auto p-3">
        
                    <div class="card h-50" >
                    <img class="card-img-top img-fluid "  src={car.image} alt="Card image cap"/>
                    <div class="card-body">
                      <h5 class="card-title nb-1" ><b> Marque :</b> {car.marque} </h5>
                      <p class="card-text mb-1"><b>Puissance fiscale: </b> {car.nombreCv} </p>
                      <p class="card-text mb-1"><b>Serie: </b> {car.Serie} </p>
                      <p class="card-text mb-1"><b>Année: </b> {car.annee} </p>
                      <p class="card-text mb-1"><b>Prix jounalier: </b>  {car.prix_journaliser} </p>
                      <button className="btn btn-outline-primary btn-block " data-toggle="modal" data-target="#addCar" onClick={this.handleChange} >Rent it</button>
                    </div>
                  </div>
        
                  <div id='addCar' className='modal'>
                <div className='modal-dialog modal-dialog-centered modal-lg'>
                    <div className='modal-content' >
                    <form noValidate  >
                <div className='modal-header bg-danger text-white'>
                <h5 className='modal-title'>Add Reservation</h5>
                <button className="close" data-dismiss='modal'><span>
                    <i className=' fas fa-times'></i>
                    </span> </button>
                </div>
                <div className='modal-body my-2'>
               
                
                <div className='form-groupe p-2'>        
                    <label className='text-secondary w-50'><b>Marque: </b></label> 
                    <p className='form-control w-50' type='text'  name='Marque' value= {car.marque} onChange={this.handleChange}> {car.marque}</p>       
                </div>
        
                <div className='form-groupe p-2'>        
                    <label className='text-secondary w-50'><b>Puissance fiscale: </b></label>
                    <p className='form-control w-50' type='text'  name='Nombre_cv' value={car.nombreCv}  onChange={this.handleChange}> {car.nombreCv} </p>
                </div>        
        
                <div className='form-groupe p-2'>        
                    <label className='text-secondary w-50'><b>Model: </b></label>
                    <p className='form-control w-50' type='text'name='serie' required value={this.state.serie} onChange={this.handleChange}>{car.Serie}</p>
                
                </div>
                
                <div className='form-row p-2'>          
                  <div className='form-group col-md-6'>
                      <label className='text-secondary'><b>Année: </b></label>            
                      <p className='form-control' type='text'name='annee' required value={this.state.annee} onChange={this.handleChange} > {car.annee} </p>
                  
                  </div>
                  <div className='form-group col-md-6'>        
                      <label className='text-secondary'><b>Prix journalier: </b></label>
                      <p type='text' className='form-control' name='PrixT' value={this.state.parixT} onChange={this.handleChange}>{car.prix_journaliser}</p>        
                  </div>        
                </div>
        
                <div className='form-row p-2'>          
                  <div className='form-groupe p-3 col-md-6'>
                      <label className='text-secondary'><b>Durée: </b></label>
                      <input type="number"  name='dure' value={this.state.dure} onChange={this.handleChange} />
                  </div>
                  <div className='form-group col-md-6'>        
                      <label className='text-secondary'><b>Prix Total: </b></label>
                      <p className='text-secondary w-50' name="prixT" value={this.state.prixT}   >{ this.state.dure * car.prix_journaliser}</p>
                  </div>        
                </div>
              
            
                </div>
                <div className='modal-footer'>
                
                <button className ='btn btn-secondary' data-dismiss='modal'>Close </button>
                <button className='btn btn-danger'  type='submit' >Submit</button>
                
                </div>
                </form>
                
                    </div>
                </div>
                </div>
                  </div>
        )
                }
   
        </div>
        
        
             </div>
        
        
        
        
            )
          }

}