import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { FormProvider } from "./context/FormContext";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
      <FormProvider>
        <App />
      </FormProvider>
    </GoogleReCaptchaProvider>
  );
}