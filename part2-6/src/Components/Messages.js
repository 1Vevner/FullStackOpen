const Notification = ({ type, text }) =>{
    const messageStyle = {
        fontSize: 16,
        color: type ? 'red' : 'green' 
    }
    if (text === null) {
        return null
    }
    return(
        <div style = {messageStyle}>
            {text}
        </div>
    )
}

export default { Notification }
