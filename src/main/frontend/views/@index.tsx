import {useForm, useFormPart} from "@vaadin/hilla-react-form";
import PersonModel from "Frontend/generated/org/vaadin/example/model/PersonModel";
import {StringModel} from "@vaadin/hilla-lit-form";
import {useState} from "react";

export default function MainView() {
  const {model, field, value} = useForm(PersonModel);
  const [showAddress, setShowAddress] = useState(false);

  return (
    <>
      {/* Question: why does it write "undefined" as the value into the <input />  */}
      <MyTextComponent label="Your Name" stringModel={model.name} />

      <button onClick={() => setShowAddress((v) => !v)}>Show Parents Inputs</button>

      {showAddress && (
        <MyTextComponent label="Streetname" stringModel={model.location.streetName} />
      )}

      <pre>{JSON.stringify(value, null, 2)}</pre>
    </>
  );
}

function MyTextComponent({stringModel, label}: {
  stringModel: StringModel;
  label: string;
}) {
  const {model, field, required, errors, invalid} = useFormPart(stringModel);

  return (
    <>
      <label htmlFor="fullName">
        {label}
        {required ? '*' : ''}
      </label>
      <input id="fullName" {...field(model)}></input>
      <br/>
      <span className="label" style={{visibility: invalid ? 'visible' : 'hidden'}}>
          <strong>
           {errors[0]?.message}
          </strong>
        </span>
    </>
  );
}
