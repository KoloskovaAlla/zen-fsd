import { SectionBase } from 'widgets/SectionBase';
import { Input } from 'shared/ui/Input';

export const App = () => {
  return (
    <div>
      <SectionBase />
      <Input        
         placeholder='Надо заполнить'       
      />
    </div>
  );
}


