

function Message(){

    return (
        <div>
            <h4>Message : MFE Remote</h4>
            <p>This is from remote application</p>
            <p>Generated at {new Date().toLocaleString()}</p>
        </div>
    );
}

export default Message;