import { useEffect, useState } from "react";
import {
  SearchBarContainer,
  InputSearch,
  Dropdown,
  PokemonCompareContainer,
} from "./SearchBar.styled";
import { images } from "../Images/Images";
import { PokemonConfig } from "../PokemonConfig/PokemonConfig";

export default function SearchBar({ pokemonFilter, typeFilter }) {
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
        <div className="first-pokemon">
          <img
            src="https://play.pokemonshowdown.com/sprites/ani/charizard.gif"
            alt="first pokemon"
          />
        </div>
        <span className="versus">VS</span>
        <div className="second-pokemon">
          <img
            src="https://play.pokemonshowdown.com/sprites/ani/dragonite.gif"
            alt="second pokemon"
          />
        </div>
        <button className="compare-button">Comparar</button>
      </PokemonCompareContainer>
    </SearchBarContainer>
  );
}
