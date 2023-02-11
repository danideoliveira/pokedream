import { Loader, LoadingText } from "./PreLoader.styled";
import PokeballLoading from "../PokeballLoading/PokeballLoading";

export default function PreLoader() {
  return (
    <Loader>
      <PokeballLoading />
      <LoadingText>Loading...</LoadingText>
    </Loader>
  );
}
