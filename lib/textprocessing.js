/**
 * Created by zJJ on 8/12/2016.
 */
const tools = {
    regex_new_paragraph: /\\n\\n\s+/g,
    regex_asian_char_spacing: /\s/g,
    regex_english_line: /\\n/g
};
module.exports.buffer = function (data_line, options) {
    if (typeof options !== 'function') {

        if (options && typeof options.remove_space_asian_character === 'boolean' && options.remove_space_asian_character == true) {
            data_line = data_line.replace(tools.regex_asian_char_spacing, '');
        }

        if (options && typeof options.new_paragraph === 'boolean' && options.new_paragraph == true) {
            data_line = data_line.replace(tools.regex_new_paragraph, '');
        }

        if (options && typeof options.remove_single_n_english === 'boolean' && options.remove_single_n_english == true) {
            data_line = data_line.replace(tools.regex_english_line, '');
        }

        if (options && options.exeOrder_1 && typeof options.exeOrder_1 === 'function') {
            data_line = options.exeOrder_1(data_line);
        }

        if (options && options.exeOrder_2 && typeof options.exeOrder_2 === 'function') {
            data_line = options.exeOrder_2(tools, data_line);
        }

        if (options && options.exeOrder_3 && typeof options.exeOrder_3 === 'function') {
            data_line = options.exeOrder_3(tools, data_line);
        }

    }
    return data_line;
};

module.exports.finalize = function (data_line, options, callbackoutput) {

};

