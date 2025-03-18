import { IEleve } from "./ieleve";

export class Eleve implements IEleve {
    constructor(
        public eleve_id: number,
        public autoecole_id: number,
        public login: string,
        public password: string,
        public naissance: string,
        public rue: string,
        public cp: number,
        public ville: string,
        public date_inscription: string,
        public neph: string,
        public note_etg: number,
        public validation_etg: boolean
    ) {}
}

