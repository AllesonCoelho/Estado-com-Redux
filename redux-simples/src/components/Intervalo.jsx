import './Intervalo.css'
import React from 'react'
import Card from './Card'
import {connect} from 'react-redux'
import {alterarNumeroMin} from '../store/actions/numeros'

function Intervalo (props){
    props.alterarMin(10000)

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

function mapActionCreatorsToProp(dispatch){
    return{
        alterarMin(novoNumero){
            //action creator retorna uma action
            const action = alterarNumeroMin(novoNumero)
            dispatch(action)
        }

    }

}

export default connect(mapStateToProps, mapActionCreatorsToProp)(Intervalo)