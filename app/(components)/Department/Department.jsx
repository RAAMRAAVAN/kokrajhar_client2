import React from "react";
import DepartmentBox from "./Department-box";
import styles from './Department-box.module.css';
import { selectDepertments } from "@/redux/features/depertmentSlice";
import { useSelector } from "react-redux";






const Department = () => {
  const depertment = useSelector(selectDepertments);
    return (
    <div className={styles.Box}>
        {depertment.map((el, idx) => (
          <DepartmentBox key={idx} dep={el} />
        ))}           
    </div>
    );
};

export default Department;