/**
 * iptUtils - General Purpose Utility Functions
 * Author: IlPlayerTop
 * License: Custom
 */

const iptUtils = {
    /**
     * Clamps a number between a minimum and maximum value.
     * @param {number} value - The number to clamp.
     * @param {number} min - Minimum allowed value.
     * @param {number} max - Maximum allowed value.
     * @returns {number}
     */
    clamp(value, min, max) {
        if (typeof value !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
            console.error('[iptUtils] Invalid parameters for clamp.');
            return NaN;
        }
        return Math.min(Math.max(value, min), max);
    },

    /**
     * Generates a random integer between min and max (inclusive).
     * @param {number} min - Minimum value.
     * @param {number} max - Maximum value.
     * @returns {number}
     */
    randomInt(min, max) {
        if (typeof min !== 'number' || typeof max !== 'number' || min > max) {
            console.error('[iptUtils] Invalid parameters for randomInt.');
            return NaN;
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};

// Example usage:
// console.log(iptUtils.clamp(15, 0, 10)); // Output: 10
// console.log(iptUtils.randomInt(1, 5)); // Output: random int between 1 and 5

module.exports = iptUtils;
