import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useId } from "react";
import css from "./ContactForm.module.css";

export default function ContactForm() {
    return (
        <Formik>
            <Form className={css.container}>
                <div className={css.containerItem}>
                    <label>Name</label>
                    <Field className={css.inputFormName}/>
                    <label>Number</label>
                    <Field className={css.inputFormNumber}/>
                </div>
                <button className={css.btnForm} type="submit">
                    Add contact
                </button>
            </Form>
        </Formik>
    )
}