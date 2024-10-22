import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { Navigate } from 'react-router-dom';


export default class CreateHospital extends Component {

    //1. creamos las cajas que recibiremos en el form para poder hacer el POST

    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaDireccion = React.createRef();
    cajaTelefono = React.createRef();
    cajaCamas = React.createRef();

    //2. creamos el método que vamos a hacer para realizar el POST
    insertHospital=(e)=>{
        e.preventDefault();
        let request = "webresources/hospitales/post"
        let url = Global.urlApiHospitales + request
        //RECORDAR: debemos recordar los tipos de datos del servicio
        let id = parseInt(this.cajaId.current.value)
        let nombre = this.cajaNombre.current.value
        let direccion = this.cajaDireccion.current.value
        let telefono = this.cajaTelefono.current.value
        let camas = parseInt(this.cajaCamas.current.value)

        //Pasar el objeto React con los mismos nombres de propiedades del servicio
        let hospital = {
            idhospital: id,
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            camas: camas
        }

        //peticion axios para post
        axios.post(url, hospital).then(response=>{
            this.setState({
                mensaje:"Hospital insertado: " + nombre,
                status: true
            })
        })

    }

    state = {
        mensaje:"",
        status: false
    }


  render() {
    return (
      <div>
        {
            this.state.status == true &&
            (<Navigate to="/hospitales"/>)
        }
        <h1 style={{textAlign:"center", paddingTop:"20px"}}>New Hospital</h1>
        <h3 style={{color:"blue"}}>{this.state.mensaje}</h3>
        <div style={{padding:"20px"}}>
        <form>
            <label>Id hospital</label>
            <input type='text' ref={this.cajaId} className='form-control'></input>
            <br/>
            <label>Nombre</label>
            <input type='text' ref={this.cajaNombre} className='form-control'></input>
            <br/>
            <label>Dirección</label>
            <input type='text' ref={this.cajaDireccion} className='form-control'></input>
            <br/>
            <label>Teléfono</label>
            <input type='text' ref={this.cajaTelefono} className='form-control'></input>
            <br/>
            <label>Camas</label>
            <input type='text' ref={this.cajaCamas} className='form-control'></input>
            <br/>
            <button onClick={this.insertHospital} className='btn btn-warning'>
                Añadir
            </button>
        </form>
        </div>
        

      </div>
    )
  }
}
