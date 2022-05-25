import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { apiClient } from "../../services/api";
import { showErrorToast } from "../../utils/showErrorToast";
import { showSuccessToast } from "../../utils/showSuccessToast";
import Modal from 'react-modal';

type Error = {
  hasError: boolean;
  message: string;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export function Cadastro() {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [termo, setTermo] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isEdicao, setIsEdicao] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const excluirCadastro = async () => {
    try {
      const cpfValue = localStorage.getItem("cpf");
      await apiClient.delete(`/cadastro/${cpfValue}`);
      showSuccessToast("Cadastro excluído com sucesso!");
      closeModal();
      reset();
    } catch (error) {
      showErrorToast("Erro ao excluir cadastro");
    }
  }

  const editarCadastro = async () => {
    const response = JSON.parse(localStorage.getItem("response"));
    setIsEdicao(true);
    setValue("nomeCompleto", response.nomeCompleto);
    setValue("email", response.email);
    setValue("dataNascimento", response.dataNascimento);
    setValue("cep", response.cep);
    setValue("logradouro", response.logradouro);
    setValue("numeroLogradouro", response.numeroLogradouro);
    setValue("sexo", response.sexo);
    setValue('logradouro', response.logradouro);
    setValue('cidade', response.cidade);
    setValue('uf', response.uf);
    closeModal();
  }

  const onCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cpfValue = e.target.value;
    if (cpfValue?.length === 11) {
      localStorage.setItem("cpf", cpfValue);
      apiClient.get(`/cadastro/${cpfValue}`)
        .then(response => {
          openModal()
          localStorage.setItem("response", JSON.stringify(response.data));
        })
        .catch(error => {
          if (axios.isAxiosError(error)) {
            showErrorToast((error.response.data as any)?.message)
          } else {
            console.log(error);
          }
        })
    }
  }

  const [nomeError, setNomeError] = useState<Error>({ hasError: false, message: "" });
  const [cpfError, setCpfError] = useState<Error>({ hasError: false, message: "" });
  const [emailError, setEmailError] = useState<Error>({ hasError: false, message: "" });
  const [dataNascimentoError, setDataNascimentoError] = useState<Error>({ hasError: false, message: "" });
  const [sexoError, setSexoError] = useState<Error>({ hasError: false, message: "" });
  const [logradouroError, setLogradouroError] = useState<Error>({ hasError: false, message: "" });
  const [numeroLogradouroError, setNumeroLogradouroError] = useState<Error>({ hasError: false, message: "" });
  const [cepError, setCepError] = useState<Error>({ hasError: false, message: "" });
  const [cidadeError, setCidadeError] = useState<Error>({ hasError: false, message: "" });
  const [ufError, setUfError] = useState<Error>({ hasError: false, message: "" });

  const [hasError, setHasError] = useState(false);

  const onCepChange = async (e: any) => {
    const cep = e.target.value;
    if (cep.length === 8) {
      try {
        const response = await apiClient.get(`/endereco/${cep}`);
        if (response.status === 200) {
          const { logradouro, localidade, uf } = response.data;

          setValue('logradouro', logradouro);
          setValue('cidade', localidade);
          setValue('uf', uf);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          showErrorToast((error.response.data as any)?.message)
        } else {
          console.log(error);
        }
      }
    }
  }

  const onSubmit = async (data: any) => {
    setHasError(false)

    try {
      setNomeError({ hasError: false, message: "" });
      setEmailError({ hasError: false, message: "" });
      setDataNascimentoError({ hasError: false, message: "" });
      setSexoError({ hasError: false, message: "" });
      setLogradouroError({ hasError: false, message: "" });
      setNumeroLogradouroError({ hasError: false, message: "" });
      setCepError({ hasError: false, message: "" });
      setCidadeError({ hasError: false, message: "" });
      setUfError({ hasError: false, message: "" });
      setCpfError({ hasError: false, message: "" });

      if (isEdicao) {
        const editData = JSON.parse(localStorage.getItem("response"));
        data.id = editData.id;
        const response = await apiClient.put(`/cadastro`, data);
        showSuccessToast(response.data?.message)
      } else {
        const response = await apiClient.post('/cadastro', data);
        showSuccessToast(response.data?.message)
      }

      reset();
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        if (error.response.status === 422) {
          setHasError(true)
          const { errors } = error.response.data as any;

          const nomeError = errors?.nomeCompleto
          const emailError = errors?.email
          const dataNascimentoError = errors?.dataNascimento
          const sexoError = errors?.sexo
          const logradouroError = errors?.logradouro
          const numeroLogradouroError = errors?.numeroLogradouro
          const cepError = errors?.cep
          const cidadeError = errors?.cidade
          const ufError = errors?.uf
          const cpfError = errors?.cpf

          setNomeError({ hasError: !!nomeError, message: !!nomeError ? nomeError[0] : "" });
          setEmailError({ hasError: !!emailError, message: !!emailError ? emailError[0] : "" });
          setDataNascimentoError({ hasError: !!dataNascimentoError, message: !!dataNascimentoError ? dataNascimentoError[0] : "" });
          setSexoError({ hasError: !!sexoError, message: !!sexoError ? sexoError[0] : "" });
          setLogradouroError({ hasError: !!logradouroError, message: !!logradouroError ? logradouroError[0] : "" });
          setNumeroLogradouroError({ hasError: !!numeroLogradouroError, message: !!numeroLogradouroError ? numeroLogradouroError[0] : "" });
          setCepError({ hasError: !!cepError, message: !!cepError ? cepError[0] : "" });
          setCidadeError({ hasError: !!cidadeError, message: !!cidadeError ? cidadeError[0] : "" });
          setUfError({ hasError: !!ufError, message: !!ufError ? ufError[0] : "" });
          setCpfError({ hasError: !!cpfError, message: !!cpfError ? cpfError[0] : "" });
        } else {
          showErrorToast((error.response.data as any)?.message)
        }
      } else {
        console.log(error);
      }
    }
  }

  return (
    <section id="cadastro" className="cadastro">
      <div className="container">
        <div className="cadastro-title">Cadastro</div>
        <div className="cadastro-text">
          Realize aqui seu cadastro no site.
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="form-cadastro" id="formCadastro" style={{ height: hasError ? '32rem' : '27rem' }}>

          <div className="form-group">
            <div className="w-100">
              <label htmlFor="nome">Nome Completo: </label>
              <input {...register('nomeCompleto')} className={`input ${nomeError.hasError ? 'error' : ''}`} type="text" name="nomeCompleto" id="nomeCompleto" />
              {nomeError.hasError && <p className="error-message">{nomeError.message}</p>}
            </div>

            <div className="w-100">
              <label htmlFor="email">Email: </label>
              <input {...register('email')} className={`input ${emailError.hasError ? 'error' : ''}`} type="text" name="email" id="email" />
              {emailError.hasError && <p className="error-message">{emailError.message}</p>}
            </div>

            <div className="w-50">
              <label htmlFor="dataNascimento">Data de Nascimento: </label>
              <input {...register('dataNascimento')} className={`input ${dataNascimentoError.hasError ? 'error' : ''}`} type="text" name="dataNascimento" id="dataNascimento" />
              {dataNascimentoError.hasError && <p className="error-message">{dataNascimentoError.message}</p>}
            </div>
          </div>

          <div className="form-group">
            <div className="w-100">
              <label htmlFor="cpf">CPF: </label>
              <input {...register("cpf")} onChange={onCPFChange} className={`input ${dataNascimentoError.hasError ? 'error' : ''}`} type="text" name="cpf" id="cpf" />
              {cpfError.hasError && <p className="error-message">{cpfError.message}</p>}
            </div>
            <div className="w-50" style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              <label htmlFor="sexo">Sexo: </label>

              <input {...register("sexo")} type="radio" name="sexo" id="radioMasculino" value="M" />
              <label htmlFor="radioMasculino">Masculino</label>

              <input {...register("sexo")} type="radio" name="sexo" id="radioFeminino" value="F" />
              <label htmlFor="radioFeminino">Feminino</label>

              {sexoError.hasError && <p className="error-message">{sexoError.message}</p>}
            </div>
          </div>

          <div className="form-group">
            <div className="w-100">
              <label htmlFor="logradouro">Logradouro: </label>
              <input {...register('logradouro')} className={`input ${logradouroError.hasError ? 'error' : ''}`} type="text" name="logradouro" id="logradouro" />
              {logradouroError.hasError && <p className="error-message">{logradouroError.message}</p>}
            </div>

            <div className="w-100">
              <label htmlFor="numero">Número: </label>
              <input {...register('numeroLogradouro')} className={`input ${numeroLogradouroError.hasError ? 'error' : ''}`} type="text" name="numeroLogradouro" id="numeroLogradouro" />
              {numeroLogradouroError.hasError && <p className="error-message">{numeroLogradouroError.message}</p>}
            </div>

            <div className="w-100">
              <label htmlFor="cep">CEP: </label>
              <input {...register('cep')} onChange={onCepChange} className={`input ${cepError.hasError ? 'error' : ''}`} type="text" name="cep" id="cep" />
              {cepError.hasError && <p className="error-message">{cepError.message}</p>}
            </div>
          </div>

          <div className="form-group">
            <div className="w-100">
              <label htmlFor="cidade">Cidade: </label>
              <input {...register('cidade')} className={`input ${cidadeError.hasError ? 'error' : ''}`} type="text" name="cidade" id="cidade" />
              {cidadeError.hasError && <p className="error-message">{cidadeError.message}</p>}
            </div>

            <div className="w-100">
              <label className="label" htmlFor="uf">UF: </label>
              <input {...register('uf')} className={`input ${ufError.hasError ? 'error' : ''}`} type="text" name="uf" id="uf" />
              {ufError.hasError && <p className="error-message">{ufError.message}</p>}
            </div>
          </div>

          <div className="form-group">
            <div className="w-100" style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              <label className="label" htmlFor="termo">Aceitar os termos</label>
              <input onChange={() => setTermo(!termo)} type="checkbox" name="termo" id="termo" style={{ width: '16px', height: '16px' }} />
            </div>
          </div>

          <div className="action-buttons">
            <button className="button" type="submit" disabled={!termo}>Enviar</button>
            <button className="button" type="reset" disabled={!termo} onClick={() => {
              setNomeError({ hasError: false, message: "" });
              setEmailError({ hasError: false, message: "" });
              setDataNascimentoError({ hasError: false, message: "" });
              setSexoError({ hasError: false, message: "" });
              setLogradouroError({ hasError: false, message: "" });
              setNumeroLogradouroError({ hasError: false, message: "" });
              setCepError({ hasError: false, message: "" });
              setCidadeError({ hasError: false, message: "" });
              setUfError({ hasError: false, message: "" });
              setCpfError({ hasError: false, message: "" });
              reset();
              setHasError(false)
            }}>Limpar</button>
          </div>

        </form>
      </div>


      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal Exclusão ou Edição"
      >
        <h2>Olá, esse cadastro já existe.</h2>
        <br />
        <h3>Você deseja alterar ou excluir esse cadastro?</h3>
        <div className="action-buttons">
          <button className="button" onClick={editarCadastro}>Editar</button>
          <button className="button" style={{ backgroundColor: 'red' }} onClick={excluirCadastro}>Excluir</button>
        </div>
      </Modal>

    </section>
  )
}