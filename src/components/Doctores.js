import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'
import DetallesDoctor from './DetallesDoctor'

export default class Doctores extends Component {

    state={
        doctores:[],
        doctorSeleccionado: -1
    }

    loadDoctores=()=>{
        let request = "api/Doctores/DoctoresHospital/" + this.props.idhospital
        let url = Global.urlApiDoctores + request
        axios.get(url).then(response => {
            this.setState({
                doctores:response.data
            })
            
        })
    }

    mostrarDetalle=(id)=>{
        this.setState({
            doctorSeleccionado: id
        })
        
    }

    componentDidMount=()=>{
        this.loadDoctores()
    }

    componentDidUpdate=(prevProps)=>{
        if(prevProps.idhospital != this.props.idhospital){
            this.loadDoctores()
        }
    }


  render() {
    return (
      <div style={{border:"solid 1px blue"}}>
        <h2 style={{color:"blue"}}>Doctores del hospital: {this.props.idhospital}</h2>
        <table className='table'>
            <thead>
                <tr>
                    <th>Apellido</th>
                    <th>Detalles</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.doctores.map((doctor, index)=>{
                        return (<tr key={index}>
                            <td>{doctor.apellido}</td>
                            <td><button onClick={()=>{this.mostrarDetalle(doctor.idDoctor)}} className='btn btn-outline-dark'>Mostrar detalles</button></td>
                        </tr>)
                    })
                }
            </tbody>
        </table>

        {
            this.state.doctorSeleccionado != -1 &&
            (<DetallesDoctor idDoctor={this.state.idDoctor}/>)
        }
    
      </div>
    )
  }
}
