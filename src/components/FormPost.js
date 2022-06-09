import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormWrapper = styled.form`
  margin: 0 auto;
`;

const FormPost = () => {
  const navigate = useNavigate();

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
    <FormWrapper
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
            navigate("/");
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

      <button className="btn-form" type="submit">
        Poster
      </button>
    </FormWrapper>
  );
};
export default FormPost;
