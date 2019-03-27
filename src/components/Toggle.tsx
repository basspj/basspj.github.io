import React from "react";

export const Toggle: React.SFC<IToggleProps> = ({
  checked,
  icons,
  onChange,
  style
}) => {
  const getIcon = () => {
    if (!icons) {
      return undefined;
    }
    return icons[checked ? "checked" : "unchecked"];
  };
  const onClick = () => {
    onChange();
  };
  return (
    <div style={style} onClick={onClick}>
      {getIcon()}
    </div>
  );
};

interface IToggleProps {
  checked: boolean;
  icons: { checked: any; unchecked: any };
  onChange: any;
  style?: any;
}

export default Toggle;
