import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("Whatever Error Message You Want"),
  email: yup
    .string()
    .email("Whatever Error Message You Want")
    .required("Whatver Error Message You Want"),
  password: yup.string().required("Whatever Error Message You Want"),
  terms: yup.boolean().oneOf([true], "Whatever Error Message You Want"),
});