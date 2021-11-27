import LoginPageContent from "./view";
import { useFormData } from "./hooks";
import { ILoginPage } from "./index.d.ts";

function Login(props: ILoginPage) {
  const [formData, handleSetFormData] = useFormData();

  const handleSetInputValue = (key: string, value: string) => handleSetFormData({ ...formData, [key]: value });

  const handleSubmitLoginForm = () => {
    console.log(formData);
  };

  return (
    <LoginPageContent
      handleSetInputValue={handleSetInputValue}
      handleSubmitLoginForm={handleSubmitLoginForm}
    />
  );
}

export default Login;
