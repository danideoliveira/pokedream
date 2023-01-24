import {
  ContainerModal,
  PokemonName,
  PokemonId,
  ProgressBar,
} from "./Modal.styled";
import { images } from "../Images/Images";
import { colors } from "../../helpers/ColorPalette";
ContainerModal.setAppElement("#root");

export default function Modal({ modalIsOpen, handleCloseModal, pokemonInfo }) {
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
  };

  const pokemonVerifyUrl = (name) => {
    if (!name) return;
    const nameJoin = name.replace("-", "");
    if (verify[nameJoin]) {
      return verify[nameJoin].urlName;
    } else {
      return name;
    }
  };

  const pokemonVerifyName = (name) => {
    if (!name) return;
    const nameJoin = name.replace("-", "");
    if (verify[nameJoin]) {
      const { newName, img, altText } = verify[nameJoin];
      return (
        <>
          {newName.charAt(0).toUpperCase() + newName.slice(1)}
          <img src={img} alt={altText} />
        </>
      );
    } else {
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  };

  return (
    <ContainerModal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      style={{
        overlay: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(0, 0, 0, 80%)",
        },
      }}
    >
      <button onClick={handleCloseModal}>Close</button>

      <div className="left-content">
        <img
          src={`https://play.pokemonshowdown.com/sprites/ani/${pokemonVerifyUrl(
            pokemonInfo.name
          )}.gif`}
          alt={`${pokemonInfo.name} gif`}
        />
      </div>
      <div className="right-content">
        <div className="name-id">
          <PokemonName>{pokemonVerifyName(pokemonInfo.name)}</PokemonName>
          <PokemonId>#{pokemonInfo.id}</PokemonId>
        </div>
        <div className="stats">
          {pokemonInfo.stats && (
            <>
              <div>
                <p className="stat-name">HP</p>
                <ProgressBar
                  max="100"
                  value={pokemonInfo.stats[0].base_stat}
                  barColor={colors.modalProgressBackground}
                  valueColor={colors.statsHp}
                />
                <p>{pokemonInfo.stats[0].base_stat}</p>
              </div>
              <div>
                <p className="stat-name">ATK</p>
                <ProgressBar
                  max="100"
                  value={pokemonInfo.stats[1].base_stat}
                  barColor={colors.modalProgressBackground}
                  valueColor={colors.statsAtk}
                />
                <p>{pokemonInfo.stats[1].base_stat}</p>
              </div>
              <div>
                <p className="stat-name">DEF</p>
                <ProgressBar
                  max="100"
                  value={pokemonInfo.stats[2].base_stat}
                  barColor={colors.modalProgressBackground}
                  valueColor={colors.statsDef}
                />
                <p>{pokemonInfo.stats[2].base_stat}</p>
              </div>
              <div>
                <p className="stat-name">SP.ATK</p>
                <ProgressBar
                  max="100"
                  value={pokemonInfo.stats[3].base_stat}
                  barColor={colors.modalProgressBackground}
                  valueColor={colors.statsSpAtk}
                />
                <p>{pokemonInfo.stats[3].base_stat}</p>
              </div>
              <div>
                <p className="stat-name">SP.DEF</p>
                <ProgressBar
                  max="100"
                  value={pokemonInfo.stats[4].base_stat}
                  barColor={colors.modalProgressBackground}
                  valueColor={colors.statsSpDef}
                />
                <p>{pokemonInfo.stats[4].base_stat}</p>
              </div>
              <div>
                <p className="stat-name">SPEED</p>
                <ProgressBar
                  max="100"
                  value={pokemonInfo.stats[5].base_stat}
                  barColor={colors.modalProgressBackground}
                  valueColor={colors.statsSpeed}
                />
                <p>{pokemonInfo.stats[5].base_stat}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </ContainerModal>
  );
}
