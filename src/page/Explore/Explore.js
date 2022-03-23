import React from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

import Tweet from "../Tweet/Tweet.js"

import "./Explore.css"


const withRouter = WrappedComponent => props => {
    const params = useParams()
    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    )
}

class Explore extends React.Component {
    state = {
        loader: true,
        data: null
    }

    componentDidMount() {
        document.title = `${this.props.params.username} | timelinexplorer`
        this.setState({ loader: true })

        setTimeout(async () => {
            const response = await axios.get(`http://localhost:3003/api/search/timeline/xsqueezie`)
            this.setState({ data: response.data })
            this.setState({ loader: false })
        }, 2000)

    }

    render() {
        const loadingPost = new Array(10);
        return (
            <div id="explore" className={`${this.state.loader ? 'noScroll' : ''}`}>
                <header>
                    <Link className="logo" to="/">
                        <svg height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 607.46 457.9">
                            <path className="cls-1" d="M95.19,359.51c99.75,109.17,294.14,147.73,432,9.82a297.41,297.41,0,0,0,80.5-147.23A211.25,211.25,0,0,1,467,301.3a105.13,105.13,0,0,0,17.81-121A105.26,105.26,0,0,1,450,212.61c28.56-42.88,21-99.74-14.19-133.33a104.74,104.74,0,0,1-24.33,42.91A105.18,105.18,0,0,0,335.26.05a298.19,298.19,0,0,1-75.48,230.68C224.16,173.45,144.18,164,96.23,211.9a104.86,104.86,0,0,0-30.76,77.68A210.46,210.46,0,0,1,.27,318.72,105.19,105.19,0,0,0,74,327.15a209.57,209.57,0,0,1-54.35,31A213.9,213.9,0,0,0,95.19,359.51Z" transform="translate(-0.27 -0.05)" />
                            <path className="cls-2" d="M348,338.38a35,35,0,1,1-35-35A35,35,0,0,1,348,338.38Zm105-5.24s-49.61,98.57-139.82,98.57c-83.77,0-140.18-98.57-140.18-98.57s51.87-88.09,140.18-88.09C402.94,245.05,453,333.14,453,333.14Zm-81.67,5.24A58.33,58.33,0,1,0,313,396.71,58.39,58.39,0,0,0,371.33,338.38Z" transform="translate(-0.27 -0.05)" />
                        </svg>
                        <h2>timelinexplorer</h2>
                    </Link>
                    <div className="language"></div>
                    <div className="contact">
                        <a id="follow-button" className="btn" title="Follow @timelinexplorer on Twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&amp;ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Etimelinexplorer&amp;region=follow_link&amp;screen_name=timelinexplorer">
                            <i></i><span className="label" id="l">Follow <b>@timelinexplorer</b></span>
                        </a>
                    </div>
                </header>
                <main>
                    {this.state.loader ?
                        loadingPost.fill(10).map((item, index) => {
                            return (
                                <div className="tweet-skeleton" key={index}>
                                    <div className="img"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                </div>
                            )
                        })
                        :
                        this.state.data.tweets.map((item, index) => <Tweet data={item} key={index}/>)
                    }
                </main>
            </div>
        )
    }
}

export default withRouter(Explore)