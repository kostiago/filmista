import { MdArrowBack } from "react-icons/md";
import styles from "./video.module.scss";
import Button from "@/components/Button/Button";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import CardPrice from "@/components/CardPrice/CardPrice";
import Input from "@/components/Input/Input";
import { Form, Formik } from "formik";

const Video = () => {
  return (
    <div>
      <Formik>
        {({ values }) => (
          <Form noValidate>
            <Input
              name="Digite seu email"
              label="email"
              type="email"
              required
            />
            ;
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Video;
