import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
