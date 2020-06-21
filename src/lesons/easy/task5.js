export function z5(site) {
    let regex = /^https?:\/\/[0-9A-z]+\.[0-9A-z]+\/[0-9A-z]+\.(php|html)$/;
    return !!site.match(regex);
}