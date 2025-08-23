import style from './loader.module.css';

function Loader() {
  return (
        <div className={style.placeholder}>
            <div className={style.loaderRing} />
        </div>
    );
}

export default Loader;
