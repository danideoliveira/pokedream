import { Loader, LoadingText } from "./PreLoader.styled";
import PokeballLoading from "../PokeballLoading/PokeballLoading";

export default function PreLoader({marginTop}) {
  return (
    <Loader style={{marginTop: marginTop}}>
      <PokeballLoading />
      <LoadingText>Loading...</LoadingText>
    </Loader>
  );
}
