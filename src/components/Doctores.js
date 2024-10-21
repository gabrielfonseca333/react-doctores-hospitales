import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'

export default class Doctores extends Component {

    state={
        doctores:[]
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
                    <th>Especialidad</th>
                    <th>Salario</th>
                    <th>Id hospital</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.doctores.map((doctor, index)=>{
                        return (<tr key={index}>
                            <td>{doctor.apellido}</td>
                            <td>{doctor.especialidad}</td>
                            <td>{doctor.salario}</td>
                            <td>{doctor.idHospital}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    
      </div>
    )
  }
}
