import Footer from "../components/Footer";
import Logo from "../assets/logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthService from "../services/auth-service";
import "./Register.css";

const schema = yup
  .object({
    sellerName: yup.string().required("Seller Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .matches(/\S+@\S+\.+\S+$/g, "This is not a valid email"),

    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Password should not be less than 8 digit, contain atleast one lowercase alphabet ,atleast one uppercase alphabet ,one digit(0-9) and one special character"
      ),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Mismatched passwords")
      .required("Please confirm your password"),

    PAN: yup
      .string()
      .required("PAN is required")
      .matches(
        /[a-z]{3}[cphfatblj][a-z]\d{4}[a-z]/i,
        "This is not a valid PAN number"
      ),

    GSTIN: yup
      .string()
      .matches(
        /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/i,
        "This is not a valid GSTIN number"
      ),

    // dp: yup.string().required("Please provide a profile picture"),
  })
  .required();

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const bodyContent = JSON.stringify({
        seller_name: data.sellerName,
        email: data.email,
        password: data.password,
        PAN: data.PAN,
        GSTIN: data.GSTIN,
      });
      const response = await AuthService.register(bodyContent);
      // if (result.data) {
      //   // navigate("/profile");
      // }
      alert("Form submitted!!!");
      console.log(response.data);
      alert(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="text-center">
          <img
            className="mb-4 mt-5"
            src={Logo}
            alt="Logo"
            style={{ width: 200, height: 200 }}
          />
          <h5>KalaKriti Seller Studio</h5>
          <h1>Register Here</h1>
          <FontAwesomeIcon
            icon={faCircleDown}
            shake
            size="2xl"
            style={{ color: "#43d2e5" }}
          />
        </div>
        <div className="row">
          <div className="mx-auto col-10 col-md-8 col-lg-6">
            <form
              className="seller-register-form"
              noValidate=""
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="row g-3">
                <div className="col-12">
                  <label htmlFor="sellerName" className="form-label required">
                    Seller name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="sellerName"
                    placeholder="Seller name"
                    defaultValue=""
                    required=""
                    {...register("sellerName")}
                  />
                  {errors.sellerName && (
                    <span style={{ color: "red" }}>
                      {errors.sellerName.message}
                    </span>
                  )}
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label required">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    defaultValue=""
                    required=""
                    {...register("email")}
                  />
                  {errors.email && (
                    <span style={{ color: "red" }}>{errors.email.message}</span>
                  )}
                </div>

                <div className="col-12">
                  <label htmlFor="password" className="form-label required">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    defaultValue=""
                    required=""
                    {...register("password")}
                  />
                  {errors.password && (
                    <span style={{ color: "red" }}>
                      {errors.password.message}
                    </span>
                  )}
                </div>

                <div className="col-12">
                  <label
                    htmlFor="confirmPassword"
                    className="form-label required"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    defaultValue=""
                    required=""
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <span style={{ color: "red" }}>
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>

                <div className="col-12">
                  <label htmlFor="sellerName" className="form-label required">
                    PAN
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pan"
                    placeholder="Enter PAN Number"
                    defaultValue=""
                    required=""
                    {...register("PAN")}
                  />
                  {errors.PAN && (
                    <span style={{ color: "red" }}>{errors.PAN.message}</span>
                  )}
                </div>

                <div className="col-12">
                  <label htmlFor="sellerName" className="form-label">
                    GSTIN
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="GSTIN"
                    placeholder="Enter GSTIN Number"
                    defaultValue=""
                    {...register("GSTIN")}
                  />
                  {errors.GSTIN && (
                    <sGSTIN style={{ color: "red" }}>
                      {errors.GSTIN.message}
                    </sGSTIN>
                  )}
                </div>

                <div className="col-12">
                  <label htmlFor="dp" className="form-label">
                    UPLOAD YOUR PROFILE PICTURE (optional)
                  </label>
                  <input
                    type="file"
                    accept="image/* , /pdf"
                    className="btn btn-outline-primary"
                    id="dp"
                    name="choose-file"
                  />
                  <br />
                  {errors.dp && (
                    <span style={{ color: "red" }}>{errors.dp.message}</span>
                  )}
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="w-100 btn btn-lg btn-success"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
