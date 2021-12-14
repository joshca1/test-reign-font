import { useState, useEffect } from "react";
import "../styles/selector.css";
import Select, { components } from "react-select";

interface Selection {
  loadValue: string;
  changeTopic: (option: any) => void;
}

const options = [
  { value: "", label: "Select your news", icon: null, isDisabled: true },
  { value: "angular", label: "Angular", icon: "angular.png" },
  { value: "react", label: "React", icon: "react.png" },
  { value: "vue", label: "Vue", icon: "vue.png" },
];

const { Option } = components;

const IconOption = (props: any) => (
  <Option {...props}>
    {props.data.icon ? (
      <img
        src={"./" + props.data.icon}
        style={{ width: 24, marginRight: 13 }}
        alt={props.data.label}
      />
    ) : (
      ""
    )}

    {props.data.label}
  </Option>
);

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    borderBottom: "none",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#fafafa",
    },
    backgroundColor: state.isSelected ? "#f6f6f6" : "#fff",
    color: "#343434",
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    width: 240,
    border: "1px solid#2e2e2e;",
    marginTop: 20,
  }),
  dropdownIndicator: (provided: any, state: any) => ({
    ...provided,
    color: "#2e2e2e",
  }),
};

const PostSelector: React.FC<Selection> = ({ loadValue, changeTopic }) => {
  const [defValue, setDefaultValue] = useState(options[0]);

  useEffect(() => {
    let i = 0;
    if (loadValue !== "none") {
      i = options.findIndex((option) => option.value === loadValue);
    }
    setDefaultValue(options[i]);
  }, [loadValue]);

  return (
    <div className="topic-container">
      <Select
        onChange={(option) => changeTopic(option)}
        styles={customStyles}
        value={defValue}
        defaultValue={options[0]}
        options={options}
        components={{ Option: IconOption, IndicatorSeparator: () => null }}
      />
      <div></div>
    </div>
  );
};

export default PostSelector;
