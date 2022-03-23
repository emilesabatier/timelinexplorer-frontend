import "./Tweet.css"

const Tweet = (props) => {
    return(
        <div className="tweet">
            <header>
                <div className="img">
                    <img src={props.data.thumbnail} alt="profile thumbnail"/>
                </div>
            </header>
        </div>
    )
}


export default Tweet;