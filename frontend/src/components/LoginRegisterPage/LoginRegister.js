import React from "react"
import LoginRegisterContent from "./LoginRegisterContent"
import Header from '../Header'
import Footer from '../Footer'
import { Link } from "react-router-dom";

class LoginRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            component: "",
        };
    }
    async componentWillMount() {
        const res = await fetch("/api/v1/check-token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        });
        if (res.ok) {
            this.setState({ component: "" })
            document.getElementById("go_to_new-crawl_login").click()
        }
        else {
            this.setState({ component: <LoginRegisterContent /> })
        }

    }
    render() {
        return (
            <div>
                <center>
                    <div className='background'>
                        <Header />
                        <main className="MainContent">
                            {this.state.component}
                        </main>
                        <Link to="/new-crawl">
                            <div id="go_to_new-crawl_login"></div>
                        </Link>
                        <Footer />
                    </div>
                </center>
            </div>
        )


    }
}



export default LoginRegister