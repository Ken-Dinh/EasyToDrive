import { IAdmin } from "../interface/iadmin";

export class Admin implements IAdmin {
    constructor(
        public admin_id?: number,
        public login?: string,
        public password?: string
    ) {}
}
