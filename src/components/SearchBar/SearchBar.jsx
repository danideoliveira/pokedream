import { useEffect, useState } from "react";
import {
  SearchBarContainer,
  InputSearch,
  Dropdown,
  PokemonCompare,
  SelectedPokemon,
  ButtonRemovePokemon,
  InputNameId,
  BoxIconSearch,
  BoxSelectedItem,
  IconDownArrow,
  IconSearch,
  SelectedItem,
  List,
  Item,
  CompareButton,
  Versus,
  PokemonCompareImage,
} from "./SearchBar.styled";
import { images } from "../Images/Images";
import { PokemonConfig } from "../PokemonConfig/PokemonConfig";

export default function SearchBar({
  pokemonFilter,
  typeFilter,
  genFilter,
  setListSize,
  firstPokemon,
  secondPokemon,
  setFirstPokemon,
  setSecondPokemon,
  handleOpenModalCompare,
}) {
  const [menuValue, setMenuValue] = useState("Busca por tipo...");
  const [genValue, setGenValue] = useState("Busca por geração...");
  const [activeTypeDropdown, setActiveTypeDropdown] = useState("");
  const [activeGenDropdown, setActiveGenDropdown] = useState("");
  const [toggleMenu, setToggleMenu] = useState(true);
  const [toggleGenSearch, setToggleGenSearch] = useState(true);
  const [pokemonTypes, setPokemonTypes] = useState([]);

  const generations = [
    { name: "Todas", size: [140, 151] },
    { name: "Gen 1", size: [1, 9] },
    { name: "Gen 2", size: [152, 160] },
  ];

  useEffect(() => {
    const pokemonTypesArr = [];
    for (let type in PokemonConfig) {
      pokemonTypesArr.push(type);
    }
    setPokemonTypes(pokemonTypesArr);
  }, []);

  useEffect(() => {
    !toggleMenu
      ? setActiveTypeDropdown("menu-open")
      : setActiveTypeDropdown("");
  }, [toggleMenu]);

  useEffect(() => {
    !toggleGenSearch
      ? setActiveGenDropdown("menu-open")
      : setActiveGenDropdown("");
  }, [toggleGenSearch]);

  return (
    <SearchBarContainer>
      <InputSearch>
        <InputNameId
          type="text"
          placeholder="Nome ou id do pokemon"
          onChange={async (e) => {
            await pokemonFilter(e.target.value);
            setMenuValue("Busca por tipo...");
          }}
        />
        <BoxIconSearch>
          <IconSearch src={images.iconSearch} alt="search icon" />
        </BoxIconSearch>
      </InputSearch>

      <Dropdown
        onClick={() =>
          toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
        }
      >
        <BoxSelectedItem>
          <SelectedItem
            onChange={async (e) => {
              await typeFilter(e.target.textContent.toLowerCase());
            }}
          >
            {menuValue}
          </SelectedItem>
          <IconDownArrow src={images.iconDownArrow} alt="down arrow" />
        </BoxSelectedItem>

        <List className={`menu ${activeTypeDropdown}`}>
          <Item
            onClick={async (e) => {
              setMenuValue(e.target.textContent);
              await typeFilter(e.target.textContent.toLowerCase());
            }}
            value=""
          >
            Todos
          </Item>

          {pokemonTypes.map((type) => (
            <Item
              key={type}
              onClick={async (e) => {
                setMenuValue(e.target.textContent);
                await typeFilter(e.target.textContent.toLowerCase());
              }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Item>
          ))}
        </List>
      </Dropdown>

      <Dropdown
        onClick={() =>
          toggleGenSearch ? setToggleGenSearch(false) : setToggleGenSearch(true)
        }
      >
        <BoxSelectedItem>
          <SelectedItem
            onChange={async (e) => {
              await typeFilter(e.target.textContent.toLowerCase());
            }}
          >
            {genValue}
          </SelectedItem>
          <IconDownArrow src={images.iconDownArrow} alt="down arrow" />
        </BoxSelectedItem>

        <List className={`menu ${activeGenDropdown}`}>
          {generations.map((gen, index) => (
            <Item
              key={gen.name}
              onClick={async (e) => {
                setGenValue(e.target.textContent);
                await genFilter(generations[index].size);
                setListSize(generations[index].size);
                setMenuValue("Busca por tipo...");
              }}
            >
              {gen.name}
            </Item>
          ))}
        </List>
      </Dropdown>

      <PokemonCompare>
        <SelectedPokemon
          gradientColor={`${
            firstPokemon.name
              ? PokemonConfig[firstPokemon.pokemonTypes[0].type.name]
                  .gradientColor
              : "linear-gradient(180deg, #1b1b1b 0%, #080808 100%)"
          }`}
        >
          <ButtonRemovePokemon
            onClick={() => setFirstPokemon([])}
            style={{
              visibility: firstPokemon.length === 0 && "hidden",
            }}
          >
            X
          </ButtonRemovePokemon>
          {firstPokemon.length !== 0 ? (
            <PokemonCompareImage
              src={`https://play.pokemonshowdown.com/sprites/ani/${firstPokemon.name}.gif`}
              alt="first pokemon"
              style={{ transform: "rotateY(180deg)" }}
            />
          ) : (
            <></>
          )}
        </SelectedPokemon>
        <Versus>VS</Versus>
        <SelectedPokemon
          gradientColor={`${
            secondPokemon.name
              ? PokemonConfig[secondPokemon.pokemonTypes[0].type.name]
                  .gradientColor
              : "linear-gradient(180deg, #1b1b1b 0%, #080808 100%)"
          }`}
        >
          <ButtonRemovePokemon
            onClick={() => setSecondPokemon([])}
            style={{
              visibility: secondPokemon.length === 0 && "hidden",
            }}
          >
            X
          </ButtonRemovePokemon>

          {secondPokemon.length !== 0 ? (
            <PokemonCompareImage
              src={`https://play.pokemonshowdown.com/sprites/ani/${secondPokemon.name}.gif`}
              alt="first pokemon"
            />
          ) : (
            <></>
          )}
        </SelectedPokemon>
        <CompareButton
          onClick={() => {
            if (firstPokemon.length === 0 || secondPokemon.length === 0) return;
            handleOpenModalCompare({ firstPokemon, secondPokemon });
          }}
          disabled={!(secondPokemon.name && firstPokemon.name)}
        >
          Comparar
        </CompareButton>
      </PokemonCompare>
    </SearchBarContainer>
  );
}
