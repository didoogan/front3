export class AncestorModel {

    constructor(
        public name: string = "",
        public lastName: string = "",
        public birthDate: string = "",
        public gender: string = "",
        public bio: string = "",
        public deathDate: string = "",
        public thirdName: string = "",
        public parents: {[key: string]: number | string} = {}
    ) { }

    setParents(relative: string, profileId: number | string) {
        this.parents[relative] = profileId;
    }
}