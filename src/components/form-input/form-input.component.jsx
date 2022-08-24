import { Group, Input, FormInputLabel } from './form-input.styles.jsx';

const FormInput = (props) => {
  const { label, inputOptions } = props;

  return (
    <Group>
      <Input {...inputOptions} />
      {label && <FormInputLabel shrink={inputOptions.value.length} >{label}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;