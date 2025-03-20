import { ITest } from "../interface/itest";

export class Test implements ITest {
    constructor(
        public test_id?: number,
        public examen_id?: number,
        public theme?: string,
        public date?: string,
        public score?: number
    ) {}
}
