import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormWrapper = styled.form`
  margin: 0 auto;
`;

const FormLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  return (
    <FormWrapper
      onSubmit={handleSubmit((data) => {
        axios
          .post(
            "https://strapi-crea.jcloud-ver-jpc.ik-server.com/auth/local",
            data,
            { headers: { "Content-Type": "application/json" } }
          )
          .then(function (response) {
            const { jwt } = response.data;
            const id = response.data.user.id;
            localStorage.setItem("token", jwt);
            localStorage.setItem("user_id", id);
            navigate("/");
          })
          .catch(function (error) {
            console.log(error.data);
          });
      })}
    >
      <input
        {...register("identifier", { required: "Ce champs est requis." })}
        type="email"
        placeholder="joe@joe.com"
      />
      <p>{errors.identifier?.message}</p>

      <input
        {...register("password", {
          required: "Ce champs est requis.",
          minLength: { value: 4, message: "4 caractères exigés." },
        })}
        type="password"
        placeholder="password"
      />
      <p>{errors.password?.message}</p>

      <button className="btn-form" type="submit">
        Login
      </button>
    </FormWrapper>
  );
};
export default FormLogin;
