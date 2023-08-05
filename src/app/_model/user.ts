import { Query } from "@angular/core";
import { Game } from "./game";
import { Playcard } from "./playcard";

export class User {
    public id!: number;
    public username!: string;
    public email!: string;
    public password!: string;
    public age!: number;
    public role!: string;
    public playCards!: Playcard[];
    public CustomerCare: Query[] = [];
    constructor() {

    }
}
