import dates from "./dates";

const orderInfo = (character) => {
  const { species, type, status, origin, location, gender, created } = character;
  let details = [status, species, type, gender, origin.name, location.name, created];
  let keys = ["status", "species", "type", "gender", "origin", "location", "created at"];

  details = details.map((detail, index )=> {
    if(keys[index] === "created at") detail = dates(detail);

    return {
      key: keys[index],
      value: detail
    }
  });

  return details;
}

export default orderInfo;