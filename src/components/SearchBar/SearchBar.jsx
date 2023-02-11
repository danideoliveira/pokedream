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
  BoxAllSearch,
  BoxCompare,
  BoxCompareButton,
  BoxSelectedPokemon,
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
  setCurrentPage,
  setLoading,
}) {
  const [menuValue, setMenuValue] = useState("Busca por tipo...");
  const [genValue, setGenValue] = useState("Busca por geração...");
  const [activeTypeDropdown, setActiveTypeDropdown] = useState("");
  const [activeGenDropdown, setActiveGenDropdown] = useState("");
  const [toggleMenu, setToggleMenu] = useState(true);
  const [toggleGenSearch, setToggleGenSearch] = useState(true);
  const [pokemonTypes, setPokemonTypes] = useState([]);

  const generations = [
    { name: "Todas", size: [1, 251] },
    { name: "Gen 1", size: [1, 151] },
    { name: "Gen 2", size: [152, 251] },
  ];

  const verify = {
    nidoranm: {
      newName: "nidoran",
      urlName: "nidoran",
      img: images.iconMale,
      altText: "icon male",
    },
    nidoranf: {
      newName: "nidoran",
      urlName: "nidoran-f",
      img: images.iconFemale,
      altText: "icon female",
    },
    hooh: {
      newName: "ho-oh",
      urlName: "hooh",
    },
    mrmime: {
      newName: "mr mime",
      urlName: "mrmime",
    },
  };

  const pokemonVerifyUrl = (name) => {
    const nameJoin = name.replace("-", "");
    if (verify[nameJoin]) {
      return verify[nameJoin].urlName;
    } else {
      return name;
    }
  };

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
      <BoxAllSearch>
        <InputSearch>
          <InputNameId
            type="text"
            placeholder="Nome ou id do pokemon"
            onChange={async (e) => {
              setLoading(false);
              await pokemonFilter(e.target.value);
              setMenuValue("Busca por tipo...");
              setCurrentPage(0);
            }}
          />
          <BoxIconSearch>
            <IconSearch src={images.iconSearch} alt="search icon" />
          </BoxIconSearch>
        </InputSearch>

        <Dropdown
          onClick={(e) => {
            if (toggleMenu) {
              setToggleGenSearch(true);
              setToggleMenu(false);
            } else {
              setToggleMenu(true);
            }
          }}
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
                setLoading(false);
                await typeFilter(e.target.textContent.toLowerCase());
                setCurrentPage(0);
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
                  setLoading(false);
                  await typeFilter(e.target.textContent.toLowerCase());
                  setCurrentPage(0);
                }}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Item>
            ))}
          </List>
        </Dropdown>

        <Dropdown
          onClick={() => {
            if (toggleGenSearch) {
              setToggleGenSearch(false);
              setToggleMenu(true);
            } else {
              setToggleGenSearch(true);
            }
          }}
          style={{ marginRight: 0 }}
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
                  setLoading(false);
                  await genFilter(generations[index].size);
                  setListSize(generations[index].size);
                  setMenuValue("Busca por tipo...");
                  setCurrentPage(0);
                }}
              >
                {gen.name}
              </Item>
            ))}
          </List>
        </Dropdown>
      </BoxAllSearch>

      <BoxCompare>
        <PokemonCompare>
          <BoxSelectedPokemon>
            <SelectedPokemon
              gradientColor={`${
                firstPokemon.name
                  ? PokemonConfig[firstPokemon.pokemonTypes[0].type.name]
                      .gradientColor
                  : "none"
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
                  src={`https://play.pokemonshowdown.com/sprites/ani/${pokemonVerifyUrl(
                    firstPokemon.name
                  )}.gif`}
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
                  : "none"
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
                  src={`https://play.pokemonshowdown.com/sprites/ani/${pokemonVerifyUrl(
                    secondPokemon.name
                  )}.gif`}
                  alt="second pokemon"
                />
              ) : (
                <></>
              )}
            </SelectedPokemon>
          </BoxSelectedPokemon>

          <BoxCompareButton>
            <CompareButton
              onClick={() => {
                if (firstPokemon.length === 0 || secondPokemon.length === 0)
                  return;
                handleOpenModalCompare({ firstPokemon, secondPokemon });
              }}
              disabled={!(secondPokemon.name && firstPokemon.name)}
            >
              Comparar
            </CompareButton>
          </BoxCompareButton>
        </PokemonCompare>
      </BoxCompare>
    </SearchBarContainer>
  );
}
