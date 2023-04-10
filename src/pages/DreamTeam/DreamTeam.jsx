import {
  Container,
  Dropdown,
  List,
  Item,
  BoxSelectedItem,
  IconDownArrow,
  SelectedItem,
} from "./DreamTeam.styled";
import { useState, useEffect, useRef } from "react";
import ModalDreamTeam from "../../components/ModalDreamTeam/ModalDreamTeam";
import { images } from "../../components/Images/Images";
import { generations } from "../../helpers/Generations";
import { PokemonConfig } from "../../components/PokemonConfig/PokemonConfig";
import { withoutGif } from "../../helpers/WithoutGif";
import { verifyPokemon } from "../../helpers/VerifyPokemon";
import { MdArrowDropDown } from "react-icons/md";
import {
  BoxPokemonInfo,
  BoxPokemonType,
  BoxSelectedMoves,
  CardPokemonType,
  Move,
  Slot,
  SlotContainer,
  SlotGrid,
} from "../../components/ModalDreamTeam/ModalDreamTeam.styled";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";

const DreamTeam = () => {
  const [modalDreamTeamIsOpen, setModalDreamTeamIsOpen] = useState(false);
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [activeGenDropdown, setActiveGenDropdown] = useState("");
  const [toggleMenu, setToggleMenu] = useState(true);
  const [toggleGenSearch, setToggleGenSearch] = useState(true);
  const [genSize, setGenSize] = useState([]);
  const [teamSelected, setTeamSelected] = useState([]);
  const refGenSearch = useRef();
  const MotionContainer = motion(Container);
  const [randomNumber, setRandomNumber] = useState();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!refGenSearch.current.contains(e.target)) {
        setActiveGenDropdown("");
      } else {
        return;
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    !toggleGenSearch
      ? setActiveGenDropdown("menu-open")
      : setActiveGenDropdown("");
  }, [toggleGenSearch]);

  useEffect(() => {
    const teamsOnStorage = JSON.parse(localStorage.getItem("teams"));
    if (teamsOnStorage) {
      setTeamSelected(teamsOnStorage);
    }
  }, []);

  useEffect(() => {
    const teams = JSON.stringify(teamSelected);
    localStorage.setItem("teams", teams);
  }, [teamSelected]);

  function handleOpenModalDreamTeam(currentGenSize) {
    setModalDreamTeamIsOpen(true);
    currentGenSize && setGenSize(currentGenSize);
  }

  function handleCloseModalDreamTeam() {
    setModalDreamTeamIsOpen(false);
  }

  const pokemonVerifyUrl = (name) => {
    const nameJoin = name.replace(/\-/g, "");
    if (verifyPokemon[nameJoin]) {
      return verifyPokemon[nameJoin].urlName;
    } else {
      return name;
    }
  };

  const pokemonVerifyName = (name) => {
    if (!name) return;
    const nameJoin = name.replace(/-/g, "");
    if (verifyPokemon[nameJoin]) {
      const { newName, img, altText } = verifyPokemon[nameJoin];
      return (
        <>
          {newName.charAt(0).toUpperCase() + newName.slice(1)}
          {verifyPokemon[nameJoin].newName === "nidoran" && (
            <img
              style={{
                width: "15px",
                height: "15px",
                marginLeft: "7px",
              }}
              src={img}
              alt={altText}
            />
          )}
        </>
      );
    } else {
      return name.charAt(0).toUpperCase() + name.slice(1);
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

  const getRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 301));
  };

  useEffect(() => {
    getRandomNumber();
  }, []);

  return (
    <Container>
      <Navbar />
      <div className="box">
        <div className="box-title">
          <div className="box-title-left-content">
            <h3>DREAM TEAM</h3>
            <p>
              Monte sua equipe ideal com os mais de 1000 pokemons disponíveis!
            </p>
          </div>

          <img
            width={250}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber}.png`}
            alt="Pokemon Image"
          />
          <div className="box-title-divider"></div>
        </div>

        <div className="create-team">
          <Dropdown
            ref={refGenSearch}
            onClick={() => {
              if (toggleGenSearch) {
                setToggleGenSearch(false);
              } else {
                setToggleGenSearch(true);
              }
            }}
            style={{ marginRight: 0 }}
          >
            <BoxSelectedItem>
              <SelectedItem>+ Nova Equipe</SelectedItem>
              <IconDownArrow src={images.iconDownArrow} alt="down arrow" />
            </BoxSelectedItem>

            <List className={`menu ${activeGenDropdown}`}>
              {generations.map((gen, index) => (
                <Item
                  key={gen.name}
                  onClick={async (e) => {
                    handleOpenModalDreamTeam(gen.size);
                  }}
                >
                  {gen.name}
                </Item>
              ))}
            </List>
          </Dropdown>
        </div>

        <div className="container-grid-team">
          {teamSelected &&
            teamSelected.map((pokemonOnTheTeam, index) => (
              <>
                <section className={`container-team team-${index}`} key={index}>
                  <button className="toggle-show-team">
                    <div
                      className="box-team-name"
                      onClick={() => {
                        const el = document.querySelector(
                          `.slot-team-${index}`
                        );
                        el.classList.toggle("active");

                        if (el.classList.contains("active")) {
                          el.style.display = "block";
                        } else {
                          el.style.display = "none";
                        }
                      }}
                    >
                      <span className="toggle-show">
                        <MdArrowDropDown />
                      </span>

                      <label
                        style={{
                          width: "100%",
                          padding: "1rem",
                          color: "black",
                          fontSize: "1.8rem",
                          fontWeight: "600",
                        }}
                      >
                        {pokemonOnTheTeam["teamName"] || `Equipe ${index + 1}`}
                      </label>
                    </div>

                    <div className="box-remove-team">
                      <span>X</span>
                      <button
                        onClick={() => {
                          const checkedTeams = [];
                          teamSelected.forEach((currentTeam, teamIndex) => {
                            if (index !== teamIndex) {
                              checkedTeams.push(currentTeam);
                            }
                          });
                          setTeamSelected(checkedTeams);
                        }}
                      >
                        X
                      </button>
                    </div>
                  </button>

                  <SlotContainer
                    className={`team slot-team-${index} active`}
                    style={{
                      marginBottom: "2rem",
                      width: "100%",
                      padding: "2rem 0",
                    }}
                  >
                    <SlotGrid>
                      {pokemonOnTheTeam.initialValue !== "" &&
                        pokemonOnTheTeam["allPokemons"].map(
                          (currentPokemonOnTeam) =>
                            currentPokemonOnTeam.initialValue !== "" && (
                              <Slot key={index}>
                                <>
                                  {console.log(currentPokemonOnTeam)}
                                  <BoxPokemonInfo>
                                    <div className="container-pokemon-image">
                                      <img
                                        width={
                                          withoutGif[
                                            currentPokemonOnTeam[
                                              "pokemon"
                                            ].name.replace(/\-/g, "")
                                          ] && 100
                                        }
                                        src={verifyWithoutGif(
                                          currentPokemonOnTeam["pokemon"].name
                                        )}
                                        alt="pokemon image"
                                      />
                                    </div>
                                    <h3 className="selected-pokemon-name">
                                      {pokemonVerifyName(
                                        currentPokemonOnTeam["pokemon"].name
                                      )}
                                    </h3>
                                    <p className="selected-pokemon-id">
                                      #{currentPokemonOnTeam["pokemon"].id}
                                    </p>

                                    <BoxPokemonType>
                                      {currentPokemonOnTeam["pokemon"][
                                        "pokemonTypes"
                                      ].map((pokemonType) => (
                                        <CardPokemonType
                                          key={
                                            PokemonConfig[pokemonType.type.name]
                                              .typeColor
                                          }
                                          typeColor={
                                            PokemonConfig[pokemonType.type.name]
                                              .typeColor
                                          }
                                        >
                                          <img
                                            src={
                                              PokemonConfig[
                                                pokemonType.type.name
                                              ].img
                                            }
                                            alt={`${pokemonType.type.name} icon`}
                                          />
                                        </CardPokemonType>
                                      ))}
                                    </BoxPokemonType>
                                  </BoxPokemonInfo>

                                  <BoxSelectedMoves>
                                    <Move
                                      style={{
                                        background:
                                          currentPokemonOnTeam["moves"][0]
                                            .background,
                                      }}
                                    >
                                      <h3 className="move-name">
                                        {currentPokemonOnTeam["moves"][0].name}
                                      </h3>
                                      <img
                                        className="move-icon"
                                        width="20px"
                                        src={
                                          currentPokemonOnTeam["moves"][0].img
                                        }
                                        alt="type icon"
                                      />
                                    </Move>

                                    <Move
                                      style={{
                                        background:
                                          currentPokemonOnTeam["moves"][1]
                                            .background,
                                      }}
                                    >
                                      <h3 className="move-name">
                                        {currentPokemonOnTeam["moves"][1].name}
                                      </h3>
                                      <img
                                        className="move-icon"
                                        width="20px"
                                        src={
                                          currentPokemonOnTeam["moves"][1].img
                                        }
                                        alt="type icon"
                                      />
                                    </Move>

                                    <Move
                                      style={{
                                        background:
                                          currentPokemonOnTeam["moves"][2]
                                            .background,
                                      }}
                                    >
                                      <h3 className="move-name">
                                        {currentPokemonOnTeam["moves"][2].name}
                                      </h3>
                                      <img
                                        className="move-icon"
                                        width="20px"
                                        src={
                                          currentPokemonOnTeam["moves"][2].img
                                        }
                                        alt="type icon"
                                      />
                                    </Move>

                                    <Move
                                      style={{
                                        background:
                                          currentPokemonOnTeam["moves"][3]
                                            .background,
                                      }}
                                    >
                                      <h3 className="move-name">
                                        {currentPokemonOnTeam["moves"][3].name}
                                      </h3>
                                      <img
                                        className="move-icon"
                                        width="20px"
                                        src={
                                          currentPokemonOnTeam["moves"][3].img
                                        }
                                        alt="type icon"
                                      />
                                    </Move>
                                  </BoxSelectedMoves>
                                </>
                              </Slot>
                            )
                        )}
                    </SlotGrid>
                  </SlotContainer>
                </section>
              </>
            ))}
        </div>

        <ModalDreamTeam
          modalDreamTeamIsOpen={modalDreamTeamIsOpen}
          handleOpenModalDreamTeam={handleOpenModalDreamTeam}
          handleCloseModalDreamTeam={handleCloseModalDreamTeam}
          pokemonInfo={pokemonInfo}
          genSize={genSize}
          setTeamSelected={setTeamSelected}
        />
      </div>
    </Container>
  );
};

export default DreamTeam;
