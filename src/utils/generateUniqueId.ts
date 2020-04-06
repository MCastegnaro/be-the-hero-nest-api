import * as crypto from "crypto";

export class GenerateID {
    static generateUniqueId() {
        return crypto.randomBytes(4).toString('HEX');
    }

}
