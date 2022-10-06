import React, { useState } from "react";
import { Container, Label, Span } from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  saveFile: (index: number, file: File) => void;
}

const InputFile: React.FC<IProps> = ({ id, saveFile }) => {
  const [fileName, setFileName] = useState("Nenhum arquivo");

  const onChangeFile = (e: any) => {
    setFileName(e.target.files![0].name);
    saveFile(+id, e.target.files![0]);
  };

  return (
    <Container>
      <Label htmlFor={id}>
        Enviar arquivo
        <input type="file" id={id} onChange={onChangeFile} />
        <Span>{fileName}</Span>
      </Label>
    </Container>
  );
};

export default InputFile;
