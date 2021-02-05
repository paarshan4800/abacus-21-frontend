import styles from "./Loader.module.css"
import "./Loader2.css"

import { Link } from 'react-scroll'

export default function Loader() {
    return (
        <div className={`container-fluid`}>
            <div className={`row`}>
                <div className={`col-md-12 ${styles.box1}`}>
                    <div className={`${styles.sign}`}>
                        <span className={`${styles.fast} ${styles.flicker}`}>a</span>ba<span className={`${styles.flicker}`}>cu</span>s'21
                </div>
                    <Link to="navbar" spy={true} smooth={true}><i className="fa fa-angle-double-down"></i></Link>
                </div>
            </div>
        </div>

    )
}
