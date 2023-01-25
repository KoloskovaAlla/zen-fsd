import { SectionBase } from 'widgets/SectionBase';
// import { SectionBase } from "widgets";
import { Modal } from 'widgets/Modal';
// import { Form } from "entities";
import './styles/reset.scss';
// import "./styles/index.scss";

export const App = () => {
  return (
    <div>
      <SectionBase />
      <Modal />
    </div>
  );
};
