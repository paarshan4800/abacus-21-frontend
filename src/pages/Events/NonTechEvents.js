import React, { Component } from 'react'
import styles from "./Events.module.css"
import GlowCardResponsive from '../../components/GlowCardResponsive/GlowCardResponsive'
import Footer from '../../components/Footer/Footer'

class NonTechEvents extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {

        const { width } = this.props
        return (
            <>

                <div id="sec1" className={`${styles._homepage} ${styles._responsive}`} style={{ backgroundColor: '#060c21' }}>
                    <GlowCardResponsive props={{ title: "Cam", content: "A challenge where the participants have to identify and resolve bugs",img:"events/cam.svg", href: "/events" }} />
                    <GlowCardResponsive props={{ title: "Design", content: "Innovate and develop influential solutions to a problem using technology",img:"events/design.svg", href: "/events" }} />
                </div>

                <Footer />
            </>
        )
    }
}

export default NonTechEvents
