/**
 * Created by zJJ on 8/12/2016.
 */

module.exports.buffer = function (data_line, options) {
    if (typeof options !== 'function') {
        if (options && options.remove_space_asian_character && !isNaN(options.remove_space_asian_character)) {
            data_line = data_line.replace(/\s/g, '');
        }
        if (options && options.new_paragraph && !isNaN(options.new_paragraph)) {
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

