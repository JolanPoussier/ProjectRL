export default function minimalizeText(textToTransform: string) {
    return textToTransform.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s/g, '');
}