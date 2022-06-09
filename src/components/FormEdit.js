import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { useEffect, useState } from "react";

const FormWrapper = styled.form`
  margin: 0 auto;
`;

const FormEdit = ({ firstname, lastname }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
    },
  });

  return (
    <FormWrapper
      onSubmit={handleSubmit((data) => {
        const token = localStorage.getItem("token");

        axios
          .put(
            "https://strapi-crea.jcloud-ver-jpc.ik-server.com/users/26",
            data,
            {
              headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
              },
            }
          )
          .then(function (response) {
            navigate("/profil");
          })
          .catch(function (error) {
            console.log(error.data);
          });
      })}
    >
      <input
        {...register("firstname", {
          required: "Ce champs est requis.",
          minLength: { value: 4, message: "4 caractères exigés." },
        })}
        type="text"
        placeholder={firstname}
      />
      <p>{errors.firstname?.message}</p>

      <input
        {...register("lastname", {
          required: "Ce champs est requis.",
          minLength: { value: 4, message: "4 caractères exigés." },
        })}
        type="text"
        placeholder={lastname}
      />
      <p>{errors.lastname?.message}</p>

      <button className="btn-form" type="submit">
        Edit
      </button>
    </FormWrapper>
  );
};
export default FormEdit;
