import React, {Component} from "react"
import Crawl from "./Crawl"

class MyCrawlsContent extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            crawlList: []
        }
    }
    
    componentDidMount() {
        this.setState({loading: true})
        fetch("./api/v1/crawling-data/get-crawl-list")
            .then(response => response.json())
            .then(response => {
                const {takeCrawls} = response.data
                this.setState({
                    loading: false,
                    crawlList: takeCrawls
                })
            })
    }
    
    render() {
        const crawls =  this.state.crawlList;
        const crawlsList = crawls.map(crawl => <Crawl key={crawl.id} link={crawl.link_id} />)
        //const loader = this.state.loading ? "loading..." : this.state.crawlList.link
        return (
            <div className="PageContent">
                <h1>My Crawls</h1>
                <p>{crawlsList}</p>
            </div>
        )
    }
}

export default MyCrawlsContent
