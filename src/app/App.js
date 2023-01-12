import { SectionBase } from "widgets/SectionBase";
import { Form } from "entities/Form";
import "./styles/reset.scss";

export const App = () => {
  const options = [
    {
      content: "WhatsApp",
      value: "whatsapp",
    },
    {
      content: "Telegram",
      value: "telegram",
    },
    {
      content: "Phone",
      value: "phone",
    },
    {
      content: "Email",
      value: "email",
    },
  ];
  const connect = "";
  const label = "Connection";
  const form = {
    inputPolicy: {
      content: "Privacy policy",
      type: "checkbox",
      url: "https://www.google.com/",
    },
  };
  return (
    <div>
      <SectionBase />
      <Form options={options} connect={connect} label={label} form={form} />
    </div>
  );
};
