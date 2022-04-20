import React from 'react'
import { Link, useParams } from "react-router-dom"
import { useMediaQuery } from 'react-responsive'
import axios from 'axios'

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

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}

const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 992 })
    return isTablet ? children : null
}

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 768 })
    return isMobile ? children : null
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
            const response = await axios.get(`http://localhost:3003/api/search/timeline/${this.props.params.username}`)
            this.setState({ data: response.data })
            this.setState({ loader: false })
        }, 2000)
    }

    openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    getUser(data, username) {
        return Object.values(data).filter(
            function (data) { return data.screen_name === username }
        )
    }

    numFormatter(num) {
        if (num > 999 && num < 1000000) return Math.floor(num / 1000 * 10) / 10 + 'K'
        if (num > 1000000) return Math.floor(num / 1000000 * 10) / 10 + 'M'
        return num
    }

    render() {
        const loadingPost = new Array(10)
        const today = new Date()
        const yesterday = new Date()
        yesterday.setDate(today.getDate() - 1)
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        //try {console.log(this.state.data)} catch (error) {console.error(error)}
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

                    <Desktop>
                        <div className="language"></div>
                        <div className="contact">
                            <a id="follow-button" className="btn" title="Follow @timelinexplorer on Twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&amp;ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Etimelinexplorer&amp;region=follow_link&amp;screen_name=timelinexplorer">
                                <i></i><span className="label" id="l">Follow <b>@timelinexplorer</b></span>
                            </a>
                        </div>
                    </Desktop>
                    <Tablet>
                        <div className="language"></div>
                        <div className="contact">
                            <a id="follow-button" className="btn" title="Follow @timelinexplorer on Twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&amp;ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Etimelinexplorer&amp;region=follow_link&amp;screen_name=timelinexplorer">
                                <i></i><span className="label" id="l">Follow <b>@timelinexplorer</b></span>
                            </a>
                        </div>
                    </Tablet>
                    <Mobile>
                        <div className="contact">
                            <a id="follow-button" className="btn" title="Follow @timelinexplorer on Twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&amp;ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Etimelinexplorer&amp;region=follow_link&amp;screen_name=timelinexplorer">
                                <span className="label" id="l">Follow</span>
                            </a>
                        </div>
                    </Mobile>
                </header>
                <main>
                    <Desktop>
                        <header role="banner">
                            {this.state.loader ?
                                <div className='profile-skeleton'>
                                    <div className='banner'>
                                    </div>
                                    <div className='content'>
                                        <div className='avatar'>
                                        </div>
                                        <div className='name'>
                                            <span></span>
                                        </div>
                                        <span className='username'></span>
                                        <span className='bio'></span>
                                        <div className='information'>
                                            <div className='location'>

                                            </div>
                                            <div className='url'>

                                            </div>
                                            <div className='joinDate'>

                                            </div>
                                        </div>
                                        <div className='follows'>
                                            <div className='following'></div>
                                            <div className='followers'></div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="profile" onClick={() => this.openInNewTab(`https://twitter.com/${this.state.data.user.username}`)}>

                                    <div className='banner'>
                                        <img src={this.state.data.user.background_image} alt="banner" />
                                    </div>
                                    <div className='content'>
                                        <div className='avatar'>
                                            <img src={`${this.state.data.user.avatar.slice(0, -10)}400x400.jpg`} alt="avatar" />
                                        </div>
                                        <div className='name'>
                                            <span>{this.state.data.user.name}</span>
                                            {this.state.data.user.verified ?
                                                <span className="verified">
                                                    <svg viewBox="0 0 24 24"><g><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path></g></svg>
                                                </span>
                                                :
                                                null
                                            }
                                        </div>
                                        <span className='username'>@{this.state.data.user.username}</span>
                                        <span className='bio'>{this.state.data.user.bio}</span>
                                        <div className='information'>
                                            <div className='location'>
                                                <div className='svg'>
                                                    <svg viewBox="0 0 24 24"><g><path d="M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z"></path><path d="M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z"></path></g></svg>
                                                </div>
                                                {this.state.data.user.location}
                                            </div>
                                            <div className='url'>
                                                <div className='svg'>
                                                    <svg viewBox="0 0 24 24"><g><path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"></path><path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"></path></g></svg>
                                                </div>
                                                <a href={this.state.data.user.url} target="_blank" rel="noreferrer noopener">{this.state.data.user.url}</a>
                                            </div>
                                            <div className='joinDate'>
                                                <div className='svg'>
                                                    <svg viewBox="0 0 24 24"><g><path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path><circle cx="7.032" cy="8.75" r="1.285"></circle><circle cx="7.032" cy="13.156" r="1.285"></circle><circle cx="16.968" cy="8.75" r="1.285"></circle><circle cx="16.968" cy="13.156" r="1.285"></circle><circle cx="12" cy="8.75" r="1.285"></circle><circle cx="12" cy="13.156" r="1.285"></circle><circle cx="7.032" cy="17.486" r="1.285"></circle><circle cx="12" cy="17.486" r="1.285"></circle></g></svg>
                                                </div>
                                                <span>Joined {new Date(this.state.data.user.join_date).toLocaleString('default', { month: 'short' })}. {new Date(this.state.data.user.join_date).getFullYear()}</span>
                                            </div>
                                        </div>
                                        <div className='follows'>
                                            <div className='following'><span>{this.numFormatter(this.state.data.user.following)}</span> Following</div>
                                            <div className='followers'><span>{this.numFormatter(this.state.data.user.followers)}</span> Followers</div>
                                        </div>

                                    </div>

                                </div>
                            }
                        </header>
                    </Desktop>
                    <Tablet>
                        <header role="banner">
                            {this.state.loader ?
                                <div className='profile-skeleton'>
                                    <div className='banner'>
                                    </div>
                                    <div className='content'>
                                        <div className='avatar'>
                                        </div>
                                        <div className='name'>
                                            <span></span>
                                        </div>
                                        <span className='username'></span>
                                        <span className='bio'></span>
                                        <div className='information'>
                                            <div className='location'>

                                            </div>
                                            <div className='url'>

                                            </div>
                                            <div className='joinDate'>

                                            </div>
                                        </div>
                                        <div className='follows'>
                                            <div className='following'></div>
                                            <div className='followers'></div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="profile" onClick={() => this.openInNewTab(`https://twitter.com/${this.state.data.user.username}`)}>
                                    <div className='banner'>
                                        <img src={this.state.data.user.background_image} alt="banner" />
                                    </div>
                                    <div className='content'>
                                        <div className='avatar'>
                                            <img src={`${this.state.data.user.avatar.slice(0, -10)}400x400.jpg`} alt="avatar" />
                                        </div>
                                        <div className='name'>
                                            <span>{this.state.data.user.name}</span>
                                            {this.state.data.user.verified ?
                                                <span className="verified">
                                                    <svg viewBox="0 0 24 24"><g><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path></g></svg>
                                                </span>
                                                :
                                                null
                                            }
                                        </div>
                                        <span className='username'>@{this.state.data.user.username}</span>
                                    </div>
                                </div>
                            }
                            <div className='ads'>
                                <span></span>
                            </div>
                        </header>
                    </Tablet>
                    <main role="main">
                        <span>timeline of <span>{`${yesterday.toLocaleDateString(undefined, options)}`}</span></span>
                        <table className='timeline'>
                            <tbody>
                                {this.state.loader ?
                                    loadingPost.fill(10).map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="tweet-skeleton">
                                                    <div className="img"></div>
                                                    <div className="line"></div>
                                                    <div className="line"></div>
                                                    <div className="line"></div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    (
                                        (!this.state.data.tweets.length) ? <tr><td>No content available</td></tr>
                                            :
                                            this.state.data.tweets.slice(0, 100).map((item, index) => {
                                                let user = this.getUser(this.state.data.friends, item.username)[0]
                                                if (index % 10 === 0) return (
                                                    <React.Fragment>
                                                        <tr key={index}>
                                                            <td className="ads">
                                                                <div className='ads'>
                                                                    <span>ads</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr key={index}>
                                                            <Tweet data={item} user={user} />
                                                        </tr>
                                                    </React.Fragment>

                                                )
                                                return (
                                                    <tr key={index}>
                                                        <Tweet data={item} user={user} />
                                                    </tr>
                                                )
                                            })
                                    )
                                }
                            </tbody>
                        </table>

                    </main>
                    <Desktop>
                        <div className='ads'>
                            <span></span>
                        </div>
                    </Desktop>

                </main>
            </div>
        )
    }
}

export default withRouter(Explore)