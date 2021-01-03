import './Intervalo.css'
import React from 'react'
import Card from './Card'
import {connect} from 'react-redux'
import {alterarNumeroMin, alterarNumeroMax} from '../store/actions/numeros'

function Intervalo (props){

    const {min, max} = props
    return (
        <Card title="Intervalo de numeros" red>
            <div className="Intervalo">
                <span>
                    <strong>Minimo: </strong>
                    <input type="number" value={min} onChange={e => props.alterarMin(+e.target.value)}
                    />
                </span>

                <span>
                    <strong>Maximo: </strong>
                    <input type="number" value={max} onChange={e => props.alterarMax(+e.target.value)}
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

function mapDispatchToProp(dispatch){
    return{
        alterarMin(novoNumero){
            //action creator retorna uma action
            const action = alterarNumeroMin(novoNumero)
            dispatch(action)
        },
        alterarMax(novoNumero){
            //action creator retorna uma action
            const action = alterarNumeroMax(novoNumero)
            dispatch(action)
        }

    }

}

export default connect(mapStateToProps, mapDispatchToProp)(Intervalo)