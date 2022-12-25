import dates from '../utils/dates';

class Detail {
  constructor(info) {
    this.title = info.title;
    this.text = info.text;
  }
}

class Character {
  constructor(info) {
    this.id = info.id;
    this.name = info.name;
    this.image = info.image;
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

      return new Detail({ title: keyDetail, text: value || 'unknown' });
    });
  }
}

export default Character;
