import { useField } from "react-recoil-form";
//   import { isValidEmail, isValidPhone } from "../utils";

interface IFieldProps {
  name: string;
  type: string;
  label?: string;
  required?: boolean;
  formGroup?: boolean;
  readOnly?: boolean;
  textColor?: string;
  iconFormGroup?: string;
  tabIndex?: string;
  ref?: any;
  id?: string;
  uppercase?: string;
  placeholder?: string;
  customeCss?: string;
  input?: any;
}

export default function InputField(props: IFieldProps) {
  const {
    name,
    id,
    type,
    uppercase,
    ref,
    formGroup,
    placeholder,
    readOnly,
    customeCss,
    label,
    required,
    textColor,
    iconFormGroup,
    input
  } = props;
  const {fieldValue, error,setFieldValue } = useField({
    name,
    validate: (value) => {
      if (required && !value) {
        return "This field is required";
      }
    }
  });

  return (
    <div className="form-group">
      {label && (
        <label htmlFor="" className={textColor}>
          {label || <> &nbsp; </>}
        </label>
      )}
      <div className="input-group">
        <input
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              event.preventDefault(); //<===== This stops the form from being submitted
            } else {
            }
          }}
          {...input}
          ref={ref}
          autoComplete="off"
          type={type}
          id={id}
          onChange={(e) => setFieldValue(e.target.value)}
          style={{ textTransform: uppercase ? "uppercase" : "none" }}
          className={`form-control ${error && "is-invalid "} ${
            customeCss || ""
          } `}
          value={fieldValue || ""}
          readOnly={readOnly}
          placeholder={placeholder}
        />
        {formGroup && (
          <div className="input-group-append">
            <div className="input-group-text">
              <span className={iconFormGroup}></span>
            </div>
          </div>
        )}
        {error && <span className="error invalid-feedback">{error}.</span>}
      </div>
    </div>
  );
}
