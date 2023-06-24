export function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function countWords(str) {
    str = str.trim();
    if (str === "") {
        return 0;
    }
    return str.split(/\s+/).length;
}
