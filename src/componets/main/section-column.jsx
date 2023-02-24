import React from "react";
import styles from './section-column.module.css'

export const SectionColumn = (props) => {

    return (
        <main className={styles.sectionColumn}>
            <div className='container'>
                <div className={styles.sectionColumnWrap}>

                {props.state}
               
                </div>
            </div>
        </main>
    )
}