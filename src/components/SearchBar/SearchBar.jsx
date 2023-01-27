import { useEffect, useState } from "react";
import {
  SearchBarContainer,
  InputSearch,
  Dropdown,
  PokemonCompareContainer,
  SelectedPokemon,
  ButtonRemovePokemon,
} from "./SearchBar.styled";
import { images } from "../Images/Images";
import { PokemonConfig } from "../PokemonConfig/PokemonConfig";

export default function SearchBar({
  pokemonFilter,
  typeFilter,
  firstPokemon,
  secondPokemon,
  setFirstPokemon,
  setSecondPokemon,
  handleOpenModalCompare,
}) {
  const [menuValue, setMenuValue] = useState("Procurar por tipo...");
  const [activeDropdown, setActiveDropdown] = useState("");
  const [toggleMenu, setToggleMenu] = useState(true);
  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {
    const pokemonTypesArr = [];
    for (let type in PokemonConfig) {
      pokemonTypesArr.push(type);
    }
    setPokemonTypes(pokemonTypesArr);
  }, []);

  useEffect(() => {
    !toggleMenu ? setActiveDropdown("menu-open") : setActiveDropdown("");
  }, [toggleMenu]);

  return (
    <SearchBarContainer>
      <InputSearch>
        <input
          type="text"
          placeholder="Nome ou id do pokemon"
          onChange={async (e) => await pokemonFilter(e.target.value)}
        />
        <button>
          <img src={images.iconSearch} alt="search icon" />
        </button>
      </InputSearch>

      <Dropdown
        onClick={() =>
          toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
        }
      >
        <div className="select">
          <span
            className="selected"
            onChange={async (e) => {
              await typeFilter(e.target.textContent.toLowerCase());
            }}
          >
            {menuValue}
          </span>
          <img src={images.iconDownArrow} alt="down arrow" />
        </div>

        <ul className={`menu ${activeDropdown}`}>
          <li
            onClick={async (e) => {
              setMenuValue(e.target.textContent);
              await typeFilter(e.target.textContent.toLowerCase());
            }}
            value=""
            className="active"
          >
            Todos
          </li>

          {pokemonTypes.map((type) => (
            <li
              key={type}
              onClick={async (e) => {
                setMenuValue(e.target.textContent);
                await typeFilter(e.target.textContent.toLowerCase());
              }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </li>
          ))}
        </ul>
      </Dropdown>
      <PokemonCompareContainer>
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
            <img
              src={`https://play.pokemonshowdown.com/sprites/ani/${firstPokemon.name}.gif`}
              alt="first pokemon"
              style={{ transform: "rotateY(180deg)" }}
            />
          ) : (
            <span>1</span>
          )}
        </SelectedPokemon>
        <span className="versus">VS</span>
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
            <img
              src={`https://play.pokemonshowdown.com/sprites/ani/${secondPokemon.name}.gif`}
              alt="first pokemon"
            />
          ) : (
            <span>2</span>
          )}
        </SelectedPokemon>
        <button
          className="compare-button"
          onClick={() => {
            if (firstPokemon.length === 0 || secondPokemon.length === 0) return;
            handleOpenModalCompare({ firstPokemon, secondPokemon });
          }}
        >
          Comparar
        </button>
      </PokemonCompareContainer>
    </SearchBarContainer>
  );
}
