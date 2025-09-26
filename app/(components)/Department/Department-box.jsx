import React from 'react';
import styles from './Department-box.module.css';

const DepartmentBox = (el) => {
    
    return (
        <div className={styles.cardHolder}>
            <div className={styles.specialityCard}>
                <div className={styles.icon}>
                    <div className={styles.iconDefault}>
                        <img
                            src={el.dep.icon}
                            alt="Cardiac Care"
                            width={200}
                            height={200}
                        />
                        {/* <div dangerouslySetInnerHTML={{ __html: el.dep.icon }} /> */}
                    </div>
                    <div className={styles.iconHover}>
                        <img
                            src={el.dep.iconHover}
                            alt="Cardiac Care"
                            width={300}
                            height={200}
                        />
                        {/* <div dangerouslySetInnerHTML={{ __html: el.dep.icon }} /> */}
                    </div>
                </div>
                <div className={styles.textCenter}>
                    <div className={styles.sTitle}>
                        <a href="#">
                            {el.dep.title}
                        </a>
                    </div>
                    <a
                        href="#"
                        className={styles.aButton}
                    >
                        Know More <span></span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DepartmentBox;