import { SectionBase } from "widgets/SectionBase";
import { Form } from "entities/Form";

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
  return (
    <div>
      <SectionBase />
      <Form options={options} />
    </div>
  );
};
