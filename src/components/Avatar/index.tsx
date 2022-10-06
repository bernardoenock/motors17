import { NameBol, NameSpan } from "./styles";

const Avatar: React.FC<{ userName: string; color: string }> = ({
  userName,
  color,
}) => {
  const avatarLetters = (name: string) => {
    if (name.split(" ").length > 1) {
      return name[0] + name[name.split("").indexOf(" ") + 1];
    }
    return name[0];
  };

  return (
    <>
      <NameBol background={color}>
        {avatarLetters(userName).toUpperCase()}
      </NameBol>
      <NameSpan>{userName}</NameSpan>
    </>
  );
};

export default Avatar;
