import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { apiClient } from "../../services/api";
import { showSuccessToast } from "../../utils/showSuccessToast";

type Error = {
  hasError: boolean;
  message: string;
}

export function IMC() {
  const { register, handleSubmit, reset } = useForm();

  const [pesoError, setPesoError] = useState<Error>({ hasError: false, message: "" });
  const [alturaError, setAlturaError] = useState<Error>({ hasError: false, message: "" });
  const [disableButtons, setDisableButtons] = useState(false);

  const onSubmit = async (data: any) => {
    setDisableButtons(true);

    try {
      setAlturaError({ hasError: false, message: "" });
      setPesoError({ hasError: false, message: "" });

      const response = await apiClient.post('/imc/calcular', data);

      reset();

      showSuccessToast(response.data?.message)
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        const { errors } = error.response.data as any;

        const alturaError = errors?.altura
        const pesoError = errors?.peso

        setAlturaError({ hasError: !!alturaError, message: !!alturaError ? alturaError[0] : "" });
        setPesoError({ hasError: !!pesoError, message: !!pesoError ? pesoError[0] : "" });
      } else {
        console.log(error);
      }
    }

    setDisableButtons(false);
  }

  return (
    <section id="imc" className="imc">
      <div className="container">
        <div className="imc-title">O que é IMC?</div>
        <div className="imc-text">
          IMC é a classNameificação do índice de massa corporal, ele pode nos ajudar a identificar obesidade ou desnutrição
          em crianças, adolescentes, adultos e idosos.
          <br />
          <br />
          É importante sabermos nosso IMC para podermos ajustar nossa rotina de exercícios e alimentação e atingirmos um
          peso saudável para nossa idade.
          <br />
          <br />
          Por isso a E-Saúde oferece uma calculadora de IMC. Preencha o formulário abaixo e veja o seu.
        </div>

        <div className="imc-form">
          <form id="formIMC" onSubmit={handleSubmit(onSubmit)}>
            <div className="imc-form-group">
              <label htmlFor="peso" className="label">Peso <small>(ex: 80,5)</small></label>
              <input {...register('peso')} type="text" name="peso" id="peso" className={`input ${pesoError.hasError ? 'error' : ''}`} placeholder="Peso" />
              {pesoError.hasError && <p className="error-message">{pesoError.message}</p>}
            </div>
            <div className="imc-form-group">
              <label htmlFor="altura" className="label ">Altura <small>(ex: 1,80)</small></label>
              <input {...register('altura')} type="text" name="altura" id="altura" className={`input ${alturaError.hasError ? 'error' : ''}`} placeholder="Altura" />
              {alturaError.hasError && <p className="error-message">{alturaError.message}</p>}
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <button type="submit" className="button" disabled={disableButtons}>Calcular</button>
              <button type="reset" className="button" disabled={disableButtons} onClick={() => {
                setDisableButtons(false);
                setAlturaError({ hasError: false, message: "" });
                setPesoError({ hasError: false, message: "" });
                reset();
              }}>Limpar</button>
            </div>

            <div id="resultado" className="resultado d-none"></div>
          </form>

          <div className="imc-table-section">
            <table className="imc-table">
              <thead>
                <tr>
                  <th>Classificação</th>
                  <th>IMC</th>
                </tr>
              </thead>
              <tbody>
                <tr id="abaixoPeso">
                  <td>Abaixo do peso</td>
                  <td>Abaixo de 18,5</td>
                </tr>
                <tr id="pesoNormal">
                  <td>Peso normal</td>
                  <td>18,5 a 24,9</td>
                </tr>
                <tr id="sobrepeso">
                  <td>Sobrepeso</td>
                  <td>25 a 29,9</td>
                </tr>
                <tr id="obesidadeI">
                  <td>Obesidade grau I</td>
                  <td>30 a 34,9</td>
                </tr>
                <tr id="obesidadeII">
                  <td>Obesidade grau II</td>
                  <td>35 a 39,9</td>
                </tr>
                <tr id="obesidadeIII">
                  <td>Obesidade grau III</td>
                  <td>Maior ou igual 40</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section >
  )
}