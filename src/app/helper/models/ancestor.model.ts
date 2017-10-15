export enum Gender {
  Male,
  Female,
  NoGender
}

export class Ancestor {

  static loadFromJSON(json: any) {
    const ancestor = new Ancestor();
    ancestor.id = json['id'] ? +json['id'] : 0;
    ancestor.first_name = json['first_name'] ? json['first_name'] : '';
    ancestor.last_name = json['last_name'] ? json['last_name'] : '';
    ancestor.birth = json['birth'] ? json['birth'] : '';
    ancestor.gender = typeof json['gender'] === 'boolean' ? json['gender'] ? Gender.Male : Gender.Female : Gender.NoGender;
    ancestor.bio = json['bio'] ? json['bio'] : '';
    ancestor.death = json['death'] ? json['death'] : '';
    ancestor.third_name = json['third_name'] ? json['third_name'] : '';

    if (json['photos'] && json['photos'].length > 0) {
      json['photos'].forEach(photo => {
        ancestor.photos.push(photo.photo);
        if (photo.is_avatar) {
          ancestor.avatar = photo.photo;
        }
      });
    }

    ['parents', 'children', 'siblings'].forEach(relation => {
      if (json[relation] && json[relation].length > 0) {
        json[relation].forEach(rel => {
          ancestor[relation].push(+rel);
        });
      }
    });
    return ancestor;
  }

  constructor(
    public id: number = 0,
    public first_name: string = '',
    public last_name: string = '',
    public birth: string = '',
    public gender: Gender = Gender.Male,
    public bio: string = '',
    public death: string = '',
    public third_name: string = '',
    public avatar: string = '',
    public photos: any[] = [],
    public parents: number[] = [],
    public children: number[] = [],
    public siblings: number[] = []
  ) { }
}
