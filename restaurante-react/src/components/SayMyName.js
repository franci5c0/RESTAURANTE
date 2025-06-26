import styles from "./SayMyName.module.css";

function SayMyName(props) {
  return (

    <div className={styles.nameContainer}>
        <p className={styles.nameContent}>Meu nome é {props.nome}</p>
    </div>

    //  <div className={styles.nameContainer}>
    //    <p className={styles.nameContent}>eaí, {props.nome} tudo certo?</p>
    // </div>
  );
}

export default SayMyName;
