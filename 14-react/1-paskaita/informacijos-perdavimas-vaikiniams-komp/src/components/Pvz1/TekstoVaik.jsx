const TekstoVaik = (props) => {
    return (
        <div>
            <p>
                Gautas tekstas: 
                {/* {
                    props.tekstas ?
                        <strong>
                            ilgis: {props.tekstas.length} - 
                            reiksme: {props.tekstas}
                        </strong>
                : ''
            } */}
            {
                props.tekstas
            }
            {
                props.tekstas?.length
            }
            </p>
        </div>
    )
}

export default TekstoVaik;
