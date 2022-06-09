import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  });

  return (
    <>
      <h1>Register</h1>
      <form
        onSubmit={handleSubmit((data) => {
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

        <button type="submit">Register</button>
      </form>
    </>
  );
};
export default Form;
