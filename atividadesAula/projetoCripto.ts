import * as crypto from 'crypto';

class User {
    id: number | undefined;
    private userDocument: string | undefined;
    private creditCardToken: string | undefined;
    value: number | undefined;

    private readonly ALGORITHM = 'aes-256-cbc';
    private readonly KEY = crypto.scryptSync('TheBestSecretKey', 'salt', 32);
    private readonly IV = Buffer.alloc(16, 0);

    setUserDocument(userDocument: string): void {
        this.userDocument = this.encrypt(userDocument);
    }

    getUserDocument(): string {
        return this.decrypt(this.userDocument);
    }

    setCreditCardToken(creditCardToken: string): void {
        this.creditCardToken = this.encrypt(creditCardToken);
    }

    getCreditCardToken(): string {
        return this.decrypt(this.creditCardToken);
    }

    private encrypt(text: string): string {
        const cipher = crypto.createCipheriv(this.ALGORITHM, this.KEY, this.IV);
        const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
        return encrypted.toString('hex');
    }

    private decrypt(text: string): string {
        const decipher = crypto.createDecipheriv(this.ALGORITHM, this.KEY, this.IV);
        const decrpyted = Buffer.concat([decipher.update(Buffer.from(text, 'hex')), decipher.final()]);
        return decrpyted.toString('utf8');
    }
}
