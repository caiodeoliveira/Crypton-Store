type ButtonTypes = "submit" | "recover_button" | "log_out";

export default interface ButtonProps {
  id?: string;
  type: ButtonTypes;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
  disabled?: boolean;
  margin?: string;
}
