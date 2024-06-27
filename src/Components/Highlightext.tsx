function Highlightext({ text, styles }: { text: string; styles?: string }) {
 return <p className={`text-secondary font-bold ${styles}`}>{text}</p>;
}

export default Highlightext;
