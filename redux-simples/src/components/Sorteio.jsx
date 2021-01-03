import React from 'react'
import Card from './Card'
import {connect} from 'react-redux'

function Sorteio (props){
    const {min, max} = props
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <Card title="Sorteio dos numeros" purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{aleatorio}</strong>
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

export default connect(mapStateToProps)(Sorteio)