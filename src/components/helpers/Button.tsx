import { useRecoilValue } from "recoil";
import { isLoading } from "../../recoil";

interface props {
  loading?: boolean;
  type: any;
  color: string;
  block?: boolean;
  textLoading?: string;
  onClick?: any;
  title: string;
  icon?: string;
}
const Button: React.FC<props> = (props) => {
  const { title, icon, onClick, textLoading, type, color, block } = props;
  const loading = useRecoilValue(isLoading);

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${color} ${block === undefined ? "" : "btn-block"}`}
    >
      {loading.button ? (
        loading ? (
          <>
            <i className="fas fa-spinner fa-spin"></i> &nbsp; {textLoading}
          </>
        ) : (
          title || <i className={`fas ${icon}`}></i>
        )
      ) : (
        title || <i className={`fas ${icon}`}></i>
      )}
    </button>
  );
};

export default Button;
