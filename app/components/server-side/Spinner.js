import SpinnerStyles from "./Spinner.module.css";

const Spinner = ({ classes }) => {
  return (
    <div className={classes}>
      <div className={SpinnerStyles.pokemon}></div>
    </div>
  );
};
export default Spinner;
