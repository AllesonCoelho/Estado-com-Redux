import React from 'react'
import Card from './Card'
import {connect} from 'react-redux'

function Soma (props){
    const {min, max} = props
    return (
        <Card title="Soma dos numeros" blue>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{max + min}</strong>
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

export default connect(mapStateToProps)(Soma)