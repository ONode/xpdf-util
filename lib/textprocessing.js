/**
 * Created by zJJ on 8/12/2016.
 */

module.exports.buffer = function (data_line, options) {
    if (typeof options !== 'function') {
        if (options && typeof options.remove_space_asian_character === 'boolean' && options.remove_space_asian_character == true) {
            data_line = data_line.replace(/\s/g, '');
        }
        if (options && typeof options.new_paragraph === 'boolean' && options.new_paragraph == true) {
            data_line = data_line.replace(/\\n\\n\s+/g, '');
        }
        if (options && options.customwork && typeof options.customwork === 'function') {
            data_line = options.customwork(data_line);
        }
    }
    return data_line;
};

module.exports.finalize = function (data_line, options, callbackoutput) {

};

