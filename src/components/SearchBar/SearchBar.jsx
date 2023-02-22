import { useEffect, useState, useRef } from "react";
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
import {
  verifyPokemon,
  verifyNotifyPokemonName,
} from "../../helpers/VerifyPokemon";
import { withoutGif } from "../../helpers/WithoutGif";
import { generations } from "../../helpers/Generations";

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
  notify,
}) {
  const [menuValue, setMenuValue] = useState("Busca por tipo...");
  const [genValue, setGenValue] = useState("Busca por geração...");
  const [activeTypeDropdown, setActiveTypeDropdown] = useState("");
  const [activeGenDropdown, setActiveGenDropdown] = useState("");
  const [toggleMenu, setToggleMenu] = useState(true);
  const [toggleGenSearch, setToggleGenSearch] = useState(true);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [inputValue, setInputValue] = useState([]);

  const refTypeSearch = useRef();
  const refGenSearch = useRef();

  const pokemonVerifyUrl = (name) => {
    const nameJoin = name.replace("-", "");
    if (verifyPokemon[nameJoin]) {
      return verifyPokemon[nameJoin].urlName;
    } else {
      return name;
    }
  };

  const verifyWithoutGif = (name) => {
    const nameJoin = name.replace(/\-/g, "");

    if (withoutGif[nameJoin]) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${withoutGif[nameJoin].id}.png`;
    } else {
      return `https://play.pokemonshowdown.com/sprites/ani/${pokemonVerifyUrl(
        name
      )}.gif`;
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !refTypeSearch.current.contains(e.target) &&
        !refGenSearch.current.contains(e.target)
      ) {
        setActiveTypeDropdown("");
        setActiveGenDropdown("");
      } else {
        return;
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener();
    };
  }, []);

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
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={async (e) => {
              if (e.key === "Enter") {
                setLoading(false);
                await pokemonFilter(inputValue);
                setMenuValue("Busca por tipo...");
                setCurrentPage(0);
              }
            }}
          />
          <BoxIconSearch
            onClick={async () => {
              setLoading(false);
              await pokemonFilter(inputValue);
              setMenuValue("Busca por tipo...");
              setCurrentPage(0);
            }}
          >
            <IconSearch src={images.iconSearch} alt="search icon" />
          </BoxIconSearch>
        </InputSearch>

        <Dropdown
          ref={refTypeSearch}
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
          ref={refGenSearch}
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
                onClick={() => {
                  setFirstPokemon([]);
                  notify.compare(
                    verifyNotifyPokemonName(firstPokemon.name),
                    1,
                    "remove"
                  );
                }}
                style={{
                  visibility: firstPokemon.length === 0 && "hidden",
                }}
              >
                X
              </ButtonRemovePokemon>
              {firstPokemon.length !== 0 ? (
                <PokemonCompareImage
                  width={
                    withoutGif[firstPokemon.name.replace(/\-/g, "")] && 100
                  }
                  src={verifyWithoutGif(firstPokemon.name)}
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
                onClick={() => {
                  setSecondPokemon([]);
                  notify.compare(
                    verifyNotifyPokemonName(secondPokemon.name),
                    2,
                    "remove"
                  );
                }}
                style={{
                  visibility: secondPokemon.length === 0 && "hidden",
                }}
              >
                X
              </ButtonRemovePokemon>

              {secondPokemon.length !== 0 ? (
                <PokemonCompareImage
                  width={
                    withoutGif[secondPokemon.name.replace(/\-/g, "")] && 100
                  }
                  src={verifyWithoutGif(secondPokemon.name)}
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
