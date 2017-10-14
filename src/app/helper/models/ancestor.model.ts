export class Ancestor {

  static loadFromJSON(json: JSON) {
    const ancestor = new Ancestor();
    ancestor.name = json['name'] ? json['name'] : '';
    ancestor.lastName = json['last_name'] ? json['last_name'] : '';
    ancestor.birthDate = json['birth_date'] ? json['birth_date'] : '';
    ancestor.gender = json['gender'] ? json['gender'] : '';
    ancestor.bio = json['bio'] ? json['bio'] : '';
    ancestor.deathDate = json['death_date'] ? json['death_date'] : '';
    ancestor.thirdName = json['third_name'] ? json['third_name'] : '';

    ['parents', 'children', 'siblings'].forEach(relation => {
      if (json[relation] && json[relation].lenght > 0) {
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
    public gender: string = '',
    public bio: string = '',
    public deathDate: string = '',
    public thirdName: string = '',
    public parents: Ancestor[] = [],
    public children: Ancestor[] = [],
    public siblings: Ancestor[] = []
  ) { }
}
