import styles from './button.module.css'; 
export default function Button() {
    return (
        <div>
             <button className= {styles.button} type="submit">Enter</button>
        </div>
    );
    
}