import React from "react";
import DepartmentBox from "./Department-box";
import styles from './Department-box.module.css';

const deps = [
  {
    title: "Anaesthesiology",
    icon: '/dep-icons/anesthesiology.png',
  },
  {
    title: "Hospital Administration",
    icon: '/dep-icons/public-administration.png',
  },
  {
    title: "Radiation Oncology",
    icon: '/dep-icons/radiation.png',
  },
  {
    title: "Pathology",
    icon: '/dep-icons/blood-bag.png',
  },
  {
    title: "Dental Surgery",
    icon: 'dep-icons/tooth.png',
  },
  {
    title: "Radiology",
    icon: '/dep-icons/radiology.png',
    iconHover: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="black" stroke="black" stroke-width="2"><rect x="16" y="12" width="32" height="40" rx="2"/><circle cx="32" cy="32" r="6"/></svg>`
  },
  
  {
    title: "Surgical Oncology",
    icon: '/dep-icons/surgery.png',
  },
  {
    title: "Head and Neck Oncology",
    icon: '/dep-icons/neck.png',
  },
  {
    title: "Medical Oncology",
    icon: '/dep-icons/pill.png',
  },
  {
    title: "Nuclear Medicine",
    icon: '/dep-icons/atom.png',
  },
  {
    title: "Biochemistry",
    icon: '/dep-icons/chemical-free.png',
  },
  {
    title: "Microbiology",
    icon: '/dep-icons/microbiology.png',
  },
  {
    title: "Pain & Palliative Medicine",
    icon: '/dep-icons/palliative.png',
  },
  {
    title: "Preventive Oncology",
    icon: '/dep-icons/healthcare.png',
  },
  {
    title: "Laboratory Medicine",
    icon: '/dep-icons/formula.png',
  }
];
   


const Department = () => {
    return (
    <div className={styles.Box}>
        {deps.map((el, idx) => (
          <DepartmentBox key={idx} dep={el} />
        ))}           
    </div>
    );
};

export default Department;