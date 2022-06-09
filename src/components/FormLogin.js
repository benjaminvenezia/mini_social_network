import { useForm } from "react-hook-form";
import axios from "axios";

const FormLogin = () => {
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
    <form
      onSubmit={handleSubmit((data) => {
        axios
          .post(
            "https://strapi-crea.jcloud-ver-jpc.ik-server.com/auth/local",
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

      <button type="submit">Register</button>
    </form>
  );
};
export default FormLogin;
