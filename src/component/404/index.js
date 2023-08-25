import Errorpic from "../../assets/404.webp"
import './style.scss';
function NoPage() {
  return (
    <div className="noPage">
      <img alt="504" src={Errorpic} />
    </div>

  );
}
export default NoPage;