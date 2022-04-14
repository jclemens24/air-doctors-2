import classes from './LoadingSpinner.module.css';

const LoadingSpinner = props => {
  return (
    <div
      className={`${props.asOverlay && 'loading-spinner__overlay'}`}
      style={{ textAlign: 'center' }}>
      <div className={classes['lds-dual-ring']}></div>
    </div>
  );
};

export default LoadingSpinner;
