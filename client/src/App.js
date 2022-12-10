import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function App() {
    const handleClickLogin = (values) => {
        console.log(values);
    };
    const handleClickCadastro = (values) => {
        console.log(values);
    };
    const validationLogin = yup.object().shape({
        usuario: yup.string().required("Campo obrigatório"),
        senha: yup.string().required("Campo obrigatório"),
    });
    const validationCadastro = yup.object().shape({
        usuario: yup.string().required("Campo obrigatório"),
        senha: yup.string().required("Preencha esse campo"),
        confirmSenha: yup
            .string()
            .oneOf([yup.ref("senha"), null], "Senhas não conferem")
            .required("Confirme a senha corretamente"),
    });

    return (
        <div className="container">
            <h1>Login</h1>
            {/* Parte Login */}
            <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
                <Form className="login-form">
                    <div className="login-form-group">
                        <Field name="usuario" className="form-field" placeholder="Usuario" />

                        <ErrorMessage name="usuario" component="span" className="form-error" />
                    </div>
                    <div className="login-form-group">
                        <Field name="senha" className="form-field" placeholder="Senha" />

                        <ErrorMessage component="span" name="senha" className="form-error" />
                    </div>
                    <button type="submit" className="button">
                        Entrar
                    </button>
                </Form>
            </Formik>
            {/* Parte Cadastro */}
            <h1>Cadastro</h1>
            <Formik initialValues={{}} onSubmit={handleClickCadastro} validationSchema={validationCadastro}>
                <Form className="login-form">
                    <div className="login-form-group">
                        <Field name="usuario" className="form-field" placeholder="Usuario" />

                        <ErrorMessage name="usuario" component="span" className="form-error" />
                    </div>
                    <div className="login-form-group">
                        <Field name="senha" className="form-field" placeholder="Senha" />

                        <ErrorMessage component="span" name="senha" className="form-error" />
                    </div>
                    <div className="login-form-group">
                        <Field name="confirmSenha" className="form-field" placeholder="Confirmar Senha" />

                        <ErrorMessage component="span" name="confirmSenha" className="form-error" />
                    </div>
                    <button type="submit" className="button">
                        Cadastrar
                    </button>
                </Form>
            </Formik>
        </div>
    );
}

export default App;
