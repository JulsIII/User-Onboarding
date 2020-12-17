import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("Please Enter Name"),
  email: yup
    .string()
    .email("Please Enter A Vaild Email Address")
    .required("Please Enter An Email Address"),
  password: yup.string().required("Please Enter A Password"),
  terms: yup.boolean().oneOf([true], "Please Agree To Terms"),
});