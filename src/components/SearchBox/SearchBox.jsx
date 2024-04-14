import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./SearchBox.module.css";

export default function SearchBox () {
    return (
        <Formik>
            <Form className={css.container}>
                <label className={css.label}>
                    Find contact by name
                </label>
                <Field className={css.inputForm}/>
            </Form>
        </Formik>
    )
}