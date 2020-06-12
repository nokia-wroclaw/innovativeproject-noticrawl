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
    



async componentDidMount() {
    console.log("rozpoczeto")

    this.setState({loading: true})

    const response = await fetch("./api/v1/crawling-data/me")
    console.log(response)
    const json = await response.json()
    console.log(json)

    const response2 = await fetch("./api/v1/user/me")
    console.log(response2)
    const json2 = await response2.json()
    console.log(json2)

    this.setState({
        loading: false,
        crawlList: json
    })

    /*
    this.setState({
        loading: false,
        crawlList: [{"name": "elo", "link": "http://wp.pl", "crawl_id": 1},
        {"name": "mordo", "link": "http://onet.pl", "crawl_id": 2}
        ]
    })
    */   
         
}
    
    render() {
        const crawls =  this.state.crawlList;
        const crawlsList = crawls.map(crawl => <Crawl key={crawl.crawl_id} id={crawl.crawl_id} name={crawl.name} link={crawl.url} />)

        //const loader = this.state.loading ? "loading..." : this.state.crawlList.link
        return (
            <div className="PageContent">
                <h1>My Crawls</h1>
                <div className="MyCrawls">
                    <p>{crawlsList}</p>
                </div>
            </div>
        )
    }
}

export default MyCrawlsContent
