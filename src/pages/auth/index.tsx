import { useEffect } from "react";
import { useForm } from "react-recoil-form";
import { withRouter } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { Col, Row } from "../../components";
import { Button, InputField } from "../../components";
import { isLoading, themesSetting } from "../../recoil";

interface props {
  history: any;
}
const Login: React.FC<props> = (props) => {
  const setTheme = useSetRecoilState(themesSetting);
  const setLoading = useSetRecoilState(isLoading);
  useEffect(() => {
    setTheme({
      header: false,
      sidebar: false,
      footer: false,
      content: true
    });
    return () => {
      setTheme({
        header: true,
        sidebar: true,
        footer: true,
        content: true
      });
    };
  }, [setTheme]);

  const onSubmit = (values: any) => {

    setLoading({ content: true, button : true });
    if (values.user_id === "admin") {
      setTimeout(() => {
        props.history.push("/dashboard");
        window.location.reload();
        setLoading({ content: false, button : false });
      }, 1000);
    } else {
      alert('Username Dan Password Salah')
      setLoading({ content: false, button : false });
    }
  };

  const { handleSubmit } = useForm({
    onSubmit,
    initialValues: {
      user_id: "",
      password: ""
    }
  });

  return (
    <div className="login-box container" style={{ marginTop: "10%" }}>
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <div className="h1">
            <b>ADMIN LTE </b>APP
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <p className="login-box-msg">Sign in to start your session</p>
            <InputField
              name="user_id"
              type="text"
              iconFormGroup="fas fa-envelope"
              formGroup
              placeholder="Silahkan Masukan Userid"
            />
            <InputField
              name="password"
              type="password"
              placeholder="Silahkan Masukan Passwsord"
              iconFormGroup="fas fa-lock"
              formGroup
            />
            <Row>
              <Col size="12">
                <Button
                  loading
                  textLoading="Waiting"
                  type="submit"
                  color="primary"
                  block
                  title="Sign In"
                />
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
