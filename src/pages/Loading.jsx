import spinner from '../assets/Double Ring-1s-200px.gif'

function Loading() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={spinner} alt="Loading..." style={{ width: '50px', height: '50px' }} />
        </div>
    )
}

export default Loading;