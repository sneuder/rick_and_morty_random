import dates from '../utils/dates';

class Detail {
  constructor(info) {
    this.key = info.key;
    this.value = info.value;
  }
}

class Character {
  constructor(info) {
    this.id = info.id;
    this.name = info.name;
    this.details = this.callDetails(info);
  }

  callDetails(info) {
    const keyDetails = [
      'status',
      'species',
      'type',
      'gender',
      'origin',
      'location',
      'created',
    ];

    return keyDetails.map((keyDetail) => {
      let value = info[keyDetail];

      if (info[keyDetail].name) value = info[keyDetail].name;
      if (keyDetail === 'created') value = dates(info[keyDetail]);

      return new Detail({ key: keyDetail, value: value });
    });
  }
}

export default Character;
