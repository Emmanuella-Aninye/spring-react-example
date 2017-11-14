import React from "react"

import Footer from "../components/Footer";

class Another extends React.Component {

    render()
    {
        return (
            <div>
                <h1> Another View </h1>
                <pre>
                    {
                        JSON.stringify(this.props, null, 4)
                    }
                </pre>
                <Footer/>
            </div>
        )
    }
}

export default Another
