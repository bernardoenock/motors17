import {
  ButtonPrimary,
  ButtonDefault,
  ButtonAlert,
  ButtonDisable,
  ButtonLight,
  ButtonSuccess,
  ButtonLink,
  ButtonNegative,
  ButtonOutline1,
  ButtonOutline2,
  ButtonOutlineLight,
  ButtonPrimaryDisable,
  ButtonPrimaryOpacity,
  ButtonPrimaryOutline,
} from "..";

const ShowButtons: React.FC = () => {
  return (
    <>
      <ButtonPrimary>ButtonPrimary</ButtonPrimary>
      <ButtonDefault>ButtonDefault</ButtonDefault>
      <ButtonAlert>ButtonAlert</ButtonAlert>
      <ButtonDisable>ButtonDisable</ButtonDisable>
      <ButtonLight>ButtonLight</ButtonLight>
      <ButtonSuccess>ButtonSuccess</ButtonSuccess>
      <ButtonLink>ButtonLink</ButtonLink>
      <ButtonNegative>ButtonNegative</ButtonNegative>
      <ButtonOutline1>ButtonOutline1</ButtonOutline1>
      <ButtonOutline2>ButtonOutline2</ButtonOutline2>
      <ButtonOutlineLight>ButtonOutlineLight</ButtonOutlineLight>
      <ButtonPrimaryDisable>ButtonPrimaryDisable</ButtonPrimaryDisable>
      <ButtonPrimaryOpacity>ButtonPrimaryOpacity</ButtonPrimaryOpacity>
      <ButtonPrimaryOutline>ButtonPrimaryOutline</ButtonPrimaryOutline>
    </>
  );
};

export default ShowButtons;
