import React from 'react'

function Niveles({ info, nivel}) {
    
    if(nivel === info.nivel){
        return(
            <li>
                {info.name}
            </li>
        )
    } else{
        return("")
    }
}

export default Niveles
