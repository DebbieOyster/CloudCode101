import { LightningElement, api } from 'lwc';
import { JSConfetti } from './js-confetti';

export default class LwcLabsConfetti extends LightningElement {
    @api size = 'medium';
    @api number = 'normal';
    @api type = 'default';
    @api emojis = null;

    sizeOptions = [
        { label: 'small', value: 60 },
        { label: 'medium', value: 100 },
        { label: 'large', value: 140 }];
    numberOptions = [
        { label: 'few', value: 15 },
        { label: 'normal', value: 30 },
        { label: 'plenty', value: 50 }];

    renderedCallback() {
        // Confetti will be shown immediatelly when component renders
        const jsConfetti = new JSConfetti({})
        // The emoji confettis accept the emojiSize and confettiNumber parameters
        if (this.type === 'emoji') {
            jsConfetti.addConfetti({
                emojis: [...this.emojis],
                emojiSize: this.sizeOptions.filter(o => o.label === this.size)[0].value,
                confettiNumber: this.numberOptions.filter(o => o.label === this.number)[0].value,
            })
        }
        // The default confettis only accept the confettiNumber parameter
        else {
            jsConfetti.addConfetti({
                confettiNumber: this.numberOptions.filter(o => o.label === this.number)[0].value * 4,
            })
        }
    }
}