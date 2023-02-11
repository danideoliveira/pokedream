import {
  BasePokeball,
  BaseRed,
  BaseRedShadow,
  LineCenter,
  CenterBall,
  CenterWhiteButton,
  BaseWhite,
  BaseWhiteShadow,
} from "./PokeballLoading.styled";

export default function PokeballLoading() {
  return (
    <BasePokeball>
      <BaseRed>
        <BaseRedShadow />
      </BaseRed>
      <LineCenter>
        <CenterBall>
          <CenterWhiteButton />
        </CenterBall>
      </LineCenter>
      <BaseWhite>
        <BaseWhiteShadow />
      </BaseWhite>
    </BasePokeball>
  );
}
