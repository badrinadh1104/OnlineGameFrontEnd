import { Game } from "./game";

export class Playcard {
    public id!: number;
    public name!: string;
    public price!: number;
    public offer!: number;
    public Games: Game[] = [];
    constructor() {
    }
}
