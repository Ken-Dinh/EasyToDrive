import { IAutoEcole } from "../interface/iauto-ecole";

export class AutoEcole implements IAutoEcole {
    constructor(
        public autoecole_id?: number,
        public nom?: string,
        public password?: string
    ) {}
}
