import { Loader, LoadingText } from "./PreLoader.styled";
import PokeballLoading from "../PokeballLoading/PokeballLoading";

export default function PreLoader({ height, marginText, marginBox }) {
  return (
    <Loader style={{ height: height || "100%", margin: marginBox || "0" }}>
      <PokeballLoading />
      <LoadingText style={marginText && { margin: marginText }}>
        Carregando...
      </LoadingText>
    </Loader>
  );
}
