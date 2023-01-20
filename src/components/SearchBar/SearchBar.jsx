import { useEffect, useState } from "react";
import {
  SearchBarContainer,
  InputSearch,
  Dropdown,
  PokemonCompareContainer,
} from "./SearchBar.styled";
import { images } from "../Images/Images";

export default function SearchBar() {
  const [menuValue, setMenuValue] = useState("Procurar por tipo...");
  const [activeDropdown, setActiveDropdown] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    !toggleMenu ? setActiveDropdown("menu-open") : setActiveDropdown("");
  }, [toggleMenu]);

  return (
    <SearchBarContainer>
      <InputSearch>
        <input type="text" placeholder="Nome ou id do pokemon" />
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
          <span className="selected">{menuValue}</span>
          <img src={images.iconDownArrow} alt="down arrow" />
        </div>

        <ul className={`menu ${activeDropdown}`}>
          <li
            onClick={(e) => setMenuValue(e.target.textContent)}
            value=""
            className="active"
          >
            Todos
          </li>
          <li onClick={(e) => setMenuValue(e.target.textContent)} value="grass">
            Grass
          </li>
          <li onClick={(e) => setMenuValue(e.target.textContent)} value="fire">
            Fire
          </li>
          <li onClick={(e) => setMenuValue(e.target.textContent)} value="water">
            Water
          </li>
          <li
            onClick={(e) => setMenuValue(e.target.textContent)}
            value="flying"
          >
            Flying
          </li>
          <li
            onClick={(e) => setMenuValue(e.target.textContent)}
            value="ground"
          >
            Ground
          </li>
          <li onClick={(e) => setMenuValue(e.target.textContent)} value="rock">
            Rock
          </li>
          <li onClick={(e) => setMenuValue(e.target.textContent)} value="bug">
            Bug
          </li>
          <li
            onClick={(e) => setMenuValue(e.target.textContent)}
            value="fighting"
          >
            Fighting
          </li>
          <li onClick={(e) => setMenuValue(e.target.textContent)} value="ice">
            Ice
          </li>
          <li onClick={(e) => setMenuValue(e.target.textContent)} value="fairy">
            Fairy
          </li>
          <li
            onClick={(e) => setMenuValue(e.target.textContent)}
            value="normal"
          >
            Normal
          </li>
          <li
            onClick={(e) => setMenuValue(e.target.textContent)}
            value="dragon"
          >
            Dragon
          </li>
          <li
            onClick={(e) => setMenuValue(e.target.textContent)}
            value="poison"
          >
            Poison
          </li>
          <li
            onClick={(e) => setMenuValue(e.target.textContent)}
            value="psychic"
          >
            Psychic
          </li>
          <li
            onClick={(e) => setMenuValue(e.target.textContent)}
            value="electric"
          >
            Electric
          </li>
          <li onClick={(e) => setMenuValue(e.target.textContent)} value="ghost">
            Ghost
          </li>
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
