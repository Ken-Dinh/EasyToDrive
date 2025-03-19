import { IExamen } from "./iexamen";

export class Examen implements IExamen {
    constructor(
        public examen_id?: number,
        public date?: string,
        public score?: number
    ) {}
}
