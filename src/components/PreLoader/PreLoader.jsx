import { Loader, LoadingText } from "./PreLoader.styled";
import PokeballLoading from "../PokeballLoading/PokeballLoading";
import { useState, useEffect } from "react";

export default function PreLoader({ height, marginText, marginBox }) {
  const [points, setPoints] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (points.length >= 3) {
        setPoints("");
      } else {
        setPoints(points + ".");
      }
    }, 500);
  }, [points]);

  return (
    <Loader style={{ height: height || "100%", margin: marginBox || "0" }}>
      <PokeballLoading />
      <LoadingText style={marginText && { margin: marginText }}>
        Carregando
        {points}
      </LoadingText>
    </Loader>
  );
}
