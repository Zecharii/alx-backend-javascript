export default class Currency {
	constructir(code, name) {
		this.code = code;
		this.name = name;
	}

	get code() {
		return this._code;
	}

	set code(value) {
		this._code = value;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}

	/**
	 * Create a full string rep of the Currency.
	 * @Returns a string.
	 */
	displayFullCurrency() {
		return `${this.name} (${this.code})`;
	}
}
