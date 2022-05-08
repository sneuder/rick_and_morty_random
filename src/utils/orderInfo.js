
const orderInfo = (character) => {
  const { name, id, image, species, type, status, origin, location, gender, created } = character;
  let details = [status, species, type, gender, origin.name, location.name, created];
  let keys = ["status", "species", "type", "gender", "origin", "location", "created at"]

  details = details.map((detail, index )=> {
    return {
      key: keys[index],
      value: detail
    }
  });

  return details;
}

export default orderInfo;