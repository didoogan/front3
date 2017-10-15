export enum Gender {
  Male,
  Female
}

export class Ancestor {

  static loadFromJSON(json: any) {
    const ancestor = new Ancestor();
    ancestor.name = json['first_name'] ? json['first_name'] : '';
    ancestor.lastName = json['last_name'] ? json['last_name'] : '';
    ancestor.birthDate = json['birth_date'] ? json['birth_date'] : '';
    ancestor.gender = json['gender'] && json['gender'].toString() === 'false' ? Gender.Female : Gender.Male;
    ancestor.bio = json['bio'] ? json['bio'] : '';
    ancestor.deathDate = json['death_date'] ? json['death_date'] : '';
    ancestor.thirdName = json['third_name'] ? json['third_name'] : '';

    ['parents', 'children', 'siblings'].forEach(relation => {
      if (json[relation] && json[relation].length > 0) {
        json[relation].forEach(parent => {
          ancestor[relation].push(Ancestor.loadFromJSON(parent));
        });
      }
    });
    return ancestor;
  }

  constructor(
    public name: string = '',
    public lastName: string = '',
    public birthDate: string = '',
    public gender: Gender = Gender.Male,
    public bio: string = '',
    public deathDate: string = '',
    public thirdName: string = '',
    public parents: Ancestor[] = [],
    public children: Ancestor[] = [],
    public siblings: Ancestor[] = []
  ) { }
}
