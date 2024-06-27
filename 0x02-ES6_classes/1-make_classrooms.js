import ClassRoom from './0-classroom.js';

/**
 * Initialize an array of ClassRoom objects with
 * specific sizes.
 */
export default function initializeRooms() {
	return {19, 20, 34}.map((size) => new ClassRoom(size));
}
