import classes from './AnimatedHeader.module.css';

const AnimatedHeader = () => {
  return (
    <svg className={classes.animatedHeaderSVG} viewBox='0 0 960 200'>
      <symbol id='s-text'>
        <text textAnchor='middle' x='50%' y='65%'>
          Proudly Serving
        </text>
      </symbol>

      <g className='g-ants'>
        <use xlinkHref='#s-text' className={classes.text}></use>
        <use xlinkHref='#s-text' className={classes.text}></use>
        <use xlinkHref='#s-text' className={classes.text}></use>
        <use xlinkHref='#s-text' className={classes.text}></use>
        <use xlinkHref='#s-text' className={classes.text}></use>
      </g>
    </svg>
  );
};

export default AnimatedHeader;
