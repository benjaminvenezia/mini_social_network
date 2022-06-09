import { useForm } from "react-hook-form";
import axios from "axios";

const FormPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      content: "",
      user: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        const token = localStorage.getItem("token");

        axios
          .post(
            "https://strapi-crea.jcloud-ver-jpc.ik-server.com/posts",
            data,
            {
              headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
              },
            }
          )
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error.data);
          });
      })}
    >
      <input
        {...register("title", { required: "Ce champs est requis." })}
        type="text"
        placeholder="My wonderful article"
      />
      <p>{errors.identifier?.message}</p>

      <input
        {...register("content", {
          required: "Ce champs est requis.",
          minLength: { value: 4, message: "4 caractères exigés." },
        })}
        type="text"
        placeholder="Content of your article"
      />
      <p>{errors.password?.message}</p>
      <input
        {...register("user", {
          required: "Ce champs est requis.",
          minLength: { value: 4, message: "4 caractères exigés." },
        })}
        type="ext"
        placeholder="John"
      />
      <p>{errors.password?.message}</p>

      <button type="submit">Poster</button>
    </form>
  );
};
export default FormPost;
