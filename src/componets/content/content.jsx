import React from "react";
import styles from './content.module.css'
import scroll from './scroll.svg'

const Content = (props) => {

    return (
        <div className={styles.main}>
            <div className={styles.mainWrap}>
                <div className={styles.Content}>
                    <h2 className={styles.contentTitle}>
                      {props.data.heading} 
                    </h2>
                    <p className={styles.contentSubtitle}>
                    {props.data.title}
                    </p>
                    <button className={styles.btn}> {props.data.btn} </button>
                </div>
                <img src={scroll}></img>
            </div>
        </div>
    )
}
export default Content;