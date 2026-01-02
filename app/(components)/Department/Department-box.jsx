import React, { useEffect } from "react";
import styles from "./Department-box.module.css";
import { useRouter } from "next/navigation";
import { selectDoctors } from "@/redux/features/doctorSlice";
import { useSelector } from "react-redux";

const DepartmentBox = (el) => {
  
  const router = useRouter();
  


  return (
    <div className={styles.cardHolder}>
      <div className={styles.specialityCard}>
        <div className={styles.icon}>
          <div className={styles.iconDefault}>
            <img
              src={`https://accf-api.cancercareinstituteguwahati.org/storage/${el.dep.icon}`}
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
            {el.dep.name}
          </div>
          <a onClick={() => router.push(`/depertment?id=${el.dep.id}`)} className={styles.aButton}>
            Know More <span></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DepartmentBox;
