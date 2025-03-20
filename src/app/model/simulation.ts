import { ISimulation } from "../interface/isimulation";

export class Simulation implements ISimulation {
    constructor(
        public simulation_id?: number,
        public examen_id?: number,
        public date?: string,
        public validation?: boolean
    ) {}
}
