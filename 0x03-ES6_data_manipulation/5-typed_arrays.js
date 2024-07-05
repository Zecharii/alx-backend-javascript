/**
 * Creates an ArrayBuffer with an Int8 value at a specific position.
 * @param {Number} length - The length of the ArrayBuffer.
 * @param {Number} position - The position to set the Int8 value.
 * @param {Number} value - The Int8 value to set.
 * @returns {DataView} - The DataView of the ArrayBuffer with the Int8 value set.
 * @throws {Error} - Throws an error if the position is outside the range.
 */
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  
  view.setInt8(position, value);
  return view;
}
