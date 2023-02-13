import { ContainerNotFound, TextNotFound } from "./PokemonNotFound.styled"

export default function PokemonNotFound() {
  return(
    <ContainerNotFound>
      <TextNotFound>Nenhum Pokemon encontrado!</TextNotFound>
    </ContainerNotFound>
  )
}