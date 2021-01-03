import './Intervalo.css'
import React from 'react'
import Card from './Card'
import {connect} from 'react-redux'

function Intervalo (props){
    const {min, max} = props
    return (
        <Card title="Intervalo de numeros" red>
            <div className="Intervalo">
                <span>
                    <strong>Minimo: </strong>
                    <input type="number" value={min} readOnly
                    />
                </span>

                <span>
                    <strong>Maximo: </strong>
                    <input type="number" value={max} readOnly
                    />
                </span>

            </div>


        </Card>
    )
}

function mapStateToProps(state){
    return{
        max: state.numeros.max,
        min: state.numeros.min

    }
}

export default connect(mapStateToProps)(Intervalo)