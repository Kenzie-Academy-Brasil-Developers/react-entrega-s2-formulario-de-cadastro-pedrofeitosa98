import { ModalContainer, ModalHeader, ModalFormContainer } from "./style";
import { FaTimes } from "react-icons/fa";
import { Form, Error } from "../../components/Form/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useState } from "react";
import { TechContext, ITechForm } from "../../contexts/TechContext";

interface IModalProps {
  modalView: boolean,
  setModalView: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function TechModal({ modalView, setModalView }:IModalProps) {
  const [loading, setLoading] = useState(false);
  const { createTech, closeModal } = useContext(TechContext);
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITechForm>({
    resolver: yupResolver(schema),
  });

  return (
    <ModalContainer>
      <div className={modalView ? "bounceInUp" : "bounceOutDown"}>
        <ModalHeader>
          <h3 className="title2">Adicionar tecnologia</h3>
          <button className="icon" onClick={() => closeModal(setModalView)}>
            <FaTimes />
          </button>
        </ModalHeader>
        <ModalFormContainer>
          <Form
            onSubmit={handleSubmit((formData) =>
              createTech(formData, setLoading, setModalView)
            )}
          >
            <label className="headline" htmlFor="title">
              Nome
            </label>
            <input
              type="text"
              id="title"
              placeholder="Nome da tecnologia"
              {...register("title")}
            />
            <Error>{errors.title?.message}</Error>
            <label className="headline" htmlFor="status">
              Selecionar status
            </label>
            <select id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>

            {Object.keys(errors).length !== 0 ? (
              <button className="big primary negative" type="submit">
                Cadastrar Tecnologia
              </button>
            ) : (
              <button
                className={loading ? "big primary negative" : "big primary"}
                type="submit"
              >
                {loading ? "Cadastrando..." : "Cadastrar Tecnologia"}
              </button>
            )}
          </Form>
        </ModalFormContainer>
      </div>
    </ModalContainer>
  );
}
