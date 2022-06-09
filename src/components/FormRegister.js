import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";

const FormWrapper = styled.form`
  margin: 0 auto;
`;

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    },
  });

  return (
    <FormWrapper
      onSubmit={handleSubmit((data) => {
        console.log("the data:", data);
        axios
          .post(
            "https://strapi-crea.jcloud-ver-jpc.ik-server.com/auth/local/register",
            data,
            { headers: { "Content-Type": "application/json" } }
          )
          .then(function (response) {
            const { jwt } = response.data;
            localStorage.setItem("token", jwt);
          })
          .catch(function (error) {
            console.log(error.data);
          });

        console.log(data);
      })}
    >
      <input
        {...register("username", { required: "Ce champs est requis." })}
        type="text"
        placeholder="username"
      />
      <p>{errors.username?.message}</p>

      <input
        {...register("email", {
          required: "Ce champs est requis.",
          minLength: { value: 4, message: "4 caractères exigés." },
        })}
        type="email"
        placeholder="Joe@Doe@gmail.com"
      />
      <p>{errors.email?.message}</p>

      <input
        {...register("password", {
          required: "Ce champs est requis.",
          minLength: { value: 4, message: "4 caractères exigés." },
        })}
        type="password"
        placeholder="password"
      />
      <p>{errors.password?.message}</p>

      <input
        {...register("firstname", {
          required: "Ce champs est requis.",
          minLength: { value: 4, message: "4 caractères exigés." },
        })}
        type="text"
        placeholder="Alice"
      />
      <p>{errors.firstname?.message}</p>

      <input
        {...register("lastname", {
          required: "Ce champs est requis.",
          minLength: { value: 4, message: "4 caractères exigés." },
        })}
        type="text"
        placeholder="Johnson"
      />
      <p>{errors.lastname?.message}</p>

      <button className="btn-form" type="submit">
        Register
      </button>
    </FormWrapper>
  );
};
export default FormRegister;
