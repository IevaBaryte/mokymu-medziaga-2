const InlineStylingJsObject = () => {
    let divContainer = {display: 'block', color: 'blue', margin: '30px'};
    let textColor = {color: 'pink'}
    let colorValue = 'red';
    let isPrimary = false;

    return (
        <div style={divContainer}>
            <h3 style={textColor}>Inline Styling objects</h3>
            <p style={{color: colorValue}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p style={{color: isPrimary ? 'red' : 'green'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, nobis?</p>
        </div>
    )
}

export default InlineStylingJsObject