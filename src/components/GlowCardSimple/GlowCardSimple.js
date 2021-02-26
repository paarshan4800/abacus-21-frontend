import React from 'react'
import styles from './GlowCardSimple.module.css'
import FadeInSection from '../FadeInSection/FadeInSection'
import AnimatedCard from "@rihor/react-3d-card/dist/AnimatedCard"
import Heading from '../Heading/Heading'

/*
Usage:
<GlowCardSimple props={{title:"Boom", content:"This is Everything"}}
*/
function GlowCardSimple({ props }) {
    return (

        <FadeInSection>
            <AnimatedCard weight={0.05}>
                <div className={styles.bg}>
                    <div className={styles.box}>
                        <div className={`${styles.content}`}>
                            <div className={styles.glowCardContent}>
                                <div style={{ textAlign: 'center' }}>
                                    <Heading text={props.title} fontSize="30px" />
                                </div>
                                {props.content === undefined
                                    ? props.list.map((item) =>
                                        <p key={item.id} className={styles.glowCardText}>{item.text}</p>
                                    )
                                    : <p className={styles.glowCardText}>{props.content}</p>}
                            </div>

                        </div>
                    </div>
                </div>
            </AnimatedCard>
        </FadeInSection>

    )
}

export default GlowCardSimple