import { ErrorMessage, Field } from "formik";
import styles from "./input.module.scss";

interface InputProps {
  name: string;
  label: string;
  type: string;
  required: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  type,
  required,
  ...props
}) => {
  return (
    <div className={styles.inputBox}>
      <div className={styles.input}>
        {label || name} {required && "*"}
      </div>

      <Field className={styles.label} name={name} type={type} {...props} />

      <div>
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default Input;
