
interface ITextPrimary{
    size?: number;
    fontWeight? : number;
    text: String;

}

export const TextSecundary = ({size = 12, text, fontWeight}: ITextPrimary)=>{

    return(
        <p
        style={{ fontSize: size, fontFamily: '"Urbanist", sans-serif', fontWeight: fontWeight }}
      >
        {text}
      </p>
    )
}