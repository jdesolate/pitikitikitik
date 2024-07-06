import Input from "../../shared/components/FormElements/Input";

import "./NewPitik.css";

const NewPitik = () => {
  return (
    <form className='pitik-form'>
      <Input element='input' type='text' label='Title' />
    </form>
  );
};

export default NewPitik;
