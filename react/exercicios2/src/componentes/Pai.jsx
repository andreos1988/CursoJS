import React from 'react'


export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>filhos</h2>
        <ul>
            
            {
                React.cloneElement(props.children, {
                    ...props.children.props
                })
            }
        </ul>
    </div>