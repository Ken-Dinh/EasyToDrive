import { IAvis } from "./iavis";

export class Avis implements IAvis {
    constructor(
        public avis_id?: number,
        public eleve_id?: number,
        public contenu?: string,
        public date_publication?: string
    ) {}
}
