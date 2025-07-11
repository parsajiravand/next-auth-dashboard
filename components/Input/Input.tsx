import styles from "./Input.module.scss";

interface InputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function Input({ label, value, onChange, placeholder }: InputProps) {
  return (
    <div className={styles.inputGroup}>
      <label>{label}</label>
      <input value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
}
