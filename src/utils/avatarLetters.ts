export const avatarLetters = (name: string = "Usuário") => {
  if (name.split(" ").length > 1) {
    return name[0] + name[name.split("").indexOf(" ") + 1];
  }
  return name[0];
};
