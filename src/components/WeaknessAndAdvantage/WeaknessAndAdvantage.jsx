import { BoxWeaks } from "./WeaknessAndAdvantage.styled";
import { PokemonConfig } from "../PokemonConfig/PokemonConfig";
import PreLoader from "../PreLoader/PreLoader";
import { useState, useEffect } from "react";
import axios from "axios";

const WeaknessAndAdvantage = ({ pokemonInfo }) => {
  const [advantages, setAdvantages] = useState([]);

  const getAdvantages = async () => {
    const typeData = [];

    for (let i = 1; i <= 18; i++) {
      await axios
        .get(`https://pokeapi.co/api/v2/type/${i}`)
        .then((response) => response.data)
        .then((data) => {
          typeData.push(data);
        });
    }

    setAdvantages(typeData);
    return typeData;
  };

  useEffect(() => {
    getAdvantages();
  }, []);

  const advantagesReturn = () => {
    const advantagesData = [];
    const weaknessData = [];
    const noDamageToData = [];
    const noDamageFromData = [];
    const halfDamageTo = [];
    const halfDamageFrom = [];

    if (advantages.length === 0) return;

    pokemonInfo.pokemonTypes.forEach((currentType) => {
      advantages[PokemonConfig[currentType.type.name].id - 1][
        "damage_relations"
      ].double_damage_from.map((value) => {
        !weaknessData.includes(value.name) && weaknessData.push(value.name);
      });
    });

    pokemonInfo.pokemonTypes.forEach((currentType) => {
      advantages[PokemonConfig[currentType.type.name].id - 1][
        "damage_relations"
      ].double_damage_to.map((value) => {
        !advantagesData.includes(value.name) && advantagesData.push(value.name);
      });
    });

    pokemonInfo.pokemonTypes.forEach((currentType) => {
      advantages[PokemonConfig[currentType.type.name].id - 1][
        "damage_relations"
      ].no_damage_to.map((value) => {
        if (!value.name) return;
        !noDamageToData.includes(value.name) && noDamageToData.push(value.name);
      });
    });

    pokemonInfo.pokemonTypes.forEach((currentType) => {
      advantages[PokemonConfig[currentType.type.name].id - 1][
        "damage_relations"
      ].no_damage_from.map((value) => {
        if (!value.name) return;
        !noDamageFromData.includes(value.name) &&
          noDamageFromData.push(value.name);
      });
    });

    pokemonInfo.pokemonTypes.forEach((currentType) => {
      advantages[PokemonConfig[currentType.type.name].id - 1][
        "damage_relations"
      ].half_damage_to.map((value) => {
        if (!value.name) return;
        !halfDamageTo.includes(value.name) && halfDamageTo.push(value.name);
      });
    });

    pokemonInfo.pokemonTypes.forEach((currentType) => {
      advantages[PokemonConfig[currentType.type.name].id - 1][
        "damage_relations"
      ].half_damage_from.map((value) => {
        if (!value.name) return;
        !halfDamageFrom.includes(value.name) && halfDamageFrom.push(value.name);
      });
    });

    const weaksFiltered = [];

    weaknessData.forEach((value) => {
      if (!noDamageFromData.includes(value)) {
        weaksFiltered.push(value);
      }
    });

    let newWeakness = [];

    pokemonInfo.pokemonTypes.forEach((currentType) => {
      weaksFiltered.forEach((value) => {
        if (
          currentType.type.name === "dragon" ||
          currentType.type.name === "ghost"
        ) {
          !newWeakness.includes(value) && newWeakness.push(value);
        }
        if (value !== currentType.type.name) {
          !newWeakness.includes(value) && newWeakness.push(value);
        }
      });
    });

    if (pokemonInfo.pokemonTypes.length > 1) {
      let verifyWeaksHalf = [];

      !newWeakness.includes("dragon") ||
        (!newWeakness.includes("ghost") &&
          newWeakness.filter(
            (value) => value !== pokemonInfo.pokemonTypes[0].type.name
          ));

      verifyWeaksHalf = newWeakness.filter(
        (value) => !halfDamageFrom.includes(value)
      );

      newWeakness = verifyWeaksHalf;
    }

    const allData = { advantagesData, newWeakness };

    return allData;
  };

  return (
    <>
      {advantages.length !== 0 ? (
        <div
          className="box-advantages"
          style={{ width: "100%", height: "100%", margin: "5px 0" }}
        >
          <p style={{ color: "white", fontSize: "1.6rem" }}>Fraquezas</p>

          <BoxWeaks>
            {advantagesReturn()["newWeakness"].map((value, index) => (
              <div
                key={`${value} ${index}`}
                className="card-box-weaks"
                style={{ background: PokemonConfig[value].typeColor }}
              >
                <img src={PokemonConfig[value].img} alt="type icon" />
              </div>
            ))}
          </BoxWeaks>

          <br></br>

          <p style={{ color: "white", fontSize: "1.6rem" }}>Vantagens</p>

          <BoxWeaks>
            {advantagesReturn()["advantagesData"].map((value, index) => (
              <div
                key={`${value} ${index}`}
                className="card-box-weaks"
                style={{
                  background: PokemonConfig[value].typeColor,
                }}
              >
                <img src={PokemonConfig[value].img} alt="type icon" />
              </div>
            ))}
          </BoxWeaks>
        </div>
      ) : (
        <PreLoader />
      )}
    </>
  );
};

export default WeaknessAndAdvantage;
