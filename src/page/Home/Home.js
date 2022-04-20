import React from 'react'
import { Link } from "react-router-dom";

import "./Home.css"


export class Home extends React.Component {
    state = {
        username: ""
    }


    componentDidMount() {
        document.title = `timelinexplorer | Explore any timeline`
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //alert(`The username you entered was: ${this.state.username}`)
        window.location = `/explore/${this.state.username}`
    }

    render() {
        return (
            <div id="home">
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
                    <svg
                        className='background'
                        width="1537"
                        height="131.19489"
                        viewBox="0 0 1537 131.19489"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M 1537,0 V 131.19489 93 96 h -25 v 14 h -29 V 94 h -24 V 81 h -25 v 30 h -22 v -6 h -30 v -7 h -24 v 4 h -30 V 89 h -17 v 15 h -30 V 73 h -28 v -4 h -22 v 43 h -29 V 99 h -26 v 15 h -22 v -12 h -21 V 72 h -29 v 35 h -31 V 90 h -21 V 72 h -27 v 12 h -27 v 33 h -27 v -5 h -21 v 6 H 925 V 92 H 901 V 76 H 874 V 73 H 846 V 87 H 818 V 75 h -24 v 36 H 773 V 77 h -27 v 22 h -24 v 12 h -29 v -7 h -27 v -8 h -25 v 19 h -22 v 4 H 587 V 106 H 568 V 96 h -31 v 17 H 512 V 96 h -28 v 3 h -21 v 2 H 438 V 66 h -27 v 4 h -25 v 26 h -27 v 0 h -28 v 21 h -24 v -4 H 286 V 70 h -29 v 36 H 228 V 66 h -25 v 32 h -23 v 24 H 156 V 75 h -22 v 34 h -29 v 11 H 81 v 1 H 54 V 106 H 26 v 6 H 4 V 93 H 1 V 0 Z"
                        />
                        <path
                            d="M 1537,0 V 131.19489 56 49 h -26 v 20 h -28 V 31 h -21 v 34 h -25 V 49 h -28 v -1 h -29 v -9 h -20 v 16 h -31 v -9 h -26 v 1 h -20 V 36 h -31 v 10 h -25 v 15 h -18 V 39 h -34 v 1 h -22 v 17 h -29 v 17 h -20 V 49 h -31 v 2 h -25 v 5 h -23 V 46 H 998 V 64 H 977 V 57 H 951 V 81 H 927 V 69 H 898 V 59 H 870 V 52 H 843 V 47 H 818 V 33 h -22 v 1 h -24 v 48 h -23 v -9 h -32 v 1 H 691 V 28 H 664 V 62 H 639 V 78 H 612 V 34 H 590 V 84 H 565 V 47 h -26 v 19 h -29 v 9 H 484 V 29 H 467 V 66 H 438 V 46 H 409 V 83 H 387 V 53 H 364 V 43 h -25 v 32 h -26 v 5 h -30 v 3 H 257 V 43 H 228 V 41 H 208 V 70 H 176 V 42 H 156 V 54 H 127 V 29 h -27 v 1 H 83 V 59 H 49 V 83 H 29 V 82 H 0 V 56 H 1 V 0 Z"
                        />
                        <path
                            d="m 1537,0 v 131.19489 -84.09585 11 h -29 v 1 h -21 v -34 h -29 v 24 h -27 v -16 h -20 v 36 h -27 v 1 h -29 v 4 h -19 v -32 h -25 v 33 h -32 v -53 h -26 v 36 h -26 v 2 h -19 v 9 h -27 v 0 h -26 v 3 h -31 v -20 h -18 v -27 h -33 v 31 h -23 v -31 h -29 v 48 h -23 v -50 h -28 v 12 h -19 v -7 h -28 v 34 h -26 v -22 h -22 v 27 h -25 v -37 h -25 v 12 h -28 v -14 h -30 v 34 h -22 v -14 h -23 v 6 h -25 v -21 h -33 v 26 h -25 v -15 h -19 v 13 h -33 v -29 h -25 v 9 h -25 v 5 h -20 v 21 h -28 v -20 h -29 v -22 h -28 v 34 h -20 v 5 h -26 v -33 h -27 v 14 h -25 v -9 h -21 v -13 h -34 v 18 h -25 v -13 h -24 v -5 h -26 v 42 h -19 v 13 h -28 v -41 h -29 v -11 h -22 v 37 H 76 v 9 H 57 v -37 H 28 v 18 H 1 v -2 0 V 0 Z"
                        />
                    </svg>
                    <div className='container'>
                        <h1>Explore any timeline.</h1>
                        <h2>Discover new topics, trends &amp; people on Twitter.</h2>
                        <div className="searchBar">
                            <span>@</span>
                            <form onSubmit={this.handleSubmit}>
                                <input
                                    type="text"
                                    autoFocus
                                    placeholder="username"
                                    value={this.state.username}
                                    onChange={(e) => this.setState({ username: e.target.value })}
                                />
                                <button type="submit">Explore</button>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
