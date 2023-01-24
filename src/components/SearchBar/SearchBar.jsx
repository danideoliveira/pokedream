import { useEffect, useState } from "react";
import {
  SearchBarContainer,
  InputSearch,
  Dropdown,
  PokemonCompareContainer,
} from "./SearchBar.styled";
import { images } from "../Images/Images";

export default function SearchBar({ pokemonFilter, typeFilter }) {
  const [menuValue, setMenuValue] = useState("Procurar por tipo...");
  const [activeDropdown, setActiveDropdown] = useState("");
  const [toggleMenu, setToggleMenu] = useState(true);

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
            classNameasync ="selected"
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
          <li
            onClick={async (e) => {
              setMenuValue(e.target.textContent);
              await typeFilter(e.target.textContent.toLowerCase());
            }}
            value="grass"
          >
            Grass
          </li>
          <li
            onClick={async (e) => {
              setMenuValue(e.target.textContent);
              await typeFilter(e.target.textContent.toLowerCase());
            }}
            value="fire"
          >
            Fire
          </li>
          <li
            onClick={async (e) => {
              setMenuValue(e.target.textContent);
              await typeFilter(e.target.textContent.toLowerCase());
            }}
            value="water"
          >
            Water
          </li>
          <li
            onClick={async (e) => {
              setMenuValue(e.target.textContent);
              await typeFilter(e.target.textContent.toLowerCase());
            }}
            value="flying"
          >
            Flying
          </li>
          <li
            onClick={async (e) => {
              setMenuValue(e.target.textContent);
              await typeFilter(e.target.textContent.toLowerCase());
            }}
            value="ground"
          >
            Ground
          </li>
          <li
            onClick={async (e) => {
              setMenuValue(e.target.textContent);
              await typeFilter(e.target.textContent.toLowerCase());
            }}
            value="rock"
          >
            Rock
          </li>
          <li
            onClick={async (e) => {
              setMenuValue(e.target.textContent);
              await typeFilter(e.target.textContent.toLowerCase());
            }}
            value="bug"
          >
            Bug
          </li>
          <li
            onClick={async (e) => {
              setMenuValue(e.target.textContent);
              await typeFilter(e.target.textContent.toLowerCase());
            }}
            value="fighting"
          >
            Fighting
          </li>
          <li
            onClick={async (e) => {
              setMenuValue(e.target.textContent);
              await typeFilter(e.target.textContent.toLowerCase());
            }}
            value="ice"
          >
            Ice
          </li>
          <li
            onClick={async (e) => {
              setMenuValue(e.target.textContent);
              await typeFilter(e.target.textContent.toLowerCase());
            }}
            value="fairy"
          >
            Fairy
          </li>
          <li
            onClick={async (e) => {
              setMenuValue(e.target.textContent);
              await typeFilter(e.target.textContent.toLowerCase());
            }}
            value="normal"
          >
            Normal
          </li>
          <li
            onClick={async (e) => {
              setMenuValue(e.target.textContent);
              await typeFilter(e.target.textContent.toLowerCase());
            }}
            value="dragon"
          >
            Dragon
          </li>
          <li
            onClick={async (e) => {
              setMenuValue(e.target.textContent);
              await typeFilter(e.target.textContent.toLowerCase());
            }}
            value="poison"
          >
            Poison
          </li>
          <li
            onClick={async (e) => {
              setMenuValue(e.target.textContent);
              await typeFilter(e.target.textContent.toLowerCase());
            }}
            value="psychic"
          >
            Psychic
          </li>
          <li
            onClick={async (e) => {
              setMenuValue(e.target.textContent);
              await typeFilter(e.target.textContent.toLowerCase());
            }}
            value="electric"
          >
            Electric
          </li>
          <li
            onClick={async (e) => {
              setMenuValue(e.target.textContent);
              await typeFilter(e.target.textContent.toLowerCase());
            }}
            value="ghost"
          >
            Ghost
          </li>
        </ul>
      </Dropdown>
      {/* <PokemonCompareContainer>
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
      </PokemonCompareContainer> */}
    </SearchBarContainer>
  );
}
