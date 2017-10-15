export enum Gender {
  Male,
  Female
}

export class Ancestor {

  static loadFromJSON(json: any) {
    const ancestor = new Ancestor();
    ancestor.first_name = json['first_name'] ? json['first_name'] : '';
    ancestor.last_name = json['last_name'] ? json['last_name'] : '';
    ancestor.birth = json['birth'] ? json['birth'] : '';
    ancestor.gender = json['gender'] && json['gender'].toString() === 'false' ? Gender.Female : Gender.Male;
    ancestor.bio = json['bio'] ? json['bio'] : '';
    ancestor.death = json['death'] ? json['death'] : '';
    ancestor.third_name = json['third_name'] ? json['third_name'] : '';

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
    public first_name: string = '',
    public last_name: string = '',
    public birth: string = '',
    public gender: Gender = Gender.Male,
    public bio: string = '',
    public death: string = '',
    public third_name: string = '',
    public parents: Ancestor[] = [],
    public children: Ancestor[] = [],
    public siblings: Ancestor[] = []
  ) { }
}
