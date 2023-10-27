import {
  ContainerModal,
  CloseButton,
  ChoosePokemonContainer,
  SlotContainer,
  SlotGrid,
  Slot,
  BoxSelectedMoves,
  Move,
  BoxPokemonInfo,
  BoxPokemonType,
  CardPokemonType,
  ChoosePokemonList,
  BoxRemovePokemon,
  ContainerAddToSlot,
  NextStepBox,
  CloseListBox,
  ChooseListBox,
  SearchContainer,
  PokemonListContainer,
  ModalConfirmTeam,
} from "./ModalDreamTeam.styled";
import {
  Dropdown,
  BoxSelectedItem,
  List,
  Item,
  SelectedItem,
  IconDownArrow,
  InputSearch,
  InputNameId,
  BoxIconSearch,
  IconSearch,
} from "../SearchBar/SearchBar.styled";
import { PokemonConfig } from "../PokemonConfig/PokemonConfig";
import { verifyPokemon } from "../../helpers/VerifyPokemon";
import PreLoader from "../PreLoader/PreLoader";
import { useState, useEffect, useRef } from "react";
import { images } from "../Images/Images";
import axios from "axios";
import CardDreamTeam from "../CardDreamTeam/CardDreamTeam";
import { MdDoubleArrow } from "react-icons/md";
import MoveSelector from "../MoveSelector/MoveSelector";
import PokemonNotFound from "../PokemonNotFound/PokemonNotFound";
import PaginationComponent from "../Pagination/Pagination";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillCloseSquare } from "react-icons/ai";
import { withoutGif } from "../../helpers/WithoutGif";
ContainerModal.setAppElement("#root");

export default function ModalDreamTeam({
  modalDreamTeamIsOpen,
  handleCloseModalDreamTeam,
  sendToCompare,
  genSize,
  teamSelected,
  setTeamSelected,
}) {
  const [modalConfirmTeamIsOpen, setModalConfirmTeamIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [moveSelector, setMoveSelector] = useState(false);
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [inputValue, setInputValue] = useState([]);
  const [activeTypeDropdown, setActiveTypeDropdown] = useState("");
  const [toggleMenu, setToggleMenu] = useState(true);
  const [menuValue, setMenuValue] = useState("Busca por tipo...");
  const [isTeamComplete, setIsTeamComplete] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [pokemonOne, setPokemonOne] = useState({ initialValue: "" });
  const [pokemonTwo, setPokemonTwo] = useState({ initialValue: "" });
  const [pokemonThree, setPokemonThree] = useState({ initialValue: "" });
  const [pokemonFour, setPokemonFour] = useState({ initialValue: "" });
  const [pokemonFive, setPokemonFive] = useState({ initialValue: "" });
  const [pokemonSix, setPokemonSix] = useState({ initialValue: "" });
  const [showPokemonList, setShowPokemonList] = useState(false);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [allSelected, setAllSelected] = useState([
    pokemonOne,
    pokemonTwo,
    pokemonThree,
    pokemonFour,
    pokemonFive,
    pokemonSix,
  ]);
  const itemsPerPage = 12;
  const pages = Math.ceil(pokemons.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = pokemons.slice(startIndex, endIndex);
  const refTypeSearch = useRef();

  useEffect(() => {
    setAllSelected([
      pokemonOne,
      pokemonTwo,
      pokemonThree,
      pokemonFour,
      pokemonFive,
      pokemonSix,
    ]);

    verifyIsTeamComplete();
  }, [
    pokemonOne,
    pokemonTwo,
    pokemonThree,
    pokemonFour,
    pokemonFive,
    pokemonSix,
  ]);

  async function getApi(min, max) {
    try {
      const nullPokemons = [980, 987];
      const pokemonData = [];
      let localFavoriteList = [];
      for (let i = min; i <= max; i++) {
        if (!nullPokemons.includes(i)) {
          await axios
            .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then((response) => response.data)
            .then((data) => {
              pokemonData.push(data);
            });
        }
      }

      setPokemons(pokemonData);
      setLoading(true);
      return pokemonData;
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!refTypeSearch.current) return;
      if (!refTypeSearch.current.contains(e.target)) {
        setActiveTypeDropdown("");
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
    setLoading(false);
    const [min, max] = genSize;
    getApi(min, max);
  }, [genSize]);

  useEffect(() => {
    !toggleMenu
      ? setActiveTypeDropdown("menu-open")
      : setActiveTypeDropdown("");
  }, [toggleMenu]);

  useEffect(() => {
    const pokemonTypesArr = [];
    for (let type in PokemonConfig) {
      pokemonTypesArr.push(type);
    }
    setPokemonTypes(pokemonTypesArr);
  }, []);

  const sendToTeam = (pokemonSelected) => {
    setMoveSelector(false);
    if (pokemonOne.initialValue === "") {
      setPokemonOne(pokemonSelected);
    } else if (pokemonTwo.initialValue === "") {
      setPokemonTwo(pokemonSelected);
    } else if (pokemonThree.initialValue === "") {
      setPokemonThree(pokemonSelected);
    } else if (pokemonFour.initialValue === "") {
      setPokemonFour(pokemonSelected);
    } else if (pokemonFive.initialValue === "") {
      setPokemonFive(pokemonSelected);
    } else if (pokemonSix.initialValue === "") {
      setPokemonSix(pokemonSelected);
    }
  };

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

  const verifyIsTeamComplete = () => {
    const slots = [
      pokemonOne,
      pokemonTwo,
      pokemonThree,
      pokemonFour,
      pokemonFive,
      pokemonSix,
    ];

    const verifiedSlots = [];

    slots.forEach((slot) => {
      if (slot.initialValue === "") {
        verifiedSlots.push(true);
      }
    });

    setIsTeamComplete(!verifiedSlots.includes(true));
  };

  const pokemonFilter = async (filterValue) => {
    const allPokemons = await getApi(genSize[0], genSize[1]);
    const filteredPokemons = [];
    if (!filterValue) {
      await getApi(genSize[0], genSize[1]);
      return;
    }

    allPokemons.forEach((currentPokemon) => {
      if (
        currentPokemon.name.includes(filterValue.toLowerCase()) ||
        currentPokemon.id.toString().includes(filterValue)
      ) {
        filteredPokemons.push(currentPokemon);
      }
    });

    setPokemons(filteredPokemons);
  };

  const typeFilter = async (pokemonType) => {
    if (!pokemonType || pokemonType.includes("todos")) {
      await getApi(genSize[0], genSize[1]);
      return;
    }
    const allPokemons = await getApi(genSize[0], genSize[1]);
    const filteredPokemons = [];

    allPokemons.forEach((currentPokemon) => {
      currentPokemon.types.map((currentType) => {
        if (currentType.type.name === pokemonType) {
          filteredPokemons.push(currentPokemon);
        }
      });
    });

    setPokemons(filteredPokemons);
  };

  const handleOpenMoveSelector = (info) => {
    setMoveSelector(true);
    setShowPokemonList(false);
    info && setPokemonInfo(info);
  };

  const handleCloseMoveSelector = () => {
    setMoveSelector(false);
  };

  const handleShowPokemonList = () => {
    setShowPokemonList(true);
  };

  const handleHidePokemonList = () => {
    setShowPokemonList(false);
  };

  const clearSlots = () => {
    const slots = [
      setPokemonOne,
      setPokemonTwo,
      setPokemonThree,
      setPokemonFour,
      setPokemonFive,
      setPokemonSix,
    ];

    slots.forEach((state) => {
      state({ initialValue: "" });
    });
    setTeamName("");
  };

  const confirmTeam = () => {
    if (!isTeamComplete) return;
    let teamInfo = [];
    const allPokemons = allSelected;
    teamInfo = { teamName, allPokemons };
    setTeamSelected((prevTeam) => [...prevTeam, teamInfo]);
    clearSlots();
    handleCloseModalConfirmTeam();
    handleCloseModalDreamTeam();
  };

  const removePokemon = (index) => {
    const pokemonName = document.querySelector(
      `.slot-${index} .selected-pokemon-name`
    );

    const slots = [
      pokemonOne,
      pokemonTwo,
      pokemonThree,
      pokemonFour,
      pokemonFive,
      pokemonSix,
    ];

    const updateSlots = [
      setPokemonOne,
      setPokemonTwo,
      setPokemonThree,
      setPokemonFour,
      setPokemonFive,
      setPokemonSix,
    ];

    pokemonName.textContent
      .toLowerCase()
      .includes(slots[index]["pokemon"].name) &&
      updateSlots[index]({ initialValue: "" });
  };

  function handleOpenModalConfirmTeam(currentGenSize) {
    setModalConfirmTeamIsOpen(true);
  }

  function handleCloseModalConfirmTeam() {
    setModalConfirmTeamIsOpen(false);
  }

  return (
    <ContainerModal
      isOpen={modalDreamTeamIsOpen}
      style={{
        overlay: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(0, 0, 0, 80%)",
          zIndex: 999,
        },
      }}
    >
      <CloseButton
        onClick={() => {
          handleCloseModalDreamTeam();
          clearSlots();
          setLoading(true);
        }}
      >
        <AiFillCloseSquare />
      </CloseButton>

      {!moveSelector ? (
        <>
          <ChoosePokemonContainer>
            <div className="choose-pokemon-box">
              <SlotContainer>
                <SlotGrid>
                  {allSelected.map((pokemonOnTheTeam, index) => (
                    <Slot className={`slot-${index}`} key={index}>
                      {pokemonOnTheTeam.initialValue !== "" ? (
                        <>
                          <BoxRemovePokemon>
                            <button
                              className="button-remove-pokemon"
                              onClick={() => removePokemon(index)}
                            >
                              X
                            </button>
                          </BoxRemovePokemon>

                          <BoxPokemonInfo>
                            <div className="container-pokemon-image">
                              <img
                                width={
                                  withoutGif[
                                    pokemonOnTheTeam["pokemon"].name.replace(
                                      /\-/g,
                                      ""
                                    )
                                  ] && 100
                                }
                                src={verifyWithoutGif(
                                  pokemonOnTheTeam["pokemon"].name
                                )}
                                alt="pokemon image"
                              />
                            </div>
                            <h3 className="selected-pokemon-name">
                              {pokemonVerifyName(
                                pokemonOnTheTeam["pokemon"].name
                              )}
                            </h3>
                            <p className="selected-pokemon-id">
                              #{pokemonOnTheTeam["pokemon"].id}
                            </p>

                            <BoxPokemonType>
                              {pokemonOnTheTeam["pokemon"]["pokemonTypes"].map(
                                (pokemonType) => (
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
                                        PokemonConfig[pokemonType.type.name].img
                                      }
                                      alt={`${pokemonType.type.name} icon`}
                                    />
                                  </CardPokemonType>
                                )
                              )}
                            </BoxPokemonType>
                          </BoxPokemonInfo>

                          <BoxSelectedMoves>
                            <Move
                              style={{
                                background:
                                  pokemonOnTheTeam["moves"][0].background,
                              }}
                            >
                              <h3 className="move-name">
                                {pokemonOnTheTeam["moves"][0].name}
                              </h3>
                              <img
                                className="move-icon"
                                width="20px"
                                src={pokemonOnTheTeam["moves"][0].img}
                                alt="type icon"
                              />
                            </Move>

                            <Move
                              style={{
                                background:
                                  pokemonOnTheTeam["moves"][1].background,
                              }}
                            >
                              <h3 className="move-name">
                                {pokemonOnTheTeam["moves"][1].name}
                              </h3>
                              <img
                                className="move-icon"
                                width="20px"
                                src={pokemonOnTheTeam["moves"][1].img}
                                alt="type icon"
                              />
                            </Move>

                            <Move
                              style={{
                                background:
                                  pokemonOnTheTeam["moves"][2].background,
                              }}
                            >
                              <h3 className="move-name">
                                {pokemonOnTheTeam["moves"][2].name}
                              </h3>
                              <img
                                className="move-icon"
                                width="20px"
                                src={pokemonOnTheTeam["moves"][2].img}
                                alt="type icon"
                              />
                            </Move>

                            <Move
                              style={{
                                background:
                                  pokemonOnTheTeam["moves"][3].background,
                              }}
                            >
                              <h3 className="move-name">
                                {pokemonOnTheTeam["moves"][3].name}
                              </h3>
                              <img
                                className="move-icon"
                                width="20px"
                                src={pokemonOnTheTeam["moves"][3].img}
                                alt="type icon"
                              />
                            </Move>
                          </BoxSelectedMoves>
                        </>
                      ) : (
                        <ContainerAddToSlot onClick={handleShowPokemonList}>
                          <IoIosAddCircle
                            style={{
                              width: "100px",
                              height: "100px",
                              cursor: "pointer",
                              color: "grey",
                            }}
                          />
                        </ContainerAddToSlot>
                      )}
                    </Slot>
                  ))}
                </SlotGrid>
              </SlotContainer>

              <NextStepBox>
                <button
                  className="next-step-button"
                  disabled={!isTeamComplete}
                  onClick={handleOpenModalConfirmTeam}
                >
                  Prosseguir
                </button>
              </NextStepBox>
            </div>
          </ChoosePokemonContainer>

          <ChoosePokemonList
            style={{
              left: showPokemonList ? "0" : "-100%",
            }}
          >
            <CloseListBox onClick={handleHidePokemonList}>
              <button
                className="close-list-button"
                onClick={handleHidePokemonList}
              >
                <MdDoubleArrow />
              </button>
            </CloseListBox>

            <ChooseListBox>
              <SearchContainer style={{ display: loading ? "flex" : "none" }}>
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
                    <IconDownArrow
                      src={images.iconDownArrow}
                      alt="down arrow"
                    />
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
              </SearchContainer>

              {!loading && <PreLoader />}
              {loading && pokemons.length === 0 && (
                <PokemonNotFound>Nenhum Pokemon encontrado!</PokemonNotFound>
              )}

              <PokemonListContainer
                style={{ display: loading ? "flex" : "none" }}
              >
                <div
                  className="pokemon-list-grid"
                  style={{ display: !loading ? "none" : "grid" }}
                >
                  {currentItems.map((pokemon) => (
                    <CardDreamTeam
                      key={pokemon.name}
                      name={pokemon.name}
                      id={pokemon.id}
                      weight={pokemon.weight}
                      height={pokemon.height}
                      stats={pokemon.stats}
                      abilities={pokemon.abilities}
                      pokemonTypes={pokemon.types || pokemon.pokemonTypes}
                      moves={pokemon.moves}
                      handleOpenMoveSelector={handleOpenMoveSelector}
                    />
                  ))}
                </div>
              </PokemonListContainer>

              {loading && (
                <PaginationComponent
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  pages={pages}
                  loading={loading}
                />
              )}
            </ChooseListBox>
          </ChoosePokemonList>

          <ModalConfirmTeam
            isOpen={modalConfirmTeamIsOpen}
            style={{
              overlay: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(0, 0, 0, 80%)",
                zIndex: 999,
              },
            }}
          >
            <div className="team-name-box">
              <CloseButton
                onClick={() => {
                  handleCloseModalConfirmTeam();
                }}
                style={{ margin: "5px 5px" }}
              >
                <AiFillCloseSquare />
              </CloseButton>

              <input
                type="text"
                placeholder="Nome da equipe..."
                maxLength={22}
                max={22}
                onChange={(e) => setTeamName(e.target.value)}
              />

              <button className="confirm-team-button" onClick={confirmTeam}>
                Confirmar equipe
              </button>
            </div>
          </ModalConfirmTeam>
        </>
      ) : (
        <MoveSelector
          handleCloseMoveSelector={handleCloseMoveSelector}
          pokemonInfo={pokemonInfo}
          sendToTeam={sendToTeam}
        />
      )}
    </ContainerModal>
  );
}
